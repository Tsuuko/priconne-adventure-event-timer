import create from 'zustand';

import { useEffect, useState } from 'react';
import { persist } from 'zustand/middleware';

type PersistAppState = {
  firstSpawnTime?: string;
  setFirstSpawnTime: (firstSpawnTime: string) => void;
};

const initialState: Pick<PersistAppState, 'firstSpawnTime'> = {
  firstSpawnTime: undefined,
};

const emptyState: PersistAppState = {
  firstSpawnTime: undefined,
  setFirstSpawnTime: () => undefined,
};

const useStore = create(
  persist<PersistAppState>(
    (set) => ({
      ...initialState,
      setFirstSpawnTime: (firstSpawnTime) => set({ firstSpawnTime }),
    }),
    {
      name: 'priconne-adventure-event-timer',
    }
  )
);

// React Hydration Error対策
// https://github.com/pmndrs/zustand/issues/1145
export const usePersistAppStore = ((selector, compare) => {
  const store = useStore(selector, compare);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  return hydrated ? store : selector(emptyState);
}) as typeof useStore;
