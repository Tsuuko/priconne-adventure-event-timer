import { BoxProps, Center, HStack } from '@chakra-ui/react';
import React from 'react';

import Image from 'next/image';
import { GITHUB_REPO_URL, TWITTER_URL } from '../constant';
import { LinkButton } from './LinkButton';
export const Footer: React.FC<BoxProps> = (props) => {
  return (
    <Center {...props} py={2}>
      <HStack>
        <LinkButton
          href={GITHUB_REPO_URL}
          image={
            <Image src="/github.svg" alt="github" width="20" height="20" />
          }
          text="GitHub"
        />
        <LinkButton
          href={TWITTER_URL}
          image={
            <Image src="/twitter.svg" alt="twitter" width="20" height="20" />
          }
          text="Twitter"
        />
      </HStack>
    </Center>
  );
};
