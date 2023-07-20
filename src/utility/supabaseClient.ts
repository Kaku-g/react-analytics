import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://pbnhmgraiiipxrodtrlm.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibmhtZ3JhaWlpcHhyb2R0cmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMDYzNTIsImV4cCI6MjAwMzc4MjM1Mn0.goPCr5ahYwb9y_-xAMiYdU1F9wusiQ7i2RMFytpCdcc";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
    db: {
        schema: "public",
    },
    auth: {
        persistSession: true,
    },

});
