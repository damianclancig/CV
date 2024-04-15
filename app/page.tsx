import { Sheet } from './components/Sheet'
import { tinos } from './fonts'

export default function Home() {
  return (
    <>
      <div
        id="principal"
        className={`${tinos.className} antialiased text-xl flex justify-center`}
      >
        <Sheet></Sheet>
      </div>
    </>
  )
}
