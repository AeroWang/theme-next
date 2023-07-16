// 此结构来自 moments（瞬间） 插件 v1alpha1

import { IMetadata } from '#/app/_types/halo/metadata'

export interface IMomentsQuery {
  endDate?: string
  /**
   * Field selector for filtering.
   */
  fieldSelector?: string[]
  /**
   * Moments filtered by keyword.
   */
  keyword?: string
  /**
   * Label selector for filtering.
   */
  labelSelector?: string[]
  /**
   * Owner name.
   */
  ownerName?: string
  /**
   * The page number. Zero indicates no page.
   */
  page?: number
  /**
   * Size of one page. Zero indicates no limit.
   */
  size?: number
  /**
   * Moment collation.
   */
  sort?: string
  /**
   * ascending order If it is true; otherwise, it is in descending order.
   */
  sortOrder?: boolean
  startDate?: string
  visible?: string
}

export interface IMoments {
  moment: IMoment
  owner: IMomentsContributor
  stats: IMomentsStats
}
export interface IMoment {
  apiVersion: string
  kind: string
  metadata: IMetadata
  spec: IMomentSpec
}

export interface IMomentSpec {
  content: IMomentContent
  /**
   * Owner of the moment
   */
  owner: string
  /**
   * Release timestamp. This field can be customized by owner
   */
  releaseTime?: Date
  /**
   * Visible indicates when to show publicly. Default is public
   */
  visible?: IMomentsVisible
}

export interface IMomentContent {
  /**
   * Rendered result with HTML format
   */
  html?: string
  /**
   * Medium of moment
   */
  medium?: IMomentMedia[]
  /**
   * Raw of content
   */
  raw?: string
}

export interface IMomentMedia {
  /**
   * Origin type of media.
   */
  originType?: string
  /**
   * Type of media
   */
  type?: IMomentsType
  /**
   * External URL of media
   */
  url?: string
}

/**
 * Type of media
 */
export enum IMomentsType {
  Photo = 'PHOTO',
  Post = 'POST',
  Video = 'VIDEO',
}

/**
 * Contributor
 */
export interface IMomentsContributor {
  avatar?: string
  displayName?: string
  name?: string
}

/**
 * Visible indicates when to show publicly. Default is public
 */
export enum IMomentsVisible {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

/**
 * Stats
 */
export interface IMomentsStats {
  approvedComment?: number
  totalComment?: number
  upvote?: number
  visit?: number
}
