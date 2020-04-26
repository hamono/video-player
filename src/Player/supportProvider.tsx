import SupportContext from "./supportContext";
import React from "react";

export default function SupportProvider({children}:React.PropsWithChildren<{}>){
  const [support, setSupport] = React.useState(true);

  return <SupportContext.Provider value={{support,setSupport}}>
    {children}
    </SupportContext.Provider>
}