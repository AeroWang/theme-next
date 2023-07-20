export interface ILinkQueryParams {
  /**
   * Field selector for filtering.
   */
  fieldSelector?: string[]
  /**
   * Link group name
   */
  groupName?: string
  /**
   * Keyword to search links under the group
   */
  keyword?: string
  /**
   * Label selector for filtering.
   */
  labelSelector?: string[]
  /**
   * The page number. Zero indicates no page.
   */
  page?: number
  /**
   * Size of one page. Zero indicates no limit.
   */
  size?: number
  /**
   * Sort property and direction of the list result. Supported fields: creationTimestamp,
   * priority
   */
  sort?: string[]
}

export interface ILinkItem {
  apiVersion: string
  kind: string
  metadata: ILinkItemMetadata
  spec: ILinkItemSpec
}

export interface ILinkItemMetadata {
  creationTimestamp: string
  generateName: string
  name: string
  version: number
}

export interface ILinkItemSpec {
  description: string
  displayName: string
  groupName: string
  logo: string
  url: string
}

/**
 * LinkGroup
 */
export interface LinkGroup {
  apiVersion: string
  kind: string
  metadata: Metadata
  spec?: LinkGroupSpec
}

/**
 * Metadata
 */
export interface Metadata {
  annotations?: { [key: string]: null | string } | null
  creationTimestamp?: Date | null
  deletionTimestamp?: Date | null
  finalizers?: Array<null | string> | null
  /**
   * The name field will be generated automatically according to the given generateName field
   */
  generateName?: string
  labels?: { [key: string]: null | string } | null
  /**
   * Metadata name
   */
  name: string
  version?: number | null
}

/**
 * LinkGroupSpec
 */
export interface LinkGroupSpec {
  displayName: string
  /**
   * Names of links below this group.
   */
  links?: string[]
  priority?: number
}
