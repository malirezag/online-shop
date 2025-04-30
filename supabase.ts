import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://czkpmqquhaeubnpblmyh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6a3BtcXF1aGFldWJucGJsbXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MDYzMjEsImV4cCI6MjA2MTA4MjMyMX0.TUblogq6IefXzYvseUhZG6m-GIWVSLsIjmPv1KbsOSs";
export const supabase = createClient(supabaseUrl, supabaseKey);
