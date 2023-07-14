import { IMetadata } from '#/app/_types/halo/metadata'

export interface MenuRes {
  menuItems?: MenuItem[]
  metadata: IMetadata
  spec?: MenuSpec
}
export interface MenuItem {
  displayName?: string
  metadata: IMetadata
  children: MenuItem[]
  spec?: MenuItemSpec
  status: MenuItemStatus
}

export interface MenuSpec {
  /**
   * 显示名称
   */
  displayName: string
  /**
   * 菜单的菜单项名称集合，即 MenuItem 的 metadata.name 的集合
   */
  menuItems?: string[]
}
export interface MenuItemSpec {
  /**
   * 下级菜单项，菜单项的 metadata.name 集合
   */
  children?: string[]
  /**
   * 显示名称，但是不要直接使用这个字段进行显示，最终字段为 status.displayName
   */
  displayName?: string
  /**
   * 链接，同样不要直接使用这个字段，最终字段为 status.href
   */
  href?: string
  /**
   * 排序字段
   */
  priority?: number
  /**
   * The <a> target attribute of this menu item.
   */
  target?: Target
  targetRef?: Ref
}
/**
 * The <a> target attribute of this menu item.
 */
export enum Target {
  Blank = '_blank',
  Parent = '_parent',
  Self = '_self',
  Top = '_top',
}
/**
 * Ref，Extension reference object. The name is mandatory
 */
export interface Ref {
  /**
   * Extension group
   */
  group?: string
  /**
   * Extension kind
   */
  kind?: string
  /**
   * Extension name. This field is mandatory
   */
  name: string
  /**
   * Extension version
   */
  version?: string
}
/**
 * MenuItemStatus，The status of menu item.
 */
export interface MenuItemStatus {
  /**
   * Calculated Display name of menu item.
   */
  displayName: string
  /**
   * Calculated href of manu item.
   */
  href: string
}
