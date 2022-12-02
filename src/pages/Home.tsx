import React from 'react';

import tw from 'twin.macro';

import HelloWorld from '@components/HelloWorld';
import DefaultLayout from '@components/Layouts/DefaultLayout';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <div css={[tw`text-4xl font-extrabold mb-8 bg-zinc-800`]}>Home</div>
      <HelloWorld />
    </DefaultLayout>
  );
};

export default Home;
