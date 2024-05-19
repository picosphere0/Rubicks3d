// createComment.js
import { supabase } from './supabase';

async function createComment(postId, userId, content) {
  const { data, error } = await supabase
    .from('comments')
    .insert([
      { post_id: postId, user_id: userId, content }
    ]);
  if (error) {
    console.error('Error creating comment:', error.message);
  } else {
    console.log('Comment created:', data);
  }
}
