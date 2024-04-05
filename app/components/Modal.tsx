'use client'
import { useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Modal() {
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')
  const certs = searchParams.get('certs')
  const pathname = usePathname()

  return (
    <>
      {modal && (
        // Background blur
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          {/* Dialog */}
          <div className="bg-zinc-200 m-auto p-2 rounded-lg shadow">
            {/* Container */}
            <div className="flex flex-col items-center">
              {/* Content */}
              <div className="container mx-auto px-2 py-2 lg:px-2 lg:pt-2">
                {/* Data flex */}
                <div className="-m-1 flex flex-wrap md:-m-2">
                  {certs?.split(',').map((cert, index) => {
                    return (
                      <div key={index} className="flex w-1/2 flex-wrap md:w-1/5">
                        <div className="w-full p-3 drop-shadow-lg">
                          <Image
                            alt={cert}
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={'./images/certificados/' + cert}
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <br />
              <Link href={pathname}>
                <button
                  type="button"
                  className="text-white bg-slate-600 hover:bg-slate-900 rounded-lg px-5 py-1 text-center"
                >
                  Cerrar
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}
