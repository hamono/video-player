import { Modal } from "antd";
import SupportContext from "./supportContext";
import React from "react";

export default function Warning() {
  const { setSupport } = React.useContext(SupportContext);
  Modal.warning({
    title: '格式不支持',
    content: '请放入视频文件,目前只支持MP4，OGG，WEBM格式的视频文件',
    onOk() { setSupport(true) }
  });
}

export function Error() {
  Modal.error({
    title: '播放错误',
    content: <div>
      <div>1. 请尝试重新加载</div>
      <div>2. 请确保视频格式正确（目前只支持MP4，OGG，WEBM格式）</div>
      <div>3. 请确保mp4格式的视频为H.246的编码格式</div>
    </div>
    ,
  });
}
