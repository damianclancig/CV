import Link from 'next/link'

export default function LinkMenu({ link, click, children }: any) {
  return (
    <>
      <li className="rounded-md px-2 py-2 hover:bg-orange-600 hover:text-black hover:font-bold">
        <Link href={link} onClick={click}>
          <div className="w-full flex gap-2 items-center text-2xl">{children}</div>
        </Link>
      </li>
    </>
  )
}
