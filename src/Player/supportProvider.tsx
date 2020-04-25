import SupportContext from "./supportContext";
import React from "react";

export default function SupportProvider({children}:React.PropsWithChildren<{}>){
  const [notSupport, setNotSupport] = React.useState(true);

  return <SupportContext.Provider value={{notSupport,setNotSupport}}>
    {children}
    </SupportContext.Provider>
}