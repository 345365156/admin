/**
 * 各个环境的API配置
 */

export const env = {
  deploy: {
    // easy-mock
    mockMode: {
      server: 'https://www.easy-mock.com/mock/5d0c3f625fb086181a2e4196/'
    },
    // 开发模式
    devMode: {
      server: 'http://172.100.11.91:8888/' // 开发环境地址
    },
    // 测试模式
    testMode: {
      server: 'http://xyzc-admin-api.int.anniu-inc.com/' // 测试环境地址
    },
    // 生产环境
    prodMode: {
      server: '' // 生产环境地址
    }
  }
}
