import { Contacts } from './Contacts'

function birthDateCalculator() {
  const birthDate = new Date('1984-04-03')
  const now = new Date(Date.now())
  let yearOld = now.getFullYear() - birthDate.getFullYear()
  if (
    now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() == birthDate.getMonth() &&
      now.getDate() < birthDate.getDate() + 1)
  ) {
    yearOld = yearOld - 1
  }
  return yearOld
}

export function SideColumn() {
  return (
    <div className="w-3/12 min-w-[290px] p-3 bg-slate-700 text-white max-lg:w-auto">
      <div className="h-auto  ">
        <div className="mb-5">
          Tengo {birthDateCalculator()} años (3 de Mayo del 1984) soy de Bernal
          Oeste (1876), Bs. As., Argentina, estoy casado y tengo 2 peludos, me
          encantan los animales.
        </div>
        <Contacts />
      </div>
    </div>
  )
}
