import {CardPrams} from './src/components/Home/Board/BoardCard';

type createResult = {
  success: boolean;
  error?: string | null;
};
type UseSignInResult = {
  loading: boolean;
  signIn: (email: string, password: string) => Promise<createResult>;
};

type UseSignUpResult = {
  loading: boolean;
  signUp: (email: string, password: string) => Promise<createResult>;
};

type board = {
  title: string;
};
type boards = {
  createdAt: string;
  description: string;
  title: string;
  userId: string;
  boardId: string;
};

type useCreareNewBoardResult = {
  loading: boolean;
  createNewBoard: (title: string, description: string) => Promise<createResult>;
};
type UseNewGroupResult = {
  loading: boolean;
  newGroup: (name: string, color: string, Id: string) => Promise<createResult>;
};
type groups = {
  name: string;
  color: string;
  userId: string;
  boardId: string;
  groupId: string;
};

type UseNewTaskResult = {
  loading: boolean;
  newTask: (
    title: string,
    content: string,
    groupId: string,
  ) => Promise<createResult>;
};
