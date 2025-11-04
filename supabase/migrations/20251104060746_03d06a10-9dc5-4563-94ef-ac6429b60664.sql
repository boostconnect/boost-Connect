-- Block anonymous access to profiles table
-- This prevents unauthenticated users from querying email addresses
CREATE POLICY "Block anonymous access to profiles"
  ON public.profiles
  FOR SELECT
  TO anon
  USING (false);