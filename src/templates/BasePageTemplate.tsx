import React, { PropsWithChildren } from 'react';

type Props = {
  header?: React.ReactElement;
  footer?: React.ReactElement;
};

export function BasePageTemplate({ header, footer, children }: PropsWithChildren<Props>) {
  return (
    <div className="group/design-root dark relative flex size-full min-h-screen flex-col overflow-x-hidden bg-background">
      <div className="layout-container flex h-full grow flex-col">
        {header}
        {children}
        {footer}
      </div>
    </div>
  );
}
