import type { FC } from 'react';

export type TabData = {
  title: string;
  isActive: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: FC<any>;
};
