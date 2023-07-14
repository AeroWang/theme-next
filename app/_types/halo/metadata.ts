export interface IMetadata {
  annotations?: { [key: string]: null | string } | null
  // 创建时间
  creationTimestamp?: Date | null
  deletionTimestamp?: Date | null
  finalizers?: Array<null | string> | null
  /**
   * The name field will be generated automatically according to the given generateName field
   */
  generateName?: string
  labels?: { [key: string]: null | string } | null
  /**
   * 唯一标识
   */
  name: string
  version?: number | null
}
