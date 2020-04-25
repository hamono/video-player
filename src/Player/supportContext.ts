import React from "react";

export interface ISupportContext{
  notSupport:boolean,
  setNotSupport:React.Dispatch<React.SetStateAction<boolean>>;
}

const SupportContext=React.createContext<ISupportContext>(null);

export default SupportContext;