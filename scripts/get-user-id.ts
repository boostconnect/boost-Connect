import { supabase } from "../src/integrations/supabase/client";

async function getUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error:', error.message);
    return;
  }
  
  console.log('Your user ID:', user?.id);
  console.log('Your email:', user?.email);
}

getUser();