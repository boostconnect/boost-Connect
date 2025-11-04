-- Grant admin role to a user (replace <USER_UUID> with the user's id)
-- Run this in Supabase SQL editor (Dashboard -> SQL Editor)

INSERT INTO public.user_roles (user_id, role)
VALUES ('<USER_UUID>', 'admin');

-- Verify
SELECT * FROM public.user_roles WHERE user_id = '<USER_UUID>';
