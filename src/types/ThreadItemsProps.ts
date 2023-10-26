export type ThreadPostsProps = {
  id?: number;
  content: string;
  image: string;
  created_at: string;
  user_id: {
    full_name: string;
    profile_picture: string;
  };
  numOfLikes: number;
  numOfReplies: number;
};

export type ThreadItemsProps = {
  id?: number;
  username: string;
  userphoto: string;
  content: string;
  image: string;
  date: string;
  likes: number;
  replies: number;
};

export type UseThreadProps = {
  content: string,
  image: string,
  user_id: number,
}
// export type ThreadItemsPropsv1 = {
//     id?: number;
//     avatar: string;
//     date: string;
//     message: string;
//     name: string;
//     replies: number;
//     image: string;
//   };
