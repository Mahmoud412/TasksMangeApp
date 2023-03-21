type SignInResult = {
  success: boolean;
  error?: string | null;
};
type UseSignInResult = {
  loading: boolean;
  signIn: (email: string, password: string) => Promise<SignInResult>;
};

type SignUpResult = {
  success: boolean;
  error?: string | null;
};
type UseSignUpResult = {
  loading: boolean;
  signUp: (email: string, password: string) => Promise<SignUpResult>;
};

type board = {
  title: string;
};
type boards = {
  createdAt: string;
  description: string;
  title: string;
  userId: string;
};
type createNewBoardResult = {
  success: boolean;
  error?: string | null;
};
type useCreareNewBoardResult = {
  loading: boolean;
  createNewBoard: (
    title: string,
    description: string,
  ) => Promise<CreateNewBoardResult>;
};
