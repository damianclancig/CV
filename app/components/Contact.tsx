import Image from 'next/image'

export function Contact(props: any) {
  const isPngIcon = props.icon.indexOf('svg')
  const icon = isPngIcon > 0 ? props.icon : '/images/icons/' + props.icon + '.webp'
  return (
    <a href={props.href} title={props.text} target="blank">
      <div className="flip-container flex pb-3 pl-3 border-b-2 h-10 border-slate-950 mb-3 ">
        <div className={props.className + ' card'}>
          <div className="front">
            <Image
              src={icon}
              alt="gmail"
              title={props.text}
              width={100}
              height={100}
              className="w-[30px] mr-2"
            />
            {props.text}
          </div>
          <div className="back">
            <Image
              src={icon}
              alt="gmail"
              title={props.text}
              width={100}
              height={100}
              className="w-[30px] mr-2"
            />
            {props.value}
          </div>
        </div>
      </div>
    </a>
  )
}
