import { Title } from './Title'
import Cards from './Cards'
import Curses from './Curses'
import { getLocalData } from '../lib/localdata'

export async function getData() {
  return await getLocalData()
}

export default async function CenterColumn() {
  const data = await getData()
  return (
    <div className="w-9/12 rounded-br max-lg:w-auto">
      <div className="m-5">
        <Title>EXPERIENCIA LABORAL:</Title>
        <Cards experiences={data.experiences}></Cards>
      </div>
      <div className="bg-stone-700 p-5 text-white max-lg:w-auto">
        <Title>CURSOS:</Title>
        <Curses curses={data.curses}></Curses>
      </div>
    </div>
  )
}
