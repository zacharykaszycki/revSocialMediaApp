export interface IAppState {
    currentUser: IUser | null;
    postList: IPost[] | null;
}

export interface IUser{
    user_id: number;
    user_email: string;
    user_first_name: string;
    user_last_name: string;
    user_password: string;
    user_picture: any;
    user_username: string;
}

export interface IPost{
    post_id: number;
    post_content: string;
    post_dislikes: number;
    post_likes: number;
    post_time: string;
    user_fk: number;  
}

export const initialState: IAppState = {
    currentUser: null,
    postList: null
}