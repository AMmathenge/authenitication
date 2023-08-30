import { supabase } from "$lib/helper/supabase";

  export async function load() {
    const { data } = await supabase.from("userinfo").select();
    return {
      userinfo: data ?? [],
    };
  }