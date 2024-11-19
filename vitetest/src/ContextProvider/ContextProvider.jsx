import { createContext, useContext, useState } from "react";

export const UserCotext = createContext({});

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState();
  return (
    <UserCotext.Provider value={{ username, setUsername }}>
      {children}
    </UserCotext.Provider>
  );
};

export default function useUser() {
  return useContext(UserCotext);
}
