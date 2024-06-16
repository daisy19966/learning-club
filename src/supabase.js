import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ikjylzfbsbyiqjekkpax.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlranlsemZic2J5aXFqZWtrcGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMTkzNzYsImV4cCI6MjAzMTY5NTM3Nn0.IhTds5Kr5fvCejMUXcRioJwAhba68JctXWR_rCRb3Kw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
