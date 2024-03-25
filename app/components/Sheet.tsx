import { CenterColumn } from './CenterColumn'
import { Header } from './Header'
import { SideColumn } from './SideColumn'

export function Sheet() {
  return (
    <>
      <div className="justify-center max-w-6xl shadow-lg shadow-white rounded border border-cyan-400">
        <Header />
        <div className="">
          <div className="flex bg-gray-200 text-black rounded-bl">
            <SideColumn />
            <CenterColumn />
          </div>
        </div>
      </div>
    </>
  )
}
