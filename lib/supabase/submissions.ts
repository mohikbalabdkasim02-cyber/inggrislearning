import { createClient } from './client'

export async function createSpeakingSubmission(data:{student_id:string; activity_id:string; audio_url:string; duration:number}){
 const supabase=createClient()
 return supabase.from('speaking_submissions').insert(data).select().single()
}
