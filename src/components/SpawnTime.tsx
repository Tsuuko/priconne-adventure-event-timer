import { Box, chakra, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React from 'react';

export type SpawnTimeProps = {
  time?: dayjs.Dayjs;
  label: string;
};
export const SpawnTime: React.FC<SpawnTimeProps> = ({ time, label }) => {
  return (
    <Box borderColor="blackAlpha.300" borderWidth={1} rounded={6} px={4} py={3}>
      <Text fontSize="lg" fontWeight="semibold">
        {label}
      </Text>
      <Text fontSize="2xl" fontWeight="bold">
        {time ? (
          <>
            <chakra.span fontSize={'md'} mr={1}>
              {time.format('MM/DD')}
            </chakra.span>
            {time.format('HH:mm')}
            <chakra.span fontSize={'md'}>{time.format(':ss')}</chakra.span>
          </>
        ) : (
          '未登録'
        )}
      </Text>
    </Box>
  );
};
