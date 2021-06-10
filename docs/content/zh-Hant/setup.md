---
title: 安裝設定
description: 'Vue Final Modal 是一個無渲染、可堆疊、可拆卸且輕巧的 modal 元件。'
position: 1
category: 快速入門
version: 2
---

## 安裝

### **Vue 3**

<code-group>
  <code-block label="npm" active>

```bash
npm install vue-final-modal@next
```

  </code-block>
  <code-block label="yarn">

```bash
yarn add vue-final-modal@next
```

  </code-block>
  <code-block label="pnpm">

```bash
pnpm add vue-final-modal@next
```

  </code-block>
</code-group>

### **Vue 2**

<code-group>
  <code-block label="npm" active>

```bash
npm install vue-final-modal@latest
```

  </code-block>
  <code-block label="yarn">

```bash
yarn add vue-final-modal@latest
```

  </code-block>
  <code-block label="pnpm">

```bash
pnpm add vue-final-modal@latest
```

  </code-block>
</code-group>

## 按需求引入

查看更多 [$modal](/api)、[VModal](/examples/liveDemo)、[VDynamicModals](/dynamic-modal) 的使用細節。

```vue
<script>
import { $modal, VModal, VDynamicModals } from 'vue-final-modal'

export default {
  components: {
    VModal,
    VDynamicModals
  }
}
</script>
```

## 全域註冊套件

### `vfmPlugin`

- 型別：`Function | PluginObject`
- 參數：`Object`
  - 預設：
  ```js
  {
    key: '$modal',
    name: 'VModal',
    containerName: 'VDynamicModals'
  }
  ```
- 回傳：`PluginObject`
- 範例：
### Vue 2

```js[main.js]
import { vfmPlugin } from 'vue-final-modal'

Vue.use(vfmPlugin)
```

### Nuxt

- 新增一個 plugin **`vue-final-modal.js`**

```js[plugins/vue-final-modal.js]
import { vfmPlugin } from 'vue-final-modal/lib'

Vue.use(vfmPlugin)
```

- **在 `nuxt.config.js` 的 plugin 與 build 中加入**

```js[nuxt.config.js]
export default {
  plugins: ['~plugins/vue-final-modal.js'],
  build: {
    transpile: ['vue-final-modal']
  }
}
```

## CDN

<alert>[Live demo](https://codepen.io/hunterliu1003/pen/ZEWoYeE)</alert>

- **jsDelivr**

```html
<script src="https://cdn.jsdelivr.net/npm/vue-final-modal"></script>
```

- **Unpkg**

```html
<script src="https://unpkg.com/vue-final-modal"></script>
```
