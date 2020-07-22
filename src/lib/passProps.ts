import React, { ReactNode } from 'react';

export function passProps(children: ReactNode, props: object): ReactNode {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ...props });
  }

  return children;
}
