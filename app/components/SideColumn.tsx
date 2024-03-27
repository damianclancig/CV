import { Contacts } from './Contacts'

export function SideColumn() {
  return (
    <div className="w-3/12 p-3 bg-slate-700 text-white max-lg:w-auto">
      <div className="h-auto  ">
        <div className="mb-5">
          Tengo 39 años (3 de Mayo del 1984) de Bernal Oeste (1876), Bs. As.,
          Argentina, estoy casado.
        </div>
        <Contacts />
      </div>
    </div>
  )
}
