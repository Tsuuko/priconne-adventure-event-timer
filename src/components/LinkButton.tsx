import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export type LinkButtonProps = {
  href: string;
  image: React.ReactElement;
  text: string;
};
export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  image,
  text,
}) => {
  return (
    <Link href={href}>
      <Button size="sm" variant="outline" leftIcon={image}>
        {text}
      </Button>
    </Link>
  );
};
