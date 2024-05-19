// fetchPosts.js
import { supabase } from './supabase';

async function fetchPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*');
  if (error) {
    console.error('Error fetching posts:', error.message);
  } else {
    console.log('Posts fetched:', data);
  }
}
