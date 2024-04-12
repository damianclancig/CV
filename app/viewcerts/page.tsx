'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Modal from '../components/Modal'

export default function ViewCerts() {
  const certs = useSearchParams().get('certs')?.split(',')

  const [showModal, setShowModal] = useState(false)
  const [urlImage, setUrlImage] = useState('')

  const openModalHanlder = (url: string) => {
    setUrlImage(url)
    setShowModal(true)
  }

  const closeModalHanlder = () => {
    setShowModal(false)
  }
  return (
    <>
      <div className="w-4/6 max-lg:w-full m-auto">
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
                className="object-cover group-hover:opacity-50"
                onClick={() => openModalHanlder('./images/certificados/' + cert)}
              />
            </div>
          ))}
          <br />
        </section>
        <Link href={'/#courses'} className="flex justify-center pb-5">
          <button
            type="button"
            className="text-xl text-white bg-slate-600 hover:bg-slate-900 rounded-lg px-4 py-1 text-center"
          >
            Cerrar
          </button>
        </Link>
      </div>
      <Modal isShowModal={showModal} urlImage={urlImage} handleClose={closeModalHanlder} />
    </>
  )
}
