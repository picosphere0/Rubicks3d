// signup.js
import { supabase } from './supabase';

async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password
  });
  if (error) {
    console.error('Error signing up:', error.message);
  } else {
    console.log('User signed up:', user);
  }
}
