export function Curses(curses: any) {
  return curses.curses.map((obj: any, index: any) => {
    return (
      <div
        key={'curses_' + index}
        className="p-2 mb-3 border-t border-l border-slate-300 rounded-tl-xl"
      >
        <div className="text-blue-300">{obj.name}</div>
        <div>{obj.place}</div>
        <div>{obj.date}</div>
        {obj.certificate ? <div>Certificado: {obj.certificate}</div> : ''}
        {obj.link ? (
          <div>
            <a href={obj.link.url} target="blank" className="text-green-500">
              {obj.link.text}
            </a>
          </div>
        ) : (
          ''
        )}
        <div>{obj.extra}</div>
      </div>
    )
  })
}
