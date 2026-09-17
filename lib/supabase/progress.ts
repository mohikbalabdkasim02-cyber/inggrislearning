import { supabase } from './client'

export async function getStudentProgress(studentId: string) {
  return supabase
    .from('speaking_submissions')
    .select('id, audio_url, duration, created_at, activity_id')
    .eq('student_id', studentId)
    .order('created_at', { ascending: false })
}

export async function countSpeakingPractice(studentId: string) {
  const { count } = await supabase
    .from('speaking_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('student_id', studentId)

  return count ?? 0
}
