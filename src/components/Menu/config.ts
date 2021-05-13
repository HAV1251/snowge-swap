import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pancakeswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Website',
        href: 'https://www.snowgecoin.com',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/snowgecoin',
      },
      {
        label: 'Github',
        href: 'https://github.com/snowgecoin',
      },
      {
        label: 'Reddit',
        href: 'https://reddit.com/r/snowgecoin',
      },
      {
        label: 'Blog',
        href: 'https://snowgecoin.medium.com',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/snowgecoin',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/qy3ymqazeJ',
      },
    ],
  },
]

export default config
