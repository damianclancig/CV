import { Title } from './Title'
import { Cards } from './Cards'

export function CenterColumn() {
  return (
    <div className="w-2/3 bg-cyan-950 rounded-br">
      <div className="m-10">
        <Title>EXPERIENCIA LABORAL:</Title>
        <Cards></Cards>
      </div>
    </div>
  )
}
