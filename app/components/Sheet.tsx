import { CenterColumn } from './CenterColumn'
import { Header } from './Header'
import { LateralColumn } from './LateralColumn'

export function Sheet() {
  return (
    <>
      <div className="justify-center max-w-4xl shadow-lg shadow-white rounded border border-cyan-400">
        <Header />
        <div className="flex">
          <LateralColumn />
          <CenterColumn />
        </div>
      </div>
    </>
  )
}
