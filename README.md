# chatbot

聊天机器人前端模块，功能有闲聊功能与音乐搜寻播放后功能。基于 vue-cli 3.x搭建，eslint+prettier检测与规范代码，stylus css预处理。



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
|   ├── img                      // 图片资源 
|   ├── reset.css                // KISSY CSS Reset，暂时采用该css reset文件
|   └── index.html               // 项目入口
├── src                      // 项目代码
|   ├── common                   // 通用资源文件
|   |   └── js
|   |   |   ├── data.js                  // 测试数据和常量
|   |   |   ├── Message.js               // 消息类
|   |   |   └── Timer.js                 // 时间工具类
|   ├── components               // 组件
|   |   ├── chatbotAudio.vue         // 音乐播放器
|   |   ├── chatbotbubble.vue        // 聊天气泡
|   |   ├── chatting.vue             // 闲聊界面
|   |   ├── playing.vue              // 音乐播放界面
|   ├── plugins                  // 第三方插件
|   |   └── element.js               // element插件
|   ├── views                    // 视图组件
|   ├── App.vue                  // 根组件
|   ├── main.js                  // 项目 js 入口
|   ├── routeHelper.js           // 路由工具
|   ├── router.js                // 路由定义
|   └── store.js                 // vex文件
├── tests
|   ├── e2e                      // e2e测试
|   └── unit                     // 单元测试
├── .gitignore
├── babel.config.js          // babel配置文件，babel用于将es6编译成es5
├── cypress.json
├── package-lock.json
├── package.json
├── README.md
└── vue.config.js            // 相当于 vue-cli 2.x 中 build、config 配置文件
```

