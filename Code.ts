import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

const SUPABASE_URL = "{{SUPABASE_URL}}";  // Replace with your Supabase URL
const SUPABASE_KEY = "{{SUPABASE_KEY}}";  // Replace with your Supabase Key

serve(async () => {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/status?select=*`,
      {
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error("Supabase responded with an error:", response.status);
      return new Response("Supabase Down", { status: 500 });
    }

    const data = await response.json();
    if (data && Array.isArray(data)) {
      return new Response("Supabase Active", { status: 200 });
    }
    return new Response("Unexpected response from Supabase", { status: 500 });
  } catch (error) {
    console.error("Error connecting to Supabase:", error);
    return new Response("Error connecting to Supabase", { status: 500 });
  }
});
