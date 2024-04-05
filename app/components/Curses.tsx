import Link from 'next/link'

export default function Curses({ curses }: any) {
  return curses.map((obj: any, index: any) => {
    return (
      <div
        key={'curses_' + index}
        className="p-2 mb-3 border-t border-l border-slate-300 rounded-tl-xl"
      >
        <div className="text-blue-300">{obj.name}</div>
        <div>{obj.place}</div>
        <div>{obj.date}</div>
        {obj.certificate ? (
          <div className="border border-slate-500 w-fit px-2 rounded-2xl bg-slate-800 bg-opacity-50 hover:bg-slate-900 hover:text-slate-300 hover:bg-opacity-80">
            <Link href={'?modal=true&certs=' + obj.certificate}>Ver certificados</Link>
          </div>
        ) : (
          ''
        )}

        <div>{obj.extra}</div>
      </div>
    )
  })
}
