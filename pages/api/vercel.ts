import type { NextApiRequest, NextApiResponse } from 'next'

const appName = process.env.VERCEL_APP_NAME
const projectId = process.env.VERCEL_PROJECT_ID
const TOKEN = process.env.VERCEL_TOKEN

/**
 * 批量删除 vercel 部署环境
 * @param query { env: 'production' | 'preview'}
 * @param response
 */
export default async function handler({ query }: NextApiRequest, response: NextApiResponse<{}>) {
  const deploymentsResult = await fetch(
    // https://vercel.com/docs/rest-api/endpoints
    `https://api.vercel.com/v6/deployments?app=${appName}&limit=50&projectId=${projectId}&state=READY&target=${
      query.env || 'preview'
    }`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      method: 'get',
    },
  )

  const allData = await deploymentsResult.json()
  let deleteDeployments = []
  if (allData?.deployments.length > 2) {
    // 保留最新两个部署环境
    deleteDeployments = allData?.deployments.slice(2)
  } else
    return response
      .status(200)
      .json('The latest two deployment environments have been retained and do not need to be deleted.')
  const deleteResults = deleteDeployments.map(async (item: any) => {
    const deleteDeploymentsResult = await fetch(`https://api.vercel.com/v13/deployments/${item.uid}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      method: 'delete',
    })
    const result1 = await deleteDeploymentsResult.json()
    console.log(deleteDeploymentsResult.status)
    return {
      ...result1,
      code: deleteDeploymentsResult.status,
    }
  })
  if (deleteResults.every((item: any) => item.code === '200')) {
    return response.status(200).json({ message: 'delete success', deleteResults })
  } else response.status(400).json(deleteResults)
}
