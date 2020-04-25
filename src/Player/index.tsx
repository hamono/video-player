import React from "react";
import useDrop from "./useDrop";
import preventDefaultAction from "./preventDefaultAction";
import Warning, { Error } from './alert';
import Size from "./sizeStyle";

export default function Player({ size, children, pre, post, className ,controls}:
  React.PropsWithChildren<{ size: number, pre?: string, post?: string, className?: string,controls?:boolean }>) {
  const video = React.useRef(null);
  const [play, handleDrop, notSupport] = useDrop(video)
  React.useEffect(() => {
    document.addEventListener('dragover', preventDefaultAction, false)
    document.addEventListener('dragenter', preventDefaultAction, false)
  })

  return <video
    className={className}
    src={play}
    ref={video}
    controls={controls?controls:true}
    preload={pre ? pre : 'metadata'}
    onDrop={handleDrop}
    onError={Error}
    poster={post ? post === 'default' ? 'http://www.hamomo.top/images/defaultPoster.jpg' : post:''}
    style={Size(size)} >
    {!notSupport && Warning}
    {children}
  </video >
}