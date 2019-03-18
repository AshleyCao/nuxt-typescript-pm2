# Nuxt.js TS PM2

>Nuxt.js with ts and pm2

## Introduction
Nuxt.js 2.4.0 has released, checkout [this announcement](https://dev.to/nuxt/nuxtjs-v240-is-out-typescript-smart-prefetching-and-more-18d). Finally, typescript set up is easy and handy. So basically, you just need to install nuxt-ts and ta-da!!!

As for [PM2](https://pm2.io/doc/en/runtime/overview/), it is a project process manager for Node.js application. And I find it helps cutting off all setting-up bash files if you want to **run you app on linux server all the time**. 

In this project, it includes all two common UI plugins([bootstrap-vue](https://bootstrap-vue.js.org/) and [element-ui](http://element.eleme.io/#/en-US/component/installation)), [js-cookies](https://github.com/js-cookie/js-cookie) and vuelidate etc.
If those are all suitable for your project, just simply delete node_modules folder and run ``` yarn install ```.

## Some issues and heads-up
- Bootstrap
I used to include bootstrap in modules in nuxt.config file. Now it seems there are some problems when it loads. So include bootstrap in plugins in nuxt.config. [Ref](https://github.com/nuxt/nuxt.js/issues/5049)
- $loding ( var override)
[Ref](https://github.com/nuxt/nuxt.js/issues/4877), @P-de-jong's comment works for me. Turn off lib check in tsconfig
- About linux
It only happened to me at first time when I added plugin via yarn on linux server . Just in case it may occur to you. 
**Error: There appears to be trouble with your network connection. Retrying...**
[Ref](https://github.com/yarnpkg/yarn/issues/4890), 
````
yarn config set proxy [http://username:password@host:port](http://username:password@host:port/)  
yarn config set https-proxy [http://username:password@host:port](http://username:password@host:port/)
````
Set notimeout 
## Build Setup
Please follow package.json, tsconfig.json and nuxt.config.ts files to check my set up.
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NDk0Mjg1MDcsLTI2NzE2NDE1NCwxMj
cwNDRdfQ==
-->