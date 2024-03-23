import { NameTitle } from './NameTitle'
import { ProfilePhoto } from './ProfilePhoto'

export function Header() {
  return (
    <header className="w-full bg-cover bg-[url('../public/images/bar_lateral.webp')] rounded-t">
      <div className="backdrop-blur p-4 flex">
        <ProfilePhoto />
        <NameTitle />
      </div>
    </header>
  )
}
