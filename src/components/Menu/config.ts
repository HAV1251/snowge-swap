import { MenuEntry } from '@snowge/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://snowgecoin.com/',
  },
  {
    label: 'Swap',
    icon: 'TradeIcon',
    href: '/swap',
  },
  {
    label: 'Liquidity',
    icon: 'TradeIcon',
    href: '/pool',
  },
  {
    label: 'FloofyLinks',
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
