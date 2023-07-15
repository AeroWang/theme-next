export default function NotFound() {
  return (
    <div
      className={
        'flex h-72 w-full flex-col items-center justify-center space-y-4 rounded-md bg-gray-1 px-3 dark:bg-gray-11'
      }>
      <h2 className={'text-xl font-semibold'}>有点问题</h2>
      <p>列表内容好像不太对</p>
      <p>要不通过下方邮箱或者 Github 联系我反馈一下吧😘</p>
    </div>
  )
}
