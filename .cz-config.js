'use strict';
module.exports = {
  types: [
    { value: 'feat', name: '新增(feat):        新特性、新功能' },
    { value: 'fix', name: '修复(fix):         修复Bug' },
    { value: 'docs', name: '文档(docs):        文档修改' },
    {
      value: 'style',
      name: '格式(style):       代码格式修改, 注意不是 css 修改'
    },
    { value: 'init', name: '初始化(init):      初始化项目结构' },
    {
      value: 'chore',
      name: '杂项(chore):       其他修改, 比如改变构建流程、或者增加依赖库、工具等'
    },
    {
      value: 'build',
      name: '构建(build):       编译相关的修改，例如发布版本、对项目构建或者依赖的改动'
    },
    {
      value: 'refactor',
      name: '重构(refactor):    代码重构，注意和特性、修复区分开'
    },
    {
      value: 'perf',
      name: '性能(perf):        提优化相关，比如提升性能、体验'
    },
    { value: 'test', name: '测试(test):        添加一个测试或测试用例修改' },
    { value: 'revert', name: '回滚(revert):      回滚到上一个版本' },
    { value: 'ci', name: '持续集成(ci):      持续集成修改' }
  ],
  allowCustomScopes: true,
  messages: {
    type: '选择一种你的提交类型:',
    customScope: '请输入本次提交涉及的模块或范围(可选):',
    subject: '本次提交说明(短说明):',
    body: '本次提交说明(长说明)，使用"|"换行(可选)：',
    breaking: '非兼容性说明 (可选):',
    footer: '关联关闭的issue，例如：#31, #34(可选):',
    confirmCommit: '确定提交说明?(y/n)'
  },
  allowCustomScopes: true,
  skipQuestions: ['body', 'footer', 'breaking'],
  subjectLimit: 100
};
