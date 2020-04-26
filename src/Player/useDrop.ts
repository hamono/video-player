import React from "react";
import isVideo from "./isVideo";
import SupportContext from "./supportContext";

export default function useDrop(
  Ref: React.MutableRefObject<any>,
  src:string
): [string, (e: React.DragEvent<HTMLVideoElement>) => void,boolean] {
  const [play,setPlay]=React.useState(src)
  const {support,setSupport}=React.useContext(SupportContext)
  const handleDrop = React.useCallback(
    (e: React.DragEvent<HTMLVideoElement>) => {
      e.stopPropagation();
      e.preventDefault();
      const video = e.dataTransfer;
      const temp = isVideo(video.files[0].name);
      console.log(support);
      if (temp) {
        const URL = window.URL || window.webkitURL;
        setPlay(URL.createObjectURL(video.files[0]));
        Ref.current.src = play;
      } else {
        setSupport(false);
      }
    },
    [Ref, support, play, setSupport]
  );
  return [play, handleDrop,support];
}
