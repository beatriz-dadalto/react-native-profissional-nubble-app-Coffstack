/**
 * @description Interface que define o domínio interno - model Post
 */
export interface Post {
  id: number;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
    id: number;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

/**
 * @description Interface que representa os dados como estão na API
 */
export interface PostAPI {
  id: number; // 1
  text: string; //'Bom dia!'
  user_id: number; // 1
  image_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg'
  is_fixed: boolean; // false
  is_activated: boolean; // true
  created_at: string; // '2024-03-18T18:01:08.783-03:00'
  updated_at: string; // '2024-03-18T18:01:08.789-03:00'
  user: {
    id: number; // 1
    first_name: string; // 'Maria'
    last_name: string; // 'Julia'
    username: string; // 'mariajulia'
    email: string; // 'mariajulia@coffstack.com'
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png'
    is_online: boolean; // false
    full_name: string; // 'Maria Julia'
  };
  status: string; // 'published'
  meta: {
    like_count: string; // '7'
    favorite_count: string; // '4'
    comments_count: string; // '2'
  };
}
