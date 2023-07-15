// Post
import { IContributorVo } from '#/app/_types/halo/contributor'
import { ICategoryVo } from '#/app/_types/halo/category'
import { IMetadata } from '#/app/_types/halo/metadata'
import { IStatsVo } from '#/app/_types/halo/stats'
import { ITagVo } from '#/app/_types/halo/tag'

export interface IPostsQuery {
  /**
   * Field selector for filtering.
   */
  fieldSelector?: any[]
  /**
   * Label selector for filtering.
   */
  labelSelector?: any[]
  /**
   * The page number. Zero indicates no page.
   */
  page?: number
  /**
   * Size of one page. Zero indicates no limit.
   */
  size?: number
  /**
   * Sort property and direction of the list result. Support sorting based on attribute name
   * path.
   *
   * eg: ['spec.publishTime', 'dsc']
   */
  sort?: any[]
}

/**
 * ArticleMiniInfo
 */
export interface IPostVo {
  categories?: ICategoryVo[]
  contributors?: IContributorVo[]
  metadata: IMetadata
  owner?: IContributorVo
  spec?: IPostSpec
  // 统计数据
  stats?: IStatsVo
  status?: IPostStatus
  tags?: ITagVo[]
}

/**
 * IPostSpec
 */
export interface IPostSpec {
  // 是否允许评论
  allowComment: boolean
  baseSnapshot?: string
  // 分类的名称集合，即 Category 的 metadata.name 的集合
  categories?: string[]
  // 封面图
  cover?: string
  deleted: boolean
  // 摘要
  excerpt: IExcerpt
  headSnapshot?: string
  htmlMetas?: { [key: string]: string }[]
  // 创建者名称，即 ContributorVo 的 metadata.name，非显示名称
  owner?: string
  // 是否置顶
  pinned: boolean
  priority: number
  publish: boolean
  // 发布时间
  publishTime?: Date
  releaseSnapshot?: string
  // 别名，通常用于生成 status.permalink
  slug: string
  // 标签的名称集合，即 Tag 的 metadata.name 的集合
  tags?: string[]
  // 自定义渲染模板
  template?: string
  title: string
  visible: Visible
}

/**
 * 摘要
 */
export interface IExcerpt {
  // 是否自动生成摘要
  autoGenerate: boolean
  // 摘要内容
  raw?: string
}

export enum Visible {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

/**
 * IPostStatus
 */
export interface IPostStatus {
  // 评论数
  commentsCount?: number
  // 贡献者名称
  conditions?: ICondition[]
  contributors?: string[]
  // 最终生成的摘要
  excerpt?: string
  inProgress?: boolean
  // 最后修改时间
  lastModifyTime?: Date
  // 固定链接
  permalink?: string
  phase: string
}

/**
 * ICondition
 */
export interface ICondition {
  lastTransitionTime: Date
  message: string
  reason: string
  status: Status
  type: string
}

export enum Status {
  False = 'FALSE',
  True = 'TRUE',
  Unknown = 'UNKNOWN',
}
