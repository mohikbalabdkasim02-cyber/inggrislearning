import { supabase } from './client'

export async function uploadSpeaking(blob: Blob) {
  const filename = `speaking-${Date.now()}.webm`

  const { error: uploadError } = await supabase.storage
    .from('speaking')
    .upload(filename, blob, {
      contentType: 'audio/webm',
    })

  if (uploadError) throw uploadError

  const { data } = supabase.storage
    .from('speaking')
    .getPublicUrl(filename)

  return data.publicUrl
}
