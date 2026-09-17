"use client"

import { useEffect, useRef, useState } from "react"
import { uploadSpeaking } from "@/lib/supabase/speaking"

export default function SpeakingRecorder() {
  const [recording, setRecording] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [audioUrl, setAudioUrl] = useState("")
  const [uploading, setUploading] = useState(false)
  const recorder = useRef<MediaRecorder | null>(null)
  const chunks = useRef<Blob[]>([])

  useEffect(() => {
    if (!recording) return
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(timer)
  }, [recording])

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    chunks.current = []
    setSeconds(0)

    const media = new MediaRecorder(stream)

    media.ondataavailable = (event) => chunks.current.push(event.data)

    media.onstop = async () => {
      const blob = new Blob(chunks.current, { type: "audio/webm" })
      setAudioUrl(URL.createObjectURL(blob))

      try {
        setUploading(true)
        await uploadSpeaking(blob)
      } finally {
        setUploading(false)
      }

      stream.getTracks().forEach((track) => track.stop())
    }

    recorder.current = media
    media.start()
    setRecording(true)
  }

  const stop = () => {
    recorder.current?.stop()
    setRecording(false)
  }

  return (
    <div className="p-4 rounded-xl border space-y-4">
      <h2 className="font-bold">Speaking Practice</h2>
      {recording && <p>🔴 Recording {seconds}s</p>}
      {uploading && <p>☁️ Uploading...</p>}
      <button className="rounded-xl border px-5 py-2" onClick={recording ? stop : start}>
        {recording ? "⏹ Stop Recording" : "🎤 Start Recording"}
      </button>
      {audioUrl && <audio controls src={audioUrl} />}
    </div>
  )
}
