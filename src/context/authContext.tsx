import React, { createContext, useState } from "react";

interface props {
  children: React.ReactNode;
}

interface contextType {
  auth: any;
  setAuth: (value:any) => void
}

const initType:contextType ={
    auth: "fd",
    setAuth: function (){}
}
const AuthContext = createContext<contextType>(initType);

export const AuthProvider = ({ children }: props) => {
  const [auth, setAuth] = useState<any>({});

  //   const value = React.useMemo(() => {
  //     return { auth, setAuth };
  //   }, [history]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
