import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zsyxpnjxzfyuthmbqbny.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzeXhwbmp4emZ5dXRobWJxYm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNTUxNjAsImV4cCI6MjA1MzkzMTE2MH0.64e4G7z2TIwMQ63igFu3JNeC8OVNoQ-QbJVif0TcA6w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
