module.exports = {
  presets: [
    '@vue/app'
    // ,
    //   ['env',            //添加 babel-preset-env 配置
    //       {
    //         'modules': false
    //       }
    //     ]
    // ],
    // publin: [
    //   [
    //     'component',
    //     {
    //       'libraryName': 'element-ui',
    //       'styleLibraryName': 'theme-chalk'
    //     }
    //   ]
  ]
}
// 兼容IE配置和全局引入element-ui
// module.exports = {
//   presets: [
//     '@vue/app',
//     ['env',            //添加 babel-preset-env 配置
//       {
//         'modules': false,
//         "targets": {
//           "browsers": [ 
//             "> 1%",
//             "last 2 versions",
//             "not ie <= 10"
//           ]
//         }
//       }
//     ],
//   ],
//   plugins: [        // element官方教程
//     [
//       'component',
//       {
//         'libraryName': 'element-ui',
//         'styleLibraryName': 'theme-chalk'
//       }
//     ]
//   ]
// }