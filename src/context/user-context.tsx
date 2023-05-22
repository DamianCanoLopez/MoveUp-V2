import { Dispatch, SetStateAction, createContext, useState } from "react";

interface UserContext {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  logOut: () => void;
}

interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  city?: string;
  token: string;
  role: string;
}

const UserContext = createContext<UserContext>({
  user: undefined,
  setUser: () => {},
  logOut: () => {},
});

export const UserProvider = (props: any) => {
  const [user, setUser] = useState<User | undefined>();

  function logOut(): void {
    setUser(undefined);
  }
  return (
    <UserContext.Provider value={{ user, setUser, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
