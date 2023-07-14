export interface IList<T> {
  /**
   * Indicates whether current page is the first page.
   */
  first: boolean
  /**
   * Indicates whether current page has previous page.
   */
  hasNext: boolean
  /**
   * Indicates whether current page has previous page.
   */
  hasPrevious: boolean
  /**
   * A chunk of items.
   */
  items: T[]
  /**
   * Indicates whether current page is the last page.
   */
  last: boolean
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   */
  page: number
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   */
  size: number
  /**
   * Total elements.
   */
  total: number
  /**
   * Indicates total pages.
   */
  totalPages: number
}
