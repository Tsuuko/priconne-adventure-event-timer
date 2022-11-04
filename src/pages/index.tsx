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
  const [headerColor] = useToken('colors', ['pink.100']);

  const firstSpawnTime = usePersistAppStore((v) => v.firstSpawnTime);
  const setFirstSpawnTime = usePersistAppStore((v) => v.setFirstSpawnTime);

  const getSpawnTime = (times: number) => {
    if (!firstSpawnTime) {
      return undefined;
    }
    return dayjs(firstSpawnTime).add(RESPAWN_DURATION_HOUR * times, 'h');
  };

  const spawnData: {
    label: string;
    time?: dayjs.Dayjs;
  }[] = [
    {
      label: '初回発生時刻',
      time: getSpawnTime(0),
    },
    {
      label: '2回目発生時刻',
      time: getSpawnTime(1),
    },
    {
      label: '3回目発生時刻',
      time: getSpawnTime(2),
    },
  ];
  const spawnTimes = spawnData
    .map((v) => v.time)
    .filter((v): v is dayjs.Dayjs => !!v);

  return (
    <Box>
      <Head>
        <title>プリコネアドベンチャータイマー</title>
        <meta name="theme-color" content={headerColor} />
      </Head>
      <VStack spacing={6}>
        <Header bgColor={headerColor} />
        <Center>
          {firstSpawnTime && <CountDownTimer times={spawnTimes} />}
        </Center>
        <Wrap spacing={5} shouldWrapChildren={true} justify="center" px={2}>
          {spawnData.map((v) => (
            <SpawnTime key={v.label} time={v.time} label={v.label} />
          ))}
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
