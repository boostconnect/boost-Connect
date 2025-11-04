# Granting Admin Access

This project uses Supabase and a `user_roles` table to manage roles. By default new users are given the `user` role.

Contact Information:
- For admin access requests: boost1connect@gmail.com
- Include your user ID and email in the request

Options to grant admin:

1) Supabase Dashboard (recommended)
- Go to your Supabase project -> SQL Editor or Table Editor
- Run the SQL in `sql/grant_admin.sql`, replacing `<USER_UUID>` with the user's id (from Auth -> Users)

2) Use the included script (server-side only)
- Do NOT commit or expose the service role key.
- Run locally or on a secure server with environment variables set:

```bash
SUPABASE_URL="https://your-project.supabase.co" \
SUPABASE_SERVICE_ROLE_KEY="<SERVICE_ROLE_KEY>" \
node scripts/promote-admin.js <USER_UUID>
```

3) Add an initial admin in migrations
- If you want a seeded admin, add an INSERT into your migration SQL using the admin user's UUID.

Security notes
- Never store or publish the Supabase service role key in client-side code.
- Only trusted back-end processes should use the service role key.

If you'd like, I can also add a protected serverless endpoint (e.g. Vercel Serverless Function) to allow existing admins to promote users.
