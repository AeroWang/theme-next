import NavContainer from '#/app/(blog)/_components/nav/NavContainer'
import Link from 'next/link'
import ThemeSwitch from '#/app/(blog)/_components/ThemeChanger'
import { getMenuByName } from '#/app/_services/menus'
import { notFound } from 'next/navigation'

const GlobalNav = async () => {
  const menus = await getMenuByName()
  if (!menus) {
    notFound()
  }
  const menuItems = menus.menuItems
  return (
    <NavContainer>
      <div className="flex h-full justify-between px-3 xl:mx-auto xl:max-w-screen-2xl">
        <div className="left flex">
          <Link className="logo mr-5 flex h-full w-16 items-center text-xl font-bold italic" href="/">
            Aero
          </Link>
          <nav className="">
            {menuItems?.map((item) => (
              // TODO: 目前只做一级导航
              <Link
                key={item.status?.href}
                className="inline-flex h-full items-center px-3"
                href={item.status.href}
                target={item.spec?.target}>
                <span className="name mr-2 md:mr-0">{item.status.displayName}</span>
                <div className="icon md:hidden">{/*<Icon />*/}</div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="right">
          <ThemeSwitch />
        </div>
      </div>
    </NavContainer>
  )
}
export default GlobalNav
