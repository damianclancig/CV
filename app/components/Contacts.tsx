import Image from 'next/image'

export function Contacts() {
  return (
    <div className="p-2 bg-slate-900 bg-opacity-30 border border-slate-900 rounded shadow shadow-black">
      <div className="pb-3">Contacto:</div>
      <a href="mailto:damian@clancig.com.ar" title="Enviame un E-Mail">
        <div className="flex pb-3 pl-3 border-b-2 border-slate-950 mb-3">
          <Image
            src={'/images/icons/gmail.webp'}
            alt="gmail"
            title="Enviame un E-Mail"
            width={100}
            height={100}
            className="w-[30px] mr-2"
          />
          damian@clancig.com.ar
        </div>
      </a>
      <a
        href="https://wa.me/5491166022526"
        target="blank"
        title="Escribime por Whatsapp"
      >
        <div className="flex pb-3 pl-3 border-b-2 border-slate-950 mb-3">
          <Image
            src={'/images/icons/whatsapp.webp'}
            alt="Whatsapp"
            title="Escribime por Whatsapp"
            width={100}
            height={100}
            className="w-[30px] mr-2"
          />
          +54 11 6602-2526
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/damianclancig/"
        target="blank"
        title="Ver mi Linked-In"
      >
        <div className="flex pb-3 pl-3 border-b-2 border-slate-950 mb-3">
          <Image
            src={'/images/icons/linkedin.webp'}
            alt="LinkedIn"
            title="Ver mi Linked-In"
            width={100}
            height={100}
            className="w-[30px] mr-2"
          />
          LinkedIn
        </div>
      </a>
      <div>
        <a href="http://www.clancig.com.ar/cv" target="blank">
          www.clancig.com.ar/cv
        </a>
      </div>
    </div>
  )
}
