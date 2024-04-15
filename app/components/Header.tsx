import Menu from './Menu'
import { NameTitle } from './NameTitle'
import { ProfilePhoto } from './ProfilePhoto'

export function Header() {
  return (
    <header className="w-full rounded-t bg-scroll bg-[url('../public/images/bar_lateral.jpg')]">
      <div className="p-4 flex backdrop-blur-sm max-lg:flex-col max-lg:justify-center text-center">
        <Menu />
        <ProfilePhoto />
        <NameTitle />
      </div>
    </header>
  )
}
