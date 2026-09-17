"use client"

import { useRef, useState } from "react"

export default function SpeakingRecorder() {
  const [recording, setRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState("")
  const recorder = useRef<MediaRecorder | null>(null)
  const chunks = useRef<Blob[]>([])

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    chunks.current = []
    const media = new MediaRecorder(stream)

    media.ondataavailable = (event) => chunks.current.push(event.data)
    media.onstop = () => {
      const blob = new Blob(chunks.current, { type: "audio/webm" })
      setAudioUrl(URL.createObjectURL(blob))
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
      <button className="rounded-xl border px-5 py-2" onClick={recording ? stop : start}>
        {recording ? "⏹ Stop Recording" : "🎤 Start Recording"}
      </button>
      {audioUrl && <audio controls src={audioUrl} />}
    </div>
  )
}
