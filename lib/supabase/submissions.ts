import { supabase } from './client'

export async function createSpeakingSubmission(data: {
  student_id: string
  activity_id: string
  audio_url: string
  duration: number
}) {
  return supabase
    .from('speaking_submissions')
    .insert(data)
    .select()
    .single()
}

export async function getSpeakingProgress(studentId: string) {
  return supabase
    .from('speaking_submissions')
    .select('*')
    .eq('student_id', studentId)
    .order('created_at', { ascending: false })
}
