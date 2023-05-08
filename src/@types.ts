export type Post = {
  id: string;
  timestamp: number;
}

export type PostHour = {
  postCount: number;
  posts: Post[];
};

export type PostsByDay = {
  sunday: PostHour[];
  monday: PostHour[];
  tuesday: PostHour[];
  wednesday: PostHour[];
  thursday: PostHour[];
  friday: PostHour[];
  saturday: PostHour[];
  [key: string]: PostHour[];
};


export type PostsContextType = {
  postsByDay:PostsByDay;
  totalPostCount: number;
  updatePosts: (posts: Post) => void;
};


export type ModalPropsType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  posts: Post[];
}
