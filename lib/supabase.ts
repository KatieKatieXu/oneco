import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dclvwwatqfwchxkpklvg.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbHZ3d2F0cWZ3Y2h4a3BrbHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5NDkxOTgsImV4cCI6MjA5MTUyNTE5OH0.B9Z3OgDXoebBQNRyif1GFiKL2xaYAq2tjhY4Xy7xjqw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
