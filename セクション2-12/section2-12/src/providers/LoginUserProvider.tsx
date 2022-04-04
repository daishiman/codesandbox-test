import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

import { User } from '../components/types/api/user';

export type LoginUserContextType = {
  loginUser: User | undefined;
  setLoginUser: Dispatch<SetStateAction<User | undefined>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | undefined>(undefined);
  return <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>;
};
