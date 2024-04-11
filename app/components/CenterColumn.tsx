import { Title } from './Title'
import Cards from './Cards'
import Courses from './Courses'
import { getLocalData } from '../lib/localdata'
import Link from 'next/link'

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
        <a id="courses"></a>
        <Title>CURSOS:</Title>
        <Courses courses={data.courses}></Courses>
      </div>
    </div>
  )
}
