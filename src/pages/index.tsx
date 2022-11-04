import { Box, Button, Center, useToken, VStack, Wrap } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { NextPage } from 'next';
import Head from 'next/head';
import { CountDownTimer } from '../components/CountDownTimer';
import { Header } from '../components/Header';
import { SpawnTime } from '../components/SpawnTime';
import { RESPAWN_DURATION_HOUR } from '../constant';
import { usePersistAppStore } from '../store/persistAppStore';

const Home: NextPage = () => {
  const spawnLabels = ['初回発生時刻', '2回目発生時刻', '3回目発生時刻'];

  const [headerColor] = useToken('colors', ['pink.100']);

  const firstSpawnTime = usePersistAppStore((v) => v.firstSpawnTime);
  const setFirstSpawnTime = usePersistAppStore((v) => v.setFirstSpawnTime);

  const spawnData: {
    label: string;
    time: dayjs.Dayjs;
  }[] = [
    {
      label: '初回発生時刻',
      time: dayjs(firstSpawnTime),
    },
    {
      label: '2回目発生時刻',
      time: dayjs(firstSpawnTime).add(RESPAWN_DURATION_HOUR * 1, 'h'),
    },
    {
      label: '3回目発生時刻',
      time: dayjs(firstSpawnTime).add(RESPAWN_DURATION_HOUR * 3, 'h'),
    },
  ];

  const getSpawnTime = (firstSpawnTime: string, times: number) => {
    return dayjs(firstSpawnTime).add(RESPAWN_DURATION_HOUR * times, 'h');
  };

  return (
    <Box>
      <Head>
        <title>プリコネアドベンチャータイマー</title>
        <meta name="theme-color" content={headerColor} />
      </Head>
      <VStack spacing={6}>
        <Header bgColor={headerColor} />
        <Center>
          {firstSpawnTime && (
            <CountDownTimer times={spawnData.map((v) => v.time).slice(1)} />
          )}
        </Center>
        <Wrap spacing={5} shouldWrapChildren={true} justify="center" px={2}>
          {spawnLabels.map((label, i) => {
            const time = firstSpawnTime
              ? getSpawnTime(firstSpawnTime, i)
              : undefined;
            return <SpawnTime key={label} time={time} label={label} />;
          })}
        </Wrap>
        <Button
          size="lg"
          colorScheme="pink"
          variant="outline"
          onClick={() => {
            setFirstSpawnTime(new Date().toISOString());
          }}
        >
          初回発生時刻 登録
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
