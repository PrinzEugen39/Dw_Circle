export interface IReduxUser {
    id: number;
    username: string;
    full_name: string;
    email: string;
    profile_picture: string;
    password: string;
    profile_description: string;
    numfollowers: number;
    numfollowing: number;
  }