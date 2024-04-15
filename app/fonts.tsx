import { Domine, Holtwood_One_SC, Ovo, Tienne, Tinos } from 'next/font/google'

export const holtwood = Holtwood_One_SC({
  subsets: ['latin'],
  weight: '400',
})

export const tienne = Tienne({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
})

export const domine = Domine({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400', '700'],
})
