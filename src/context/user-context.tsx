import { createContext, useState } from "react";

interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  city: string;
  token: string;
  role: string;
}

const UserContext = createContext<any>(undefined);

export const UserProvider = (props: any) => {
  const [user, setUser] = useState<User | undefined>();

  function logOut(): void {
    // setUser();
  }
  return (
    <UserContext.Provider value={{ user, setUser, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
