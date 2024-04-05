import { ovo } from '../fonts'
import Image from 'next/image'

export default function Cards({ experiences }: any) {
  return experiences.map((row: any, index: any) => (
    <div
      key={'experience_' + index}
      className="mb-5 p-2 border-t border-l border-sky-800 rounded-tl-xl"
    >
      <span className="text-orange-500 underline ">{row.date}</span>
      <div>
        <div className="max-lg:flex max-lg:flex-wrap">
          <span className="font-bold text-xl">{row.company}</span>
          <span className="max-lg:hidden"> | </span>
          <span className=" max-lg:w-full">{row.position}</span>
        </div>
        <div className={`${ovo.className} antialiased`}>
          <div className="text-justify">
            <span className="underline text-sky-950 font-bold">Objetivo:</span> {row.objective}
          </div>
          {row.projects ? (
            <div>
              <span className="underline text-sky-950 font-bold">Proyectos:</span> {row.projects}
            </div>
          ) : (
            ''
          )}
          {row.technologies || row.icons ? (
            <div>
              <span className="underline text-sky-950 font-bold">Tecnologías:</span>{' '}
              {row.technologies}
            </div>
          ) : (
            ''
          )}
          {row.icons ? (
            <div className="flex justify-evenly items-center flex-wrap">
              {row.icons.map((obj: any, index: any) => (
                <div key={index} className="pr-3 w-[64px]">
                  <Image
                    src={'/images/icons/' + obj + '.webp'}
                    alt={obj}
                    title={obj}
                    width={500}
                    height={500}
                    className=""
                  />
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  ))
}
