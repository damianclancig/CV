import { Sheet } from './components/Sheet'
import { tienne } from './fonts'

export default function Home() {
  return (
    <>
      <div className={`${tienne.className} antialiased flex justify-center`}>
        <Sheet></Sheet>
      </div>
    </>
  )
}
