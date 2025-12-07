import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.VITE_API_URL,
    import.meta.env.VITE_API_KEY
);

if (!supabase) {
    throw new Error("Supabase client not initialized");
}

const supabaseClient = supabase;

export default supabaseClient;

