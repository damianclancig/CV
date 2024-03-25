import { ovo } from '../fonts'
import Image from 'next/image'

export function Cards(data: any) {
  return data.experiences.map((row: any, index: any) => (
    <div
      key={index}
      className="mb-5 p-2 border-t border-l border-sky-800 rounded-tl-xl"
    >
      <span className="text-orange-500 underline ">{row.date}</span>
      <div>
        <div className="">
          <span className="font-bold text-xl">{row.company}</span>
          <span> | </span>
          <span>{row.position}</span>
        </div>
        <div className={`${ovo.className} antialiased`}>
          <div>
            <span className="underline text-sky-950 font-bold">Objetivo:</span>{' '}
            {row.objective}
          </div>
          {row.projects ? (
            <div>
              <span className="underline text-sky-950 font-bold">
                Proyectos:
              </span>{' '}
              {row.projects}
            </div>
          ) : (
            ''
          )}
          {row.technologies || row.icons ? (
            <div>
              <span className="underline text-sky-950 font-bold">
                Tecnologías:
              </span>{' '}
              {row.technologies}
            </div>
          ) : (
            ''
          )}
          {row.icons ? (
            <div className="flex justify-evenly items-center">
              {row.icons.map((obj: any, index: any) => (
                <div key={index} className="pr-3">
                  <Image
                    src={'/images/icons/' + obj + '.webp'}
                    alt={obj}
                    title={obj}
                    width={50}
                    height={0}
                    className="w-auto h-auto"
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
