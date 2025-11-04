#!/usr/bin/env node
// Usage: SUPABASE_URL="..." SUPABASE_SERVICE_ROLE_KEY="..." node promote-admin.js <USER_UUID>
// WARNING: Do NOT commit your SUPABASE_SERVICE_ROLE_KEY. Keep it secret.

const { createClient } = require('@supabase/supabase-js');

async function main() {
  const userId = process.argv[2];
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables');
    process.exit(1);
  }

  if (!userId) {
    console.error('Usage: SUPABASE_URL="..." SUPABASE_SERVICE_ROLE_KEY="..." node promote-admin.js <USER_UUID>');
    process.exit(1);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  try {
    const { data, error } = await supabase.from('user_roles').insert({ user_id: userId, role: 'admin' }).select();
    if (error) {
      console.error('Error inserting admin role:', error.message || error);
      process.exit(1);
    }

    console.log('Inserted admin role:', data);
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
}

main();
