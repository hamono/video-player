import * as React from 'react';
import Player from './Player';
import SupportProvider from './Player/supportProvider';

export default function Video({src, size, children, pre, post, className }:
  React.PropsWithChildren<{src:string, size: number, pre?: string, post?: string, className?: string }>) {

  return <SupportProvider>
    <Player src={src} size={size} pre={pre} post={post} className={className}>
      {children}
    </Player>
  </SupportProvider>
}
