import { getBabelConfig } from '../configs/babel.config'
import type { Rule } from '../types'

export const getScriptRule = ({
  isDevelopment = true
}: {
  isDevelopment: boolean
}): Rule => {
  //TODO find process.cwd() root dir babel config file
  const babel = {}
  return {
    test: /\.(mjs|[jt]sx?)$/,
    exclude: [/node_modules/],
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        ...getBabelConfig({
          isDevelopment
        }),
        ...babel
      }
    }
  }
}
