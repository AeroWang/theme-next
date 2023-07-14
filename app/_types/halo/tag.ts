import { IMetadata } from '#/app/_types/halo/metadata'

/**
 * TagVo
 */
export interface ITagVo {
  metadata: IMetadata
  postCount?: number
  spec?: ITagSpec
  status?: ITagStatus
}

/**
 * TagSpec
 */
export interface ITagSpec {
  color?: string
  cover?: string
  displayName: string
  slug: string
}

/**
 * TagStatus
 */
export interface ITagStatus {
  permalink?: string
  postCount?: number
  visiblePostCount?: number
}
