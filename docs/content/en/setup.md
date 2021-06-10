---
title: Setup
description: 'Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.'
position: 1
category: Getting started
version: 2
---

## Installation

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
yarn add vue-final-modal@latest
```

  </code-block>
</code-group>

## Import base on your needs

Checkout how to use [$modal](/api), [VModal](/examples/liveDemo), [VDynamicModals](/dynamic-modal).

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

## Global Register plugin

### `vfmPlugin`

- Type: `Function | PluginObject`
- Arguments: `Object`
  - default;
  ```js
  {
    key: '$modal',
    name: 'VModal',
    containerName: 'VDynamicModals'
  }
  ```
- Returns: `PluginObject`
- Examples:

### Vue 2

```js[main.js]
import { vfmPlugin } from 'vue-final-modal'

Vue.use(vfmPlugin)
```

### Nuxt

- **Write a plugin `vue-final-modal.js`**

```js[plugins/vue-final-modal.js]
import { vfmPlugin } from 'vue-final-modal/lib'

Vue.use(vfmPlugin)
```

- **Add plugin into `nuxt.config.js`**

```js[nuxt.config.js]
export default {
  plugins: ['~plugins/vue-final-modal.js'],
  build: {
    transpile: ['vue-final-modal']
  }
}
```

### Overwrite `key`, `name`, `containerName`

```js[main.js]
import { vfmPlugin } from 'vue-final-modal'

Vue.use(vfmPlugin({
  key: '$modal',
  name: 'VModal',
  containerName: 'VDynamicModals'
}))
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
