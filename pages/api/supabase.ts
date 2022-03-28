import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mipybzauhscokebogdtn.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pcHliemF1aHNjb2tlYm9nZHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgzNjIwNjQsImV4cCI6MTk2MzkzODA2NH0.85pnPWQfiNxb1NBOnnG2mEnub00eOujpQ1p1KYBgxVg';
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;