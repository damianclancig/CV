import CenterColumn from './CenterColumn'
import { Header } from './Header'
import { SideColumn } from './SideColumn'

export default function Sheet() {
  return (
    <>
      <div
        id="Sheet"
        className="max-w-6xl shadow-lg shadow-white rounded border border-cyan-400 max-lg:border-none max-lg:rounded-none max-lg:shadow-none"
      >
        <Header />
        <div className="flex bg-gray-200 text-black rounded-bl max-lg:flex-col">
          <SideColumn />
          <CenterColumn />
        </div>
      </div>
    </>
  )
}
