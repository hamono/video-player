# video-player

[![mit badge](https://img.shields.io/github/license/hamono/video-player)](https://github.com/hamono/video-player/LICENSE)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/hamono/video-player)

简单的视频播放器，

支持拖入播放本地视频；

判断视频格式合理显示错误信息，优化用户体验；

## 安装

    yarn add https://github.com/hamono/video-player.git

## 使用说明

    import Video from 'video-player';

    <Video size={} >
      <source src='' type='file/mp4'>
    </Video>

## API

|API|可选性|含义|类型|
|:-:|:-:|:-:|:-:|
|src|必选|文件URL|String|
|size|必选|大小，表示宽度，只支持16:9，高度自动计算|Number|
|pre|可选|同video标签的preload，默认为metadata|String|
|controls|可选|同video标签的controls，默认为true，即显示控件|Boolean|
|post|可选|同video标签的poster，可选参数`default`，显示特定图片|String|
