import { holtwood } from '../fonts'
import { NameTitle } from './NameTitle'
import { ProfilePhoto } from './ProfilePhoto'

export function SideColumn() {
  return (
    <div className="w-3/12 p-5 bg-slate-700 text-white">
      <div className="h-auto  ">
        <div className="mb-5">
          Tengo 39 años (3 de Mayo del 1984) de Bernal Oeste (1876), Bs. As.,
          Argentina, estoy casado.
        </div>
        <div className="p-2 border border-slate-900 rounded-lg shadow-md shadow-black">
          <div>Contacto:</div>
          <div>
            <a href="mailto:damian@clancig.com.ar">damian@clancig.com.ar</a>
          </div>
          <div>
            <a href="https://wa.me/5491166022526" target="blank">
              54911022526
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/damianclancig/" target="blank">
              LinkedIn
            </a>
          </div>
          <div>
            <a href="http://www.clancig.com.ar/cv" target="blank">
              www.clancig.com.ar/cv
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
