# chatbot

## 运行

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).



## 目录结构

```
chatbot
├── public                   // 相当于 vue-cli 2.x 的 static 目录，存放静态资源
|   ├── reset.css               // KISSY CSS Reset，暂时采用该css reset文件
|   └── index.html               // 项目入口
├── src                      // 项目代码
|   ├── assets                   // 多媒体资源文件
|   ├── components               // 组件
|   |   ├── chatting.vue             // 闲聊界面
|   |   ├── playing.vue              // 音乐播放界面
|   ├── plugins                  // 第三方插件
|   |   └── element.js               // element插件
|   ├── views                    // 视图组件
|   ├── App.vue                  // 根组件
|   ├── main.js                  // 项目 js 入口
|   ├── router.js                // 路由定义
|   └── store.js                 // vex文件
├── .browserslistrc          // 浏览器兼容性配置文件
├── .editorconfig            // 编辑器配置文件
├── .eslintrc.js             // eslint配置文件
├── .gitignore
├── babel.config.js          // babel配置文件，babel用于将es6编译成es5
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
└── vue.config.js            // 相当于 vue-cli 2.x 中 build、config 配置文件
```

