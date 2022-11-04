import { Box, chakra, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';

export type CountDownTimerProps = {
  times: dayjs.Dayjs[];
};
export const CountDownTimer: React.FC<CountDownTimerProps> = ({ times }) => {
  const [countDown, setCountDown] = useState<{
    h: string;
    m: string;
    s: string;
  }>();

  const calculateTime = useCallback(() => {
    const nextTime = times.find((v) => v.diff(new Date()) > 0);

    if (!nextTime) {
      setCountDown(undefined);
      return;
    }

    const diff = nextTime.diff(new Date());
    const h = diff / (1000 * 60 * 60);
    const m = (h - Math.floor(h)) * 60;
    const s = (m - Math.floor(m)) * 60;

    setCountDown({
      h: String(Math.floor(h)).padStart(2, '0'),
      m: String(Math.floor(m)).padStart(2, '0'),
      s: String(Math.floor(s)).padStart(2, '0'),
    });
  }, [times]);

  useEffect(() => {
    const interval = setInterval(() => calculateTime(), 1000);
    return () => clearInterval(interval);
  }, [calculateTime]);

  return (
    <Box
      borderColor="blackAlpha.300"
      borderWidth={1}
      rounded={6}
      px={10}
      py={3}
    >
      <Text fontSize="lg" fontWeight="semibold"></Text>
      <Text fontSize="2xl" fontWeight="bold">
        <chakra.span fontSize={'md'} mr={1}>
          次回発生まで
        </chakra.span>
        {countDown
          ? `${String(countDown?.h)}:${countDown?.m}:${countDown?.s}`
          : '00:00:00'}
      </Text>
    </Box>
  );
};
