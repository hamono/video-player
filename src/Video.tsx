import * as React from 'react';
import Player from './Player';
import SupportProvider from './Player/supportProvider';

export default function Video({ size, children, pre, post, className }:
  React.PropsWithChildren<{ size: number, pre?: string, post?: string, className?: string }>) {

  return <SupportProvider>
    <Player size={size} pre={pre} post={post} className={className}>
      {children}
    </Player>
  </SupportProvider>
}
