import { createContext } from 'react';
import { PostsContextType } from '../../../@types';

const PostsContext = createContext({} as PostsContextType);

export default PostsContext;
