const supabaseUrl = 'https://deysheictwhkfwfkwjjt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRleXNoZWljdHdoa2Z3Zmt3amp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzA1MTUsImV4cCI6MjA4OTk0NjUxNX0.aGQqpQwJV-YNddBJKd21hz1ycx8rcpYCCTANxKKCZUs';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Meeka export karanna (Naththam anith files walata use karanna baha)
window.supabaseClient = _supabase;

