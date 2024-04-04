import Image from 'next/image'
import { Contacts } from './Contacts'

function birthDateCalculator() {
  const birthDate = new Date('1984/05/03')
  const now = new Date(Date.now())
  let yearOld = now.getFullYear() - birthDate.getFullYear()
  if (
    now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() == birthDate.getMonth() && now.getDate() < birthDate.getDate())
  ) {
    yearOld = yearOld - 1
  }
  return yearOld
}

export function SideColumn() {
  return (
    <div className="w-3/12 min-w-[290px] p-3 bg-slate-700 text-white max-lg:w-auto">
      <div className="h-auto  ">
        {/* <div className="mb-5">
          Nací el 3 de Mayo del 1984 ({birthDateCalculator()} años) en Bernal
          (1876), Bs. As., Argentina, soy casado y tengo 2 peludos (Jama y
          Onix), me encantan los animales. En mis tiempos libres me gusta hacer
          carpintería, pasear a pueblos o caminar en espacios verdes con mucha
          naturaleza.
        </div> */}
        <Contacts />
        <div className="text-2xl">Habilidades:</div>
        <div className="mb-5 border-2 border-orange-400 rounded-full">
          <Image
            src="/images/wordCloudTech.webp"
            className="w-full ml-1"
            alt="ProfilePhoto"
            width={400}
            height={400}
          />
        </div>
        <div className="text-2xl">Idiomas:</div>
        <div className="pl-3 pb-5">
          <ul>
            <li>Inglés intermedio.</li>
            <li>Portugués básico.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
