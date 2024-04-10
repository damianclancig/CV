'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export default function ViewCerts() {
  const searchParams = useSearchParams()
  const certs = searchParams.get('certs')?.split(',')
  const pathname = usePathname()

  return (
    <div className="w-full h-screen max-lg:h-full">
      <section className="px-2 py-3 grid gap-2 grid-cols-gallery">
        {certs?.map((cert, index) => (
          <div
            key={'cert_' + index}
            className="h-40 bg-gray-200 rounded-xl relative overflow-hidden group"
          >
            <Image
              alt={cert}
              src={'./images/certificados/' + cert}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 33vw"
              className="object-cover group-hover: opacity-75"
            />
          </div>
        ))}
        <br />
      </section>
      <Link href={'/'}>
        <button
          type="button"
          className="text-xl text-white bg-slate-600 hover:bg-slate-900 rounded-lg px-4 py-1 text-center"
        >
          Cerrar
        </button>
      </Link>
    </div>
  )
}
