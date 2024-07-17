import { createContext, useContext, useState } from "react"

// createContext
const UserContext = createContext()

// useContext
export const UserAuth = () => {
  return useContext(UserContext)
}

export default function AuthContextProvider({ children }) {
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  // const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        isLoggedOut,
        // user
      }}
    >
      {children}
    </UserContext.Provider>
  );
}