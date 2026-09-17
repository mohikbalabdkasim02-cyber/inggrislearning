import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL!,
 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function uploadSpeakingAudio(file: File, userId: string){
 const path = `${userId}/${Date.now()}-${file.name}`
 const { data, error } = await supabase.storage
  .from('speaking-audio')
  .upload(path,file)

 if(error) throw error
 return data.path
}
