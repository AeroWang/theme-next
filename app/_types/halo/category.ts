import { IMetadata } from '#/app/_types/halo/metadata'

/**
 * CategoryVo
 */
export interface ICategoryVo {
  metadata: IMetadata
  postCount?: number
  spec?: ICategorySpec
  status?: ICategoryStatus
}

/**
 * CategorySpec
 */
export interface ICategorySpec {
  children?: string[]
  cover?: string
  description?: string
  displayName: string
  priority: number
  slug: string
  template?: string
}

/**
 * CategoryStatus
 */
export interface ICategoryStatus {
  permalink?: string
  postCount?: number
  visiblePostCount?: number
}
