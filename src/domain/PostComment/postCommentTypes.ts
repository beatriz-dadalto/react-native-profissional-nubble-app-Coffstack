/**
 * @description Interface que define o domínio interno - model PostComment
 */
export interface PostComment {
  id: string;
  message: string;
  created_at: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

/**
 * @description Interface que representa os dados como estão na API
 */
export interface PostCommentAPI {
  id: number; // 97;
  message: string; // 'Dedecor verbera aegrus autus bos suggero.';
  user_id: number; // 6;
  post_id: number; // 1;
  created_at: string; // '2024-03-23T10:18:58.000-03:00';
  updated_at: string; // '2024-03-23T21:12:00.306-03:00';
  user: {
    id: number; // 6;
    first_name: string; // 'Samuel';
    last_name: string; // 'Vilar';
    username: string; // 'samuelvilar';
    email: string; // 'samu.vilar@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/5-samuel.png';
    is_online: boolean; // false;
    full_name: string; // 'Samuel Vilar';
  };
  post: {
    id: number; // 1;
    text: string; // 'Bom dia!';
    user_id: number; // 1;
    image_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg';
    is_fixed: boolean; // false;
    is_activated: boolean; // true;
    created_at: string; // '2024-03-23T21:11:58.571-03:00';
    updated_at: string; // '2024-03-23T21:11:58.577-03:00';
    status: string; // 'published';
    meta: {};
  };
  meta: {};
}
