import Image from 'next/image'
import { Contact } from './Contact'

export function Contacts() {
  return (
    <div className="p-2 mb-5 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-gray-700 bg-opacity-30 border border-slate-900 rounded shadow shadow-black">
      <div className="pb-3 text-2xl">Contacto:</div>
      <Contact
        icon="gmail"
        text="Enviame un E-Mail"
        value="damian@clancig.com.ar"
        href="mailto:damian@clancig.com.ar"
      />
      <Contact
        icon="whatsapp"
        text="Escribime por Whatsapp"
        value="+54 11 6602-2526"
        href="https://wa.me/5491166022526"
        className="animationDelay500"
      />
      <Contact
        icon="linkedin"
        text="Ver mi LinkedIn"
        value="LinkedIn"
        href="https://www.linkedin.com/in/damianclancig/"
        className="animationDelay1000"
      />

      <div>
        <a href="https://www.clancig.com.ar" target="blank">
          www.clancig.com.ar
        </a>
      </div>
    </div>
  )
}
