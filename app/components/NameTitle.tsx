import { holtwood } from '../fonts'

export function NameTitle() {
  return (
    <div className="w-2/3 text-center max-lg:w-full text-white">
      <div className={`${holtwood.className} antialiased text-5xl mt-2`}>
        <div>
          CLANCIG <span className="text-4xl">Damián Andrés</span>
        </div>
      </div>
      <div className="text-4xl pt-2 pb-5">Desarrollador FullStack</div>
      <div className="ml-5 p-2 bg-black bg-opacity-30 rounded-3xl max-lg:ml-0">
        <p className="pl-3 pr-3 text-justify ">
          Soy profesional de desarrollador JAVA durante más de 17 años en
          múltiples proyectos de todas áreas y 5 años en desarrollo fullstack
          con las últimas tecnologías de javascript. Me gusta desarrollar y
          capacitarme en nuevas tecnologías como React.JS y Next.JS para
          profundizar en el mundo de javascript.
        </p>
        <p className="pl-3 pr-3 text-justify">
          Soy proactivo, me adpato y aprendo fácilmente cualquier lenguaje, me
          gusta trabajar en equipo con metodología ágiles, que es clave para una
          buena calidad de un proyecto.
        </p>
        <p className="pl-3 pr-3 text-justify">
          Mi objetivo es seguir aprendiendo y crecer profesionalmente como
          desarrollador FullStack trabajando 100% remoto desde cualquier lugar.
        </p>
      </div>
    </div>
  )
}
