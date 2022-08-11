import React from 'react';

import tw from 'twin.macro';

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <div css={[tw`px-8 py-4`]}>{children}</div>;
};

export default DefaultLayout;
