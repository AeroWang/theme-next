import NavContainer from '#/app/(blog)/_components/GlobalNav/NavContainer'
import { getMenuByName } from '#/app/_services/menus'
import { notFound } from 'next/navigation'
import NavLink from '#/app/(blog)/_components/GlobalNav/NavLink'

const GlobalNav = async () => {
  const menus = await getMenuByName()
  if (!menus) {
    notFound()
  }
  const menuItems = menus.menuItems
  return (
    <NavContainer>
      {menuItems?.map((item) => (
        <NavLink key={item.status?.href} item={item} />
      ))}
    </NavContainer>
  )
}
export default GlobalNav
