/**
 * 可用命令
 */
const COMMAND_CLIS = ['lib', 'lib-react', 'lib-vue', 'doc-vue', 'doc-react', 'web-react', 'web-vue']

/**
 * 错误信息
 */
const ERROR_MESSAGES = {
  ERROR_NOTEXSIT_CLI: new Error(
    `
脚本错误!!!!
请运行以下命令:
cmtter-lib react(构建vue库)
cmtter-lib vue react(构建react库)
cmtter-lib lib(构建普通javascript库)
cmtter-lib doc-vue(构建vue文档)
cmtter-lib doc-react(构建react文档)
cmtter-lib web-react(构建react 应用)
cmtter-lib web-vue(构建vue 应用)
`
  )
}
export {
  COMMAND_CLIS,
  ERROR_MESSAGES
}

