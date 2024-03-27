import { holtwood } from '../fonts'

export function NameTitle() {
  return (
    <div className="w-2/3 text-center max-lg:w-full text-white">
      <div className={`${holtwood.className} antialiased text-4xl mt-8`}>
        <div>
          CLANCIG <span className="text-4xl">Damián Andrés</span>
        </div>
      </div>
      <div className="text-4xl pt-2 pb-5">Desarrollador FullStack</div>
      <div className="ml-5 p-2 bg-black bg-opacity-30 rounded-3xl max-lg:ml-0">
        <p className="pl-3 pr-3 text-justify ">
          Tengo más de 17 años en desarrollo JAVA desempeñando en múltiples
          proyectos de todas áreas y 5 años en desarrollo fullstack con
          javascript. Me gusta desarrollar y aprender nuevas tecnologías,
          actualmente me estoy capacitando en NEXT.js para profundizar en el
          mundo de javascript y seguir creciendo profesionalmente como
          desarrollador FullStack.
        </p>
        <p className="pl-3 pr-3 text-justify">
          Soy proactivo, me adpato y aprendo fácilmente cualquier lenguaje, me
          gusta trabajar en equipo, que es clave para una buena calidad de un
          proyecto.
        </p>
        <p></p>
      </div>
    </div>
  )
}
