'use client'
import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import LinkMenu from './LinkMenu'
import { MdContactPhone, MdWorkHistory } from 'react-icons/md'
import { ImBooks } from 'react-icons/im'

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const showMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <button onClick={showMenu}>
        <TiThMenu className="text-4xl bg-orange-500 text-slate-700 rounded-md fixed top-2" />
      </button>
      <div
        className={`fixed top-14 bg-slate-900 backdrop-filter backdrop-blur-md bg-opacity-70 border-2 border-black rounded-md p-2 transition-all duration-300 ${
          openMenu ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ul className="w-48">
          <LinkMenu link="/#contacts" click={showMenu}>
            <MdContactPhone />
            Contacto
          </LinkMenu>
          <LinkMenu link="/#experiences" click={showMenu}>
            <MdWorkHistory />
            Experiencias
          </LinkMenu>
          <LinkMenu link="/#courses" click={showMenu}>
            <ImBooks />
            Cursos
          </LinkMenu>
        </ul>
      </div>
    </>
  )
}

export default Menu
