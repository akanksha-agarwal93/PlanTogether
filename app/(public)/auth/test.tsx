"use client";

import { supabase } from "@/utils/supabase";

export default function Test() {
  const test = async () => {
    console.log("Testing Supabase...");
    const { data } = await supabase.auth.getSession();
    console.log(data);
  };

  return <button onClick={test}>Test Supabase</button>;
}