import { promises as fs } from 'fs'
import { Title } from './Title'
import { Cards } from './Cards'
import { Curses } from './Curses'

export async function CenterColumn() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8')
  const data = JSON.parse(file)

  return (
    <div className="w-9/12 rounded-br">
      <div className="m-5">
        <Title>EXPERIENCIA LABORAL:</Title>
        <Cards experiences={data.experiences}></Cards>
      </div>
      <div className="bg-stone-700 p-5 text-white">
        <Title>CURSOS:</Title>
        <Curses curses={data.curses}></Curses>
      </div>
    </div>
  )
}
