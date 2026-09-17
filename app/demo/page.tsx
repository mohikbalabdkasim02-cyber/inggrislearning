import SpeakingRecorder from '@/components/recorder/SpeakingRecorder'

export default function DemoPage(){
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Speaking Demo</h1>
      <p className="mt-3 text-lg">Practice your pronunciation and speaking skill.</p>
      <SpeakingRecorder />
    </main>
  )
}
