import { Heading, StackProps } from '@chakra-ui/react';
import React from 'react';

export type HeaderProps = Pick<StackProps, 'bgColor'>;
export const Header: React.FC<HeaderProps> = ({ bgColor }) => {
  return (
    <Heading
      as="h1"
      size="lg"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      bgColor={bgColor}
      w="full"
      px={5}
      py={3}
    >
      <span>プリコネ</span>
      <span>アドベンチャー</span>
      <span>タイマー</span>
    </Heading>
  );
};
