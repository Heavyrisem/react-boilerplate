import React from 'react';

import tw from 'twin.macro';

import useCounter from '@hooks/useCounter';

const CounterButtonStyle = tw`rounded-xl select-none font-bold border-2 border-purple-500 py-2 text-center w-[45%] cursor-pointer transition-all hover:bg-purple-500 hover:text-white`;

const HelloWorld: React.FC = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div css={[tw`inline-block`]}>
      <div css={[tw`rounded-xl border-2 border-purple-500 px-4 py-2 mb-4`]}>Hello World</div>

      <div css={[tw`text-center font-bold text-xl`]}>{count}</div>
      <div css={[tw`w-full flex justify-between py-4`]}>
        <span css={[CounterButtonStyle]} onClick={decrement}>
          -
        </span>
        <span css={[CounterButtonStyle]} onClick={increment}>
          +
        </span>
      </div>
    </div>
  );
};

export default HelloWorld;
