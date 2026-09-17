"use client"

import { useRef, useState } from "react"

export default function SpeakingRecorder() {
  const [recording, setRecording] = useState(false)
  const recorder = useRef<MediaRecorder | null>(null)

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    recorder.current = new MediaRecorder(stream)
    recorder.current.start()
    setRecording(true)
  }

  const stop = () => {
    recorder.current?.stop()
    recorder.current?.stream.getTracks().forEach((track) => track.stop())
    setRecording(false)
  }

  return (
    <div className="p-4 rounded-xl border">
      <h2>Speaking Practice</h2>
      <button onClick={recording ? stop : start}>
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  )
}
