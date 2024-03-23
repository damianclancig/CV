import { Holtwood_One_SC, Tienne } from 'next/font/google'

export const holtwood = Holtwood_One_SC({
  subsets: ['latin'],
  weight: '400',
})

export const tienne = Tienne({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})
