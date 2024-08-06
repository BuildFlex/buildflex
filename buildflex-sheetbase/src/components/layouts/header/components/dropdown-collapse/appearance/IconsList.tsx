import {
  Cake,
  Cd,
  Chrome,
  Coffee,
  Crown,
  Discover,
  EmojiNormal,
  EmojiSad,
  EmptyWallet,
  Folder,
  Home,
  I3Dcube,
  Ranking,
  Chart,
  Share,
  Speedometer,
  Story,
  Triangle,
} from 'iconsax-react';
import React from 'react';
export interface IIConList {
  name: string;
  icon: JSX.Element;
}
export const IconsList: IIConList[] = [
  {
    name: 'Folder',
    icon: <Folder size={20} />,
  },
  {
    name: 'Emoji Normal',
    icon: <EmojiNormal size={20} />,
  },
  {
    name: 'Chrome',
    icon: <Chrome size={20} />,
  },
  {
    name: 'Triangle',
    icon: <Triangle size={20} />,
  },
  {
    name: '3Dcube',
    icon: <I3Dcube size={20} />,
  },
  {
    name: 'Story',
    icon: <Story size={20} />,
  },
  {
    name: 'Share',
    icon: <Share size={20} />,
  },
  {
    name: 'Cake',
    icon: <Cake size={20} />,
  },
  {
    name: 'Crown',
    icon: <Crown size={20} />,
  },
  {
    name: 'Emoji Sad',
    icon: <EmojiSad size={20} />,
  },
  {
    name: 'CD',
    icon: <Cd size={20} />,
  },
  {
    name: 'Chart',
    icon: <Chart size={20} />,
  },
  {
    name: 'Coffee',
    icon: <Coffee size={20} />,
  },
  {
    name: 'Discover',
    icon: <Discover size={20} />,
  },
  {
    name: 'Speedometer',
    icon: <Speedometer size={20} />,
  },
  {
    name: 'Ranking',
    icon: <Ranking size={20} />,
  },
  {
    name: 'Home',
    icon: <Home size={20} />,
  },
  {
    name: 'Empty wWallet',
    icon: <EmptyWallet size={20} />,
  },
];
