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
