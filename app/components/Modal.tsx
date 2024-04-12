import Image from 'next/image'
import DisableBodyScroll from './DisableBodyScroll'

export default function Modal({ handleClose, isShowModal, urlImage }: any) {
  return (
    <>
      {isShowModal ? (
        <>
          {/* <DisableBodyScroll /> */}
          <div className="bg-black/70 sticky inset-0 h-screen grid">
            <div className="w-11/12 h-5/6 m-auto">
              <div className="h-full flex justify-center items-center">
                <div className="relative w-full max-h-[90vh] aspect-square">
                  <button
                    onClick={handleClose}
                    className="relative w-full max-h-[90vh] aspect-square"
                  >
                    <Image
                      title="Cerrar"
                      alt={urlImage}
                      src={urlImage}
                      fill
                      sizes="500px"
                      className="object-contain"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}
