import React from "react";

export interface ISupportContext{
  support:boolean,
  setSupport:React.Dispatch<React.SetStateAction<boolean>>;
}

const SupportContext=React.createContext<ISupportContext>(null);

export default SupportContext;