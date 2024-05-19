// createPost.js
import { supabase } from './supabase';

async function createPost(userId, title, content) {
  const { data, error } = await supabase
    .from('posts')
    .insert([
      { user_id: userId, title, content }
    ]);
  if (error) {
    console.error('Error creating post:', error.message);
  } else {
    console.log('Post created:', data);
  }
}

export default createPost;
