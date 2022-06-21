import React, { useState } from "react";

export const Context = React.createContext();

export default function AdminUserContext({ children }) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const login = (email, password) => {
    setUser({
      name: "Sr MOntanher",
      email,
      password,
    });
    setIsLogged(true);
  };
  const logout = () => {
    setUser(null);
    setIsLogged(false);
  };

  return (
    <Context.Provider value={{ user, isLogged, login, logout }}>
        {children}
    </Context.Provider>
    );
}