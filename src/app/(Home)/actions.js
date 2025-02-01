"use server";
import { createClient } from "@/utils/supabase/server";

export async function fetchServices() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("services")
    .select("*, profiles(full_name)");

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, data };
}
