declare namespace NodeJS {
  interface ProcessEnv {
    HALO_HOST: string
    HALO_AUTHORIZATION: string
    STATIC_URL: string
    // Vercel Project Name
    VERCEL_APP_NAME: string
    // https://vercel.com/gotoobe/VERCEL_APP_NAME/settings Vercel Project ID
    VERCEL_PROJECT_ID: string
    // Vercel Project Token https://vercel.com/account/tokens
    VERCEL_TOKEN: string
  }
}
