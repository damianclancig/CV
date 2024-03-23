import { holtwood } from '../fonts'

export function NameTitle() {
  return (
    <div className="w-2/3 text-center ">
      <div className={`${holtwood.className} antialiased text-4xl mt-14`}>
        <div>
          CLANCIG <span className="text-3xl">Damián Andrés</span>
        </div>
      </div>
      <div className="text-2xl pt-2 pb-5">Desarrollador FullStack</div>
      <p className="pl-5 pr-5">
        Tengo más de 17 años en desarrollo JAVA desempeñando en múltiples
        proyectos de todas áreas. Me gusta desarrollar y aprender nuevas
        tecnologías, actualmente estoy capacitandome en NEXT.js para adentrarme
        en el mundo de javascript. Soy proactivo, me adpato y aprendo fácilmente
        cualquier lenguaje.
      </p>
    </div>
  )
}
