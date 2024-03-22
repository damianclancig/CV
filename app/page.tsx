export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center max-w-4xl shadow-lg shadow-white bg-cyan-950 rounded-lg border border-cyan-400">
          <div className="flex-none w-1/3 bg-cover bg-[url('../public/images/peakpx.jpg')] rounded-lg">
            <div className="w-auto h-auto backdrop-blur p-5 rounded-lg">
              <div className="">
                <img
                  src="images/perfil.jpg"
                  className="h-auto max-w-full rounded-full border-cyan-600 border-4"
                  alt="PhotoPerfil"
                />
              </div>
              <div>
                <span className="underline font-black text-xl">
                  Datos personales
                </span>
              </div>
              <div className="">
                Apellido y Nombre: <span>CLANCIG, Damián Andrés</span>
              </div>
              <div>
                Fecha de nacimiento: <span>3 de Mayo del 1984</span>
              </div>
              <div>
                DNI: <span>30.957.459</span>
              </div>
              <div>
                Fecha de nacimiento: <span>3 de Mayo del 1984</span>
              </div>
              <div className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                molestiae numquam quae distinctio, repellendus libero voluptatem
                officiis eligendi consequuntur perferendis illum excepturi!
                Facere dicta asperiores iste adipisci inventore, officiis quos!{' '}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-300 h-auto rounded-lg">
            <div>Experiencia Laboral</div>
          </div>
        </div>
      </div>
    </>
  )
}
