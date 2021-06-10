---
title: API 參考
description: 'Vue Final Modal 是一個無渲染、可堆疊、可拆卸且輕巧的 modal 元件。'
category: API
position: 7
version: 2
---

## Usage

<alert>`$modal` 是一個存放 VueFinalModal 資料與方法的物件</alert>

### **Options API**

在組件內使用 `this.$modal`.

### **Composition API** <badge>Vue 3 only</badge>

```js
import { inject } from 'vue'

export default {
  setup() {
    const $modal = inject('$modal')
  }
}
```
## API

### `show(name, params)`

- 型別： `Function`
- 參數：
  - name: `String` - 指定 modal 的名字。
  - params: `?: object` - Any data that you want to pass into the modal, checkout the guide [params](/zh-Hant/guide/params).
- 回傳： `Promise<Object>` | `Promise<Array>`
- 範例：

  <v-api-show class="mb-4"></v-api-show>

  <sfc-view>

  ```html
  <template>
    <v-modal v-model="show" name="example">
      <template v-slot:title>$modal.show</template>
      <template v-slot="{ params }">
        Hi {{ params.userName }}
      </template>
    </v-modal>
  </template>
  <script>
    export default {
      data: () => ({
        show: false
      })
    }
  </script>
  ```

  ```js
  this.$modal.show('example', { userName: 'vue-final-modal' })
    .then(() => {
      // do something on modal opened
    })
  ```

  </sfc-view>

  <alert>如果要使用 `$modal.show(name)` 打開 modal，`v-model` 是必須給的。</alert>

### `hide([names])`

- 型別： `Function`
- 參數：
  - names: `String` - 指定要隱藏 modal 名稱。
- 回傳： `Promise<Object>` | `Promise<Array>`
- 範例：

  <sfc-view>

  ```vue
  <template>
    <v-modal v-model="show" name="example">Vue Final Modal is awesome</v-modal>
    <v-modal v-model="show2" name="example2">Vue Final Modal is awesome 2</v-modal>
  </template>
  ```

  ```vue
  <script>
    export default {
      data: () => ({
        show: true,
        show2: true
      }),
      mounted() {
        this.$modal.hide('example', 'example2').then(() => {
          // do something on modal closed
        })
      }
    }
  </script>
  ```

  </sfc-view>

### `hideAll()`

- 回傳： `Promise<Object>` | `Promise<Array>`
- 範例：

  ```js
  this.$modal.hideAll().then(() => {
    // 當所有 modal 關閉後，做一些事
  })
  ```

關閉所有的 modal。

```js
this.$modal.hideAll().then(() => {
  // 當所有 modal 關閉後，做一些事
})
```

### `toggle(name, show, params)`

- 型別： `Function`
- 參數：
  - name: [`String` | `Array`] - modal 的名稱。
  - show: `?: Boolean` - 打開或隱藏這個 modal。
  - params: `?: object` - 任何你想要傳入 modal 的資料，詳閱 [參數（params）](/zh-Hant/guide/params)。
- 回傳： `Promise<Object>` | `Promise<Array>`
- 範例：

  ```js
  this.$modal.toggle('myModal').then(() => {
    // 當多個 modal 被開啟或被關閉時，做一些事，開啟或關閉取決於 show 參數給的是 true 或 false
  })
  ```

根據名字（name）切換 modals 的狀態。

```js
this.$modal.toggle('myModal').then(() => {
  // 當多個 modal 被開啟或被關閉時，做一些事，開啟或關閉取決於 show 參數給的是 true 或 false
})
```

### `get([names])`

- 型別： `Function`
- 參數：
  - names: `String` - 取得傳入的名字（name）對應的 modals 實例。
- 回傳：
  - `Array`: 回傳的 modals 實例
- 範例：

  ```js
  const modals = this.$modal.get('modalName1', 'modalName2', ...)
  ```

### `openedModals`

- 回傳：
  - `Array`: 回傳所有顯示中的 modal 實例。
- 範例：
  - 取得第一個打開的 modal 實例
    ```js
      this.$modal.modals[0]
    ```
  - 取得現在打開的 modal 總數
    ```js
      this.$modal.modals.length
    ```

1. `$modal.openedModals[0]`: 取得第一個打開的 modal 實例。
2. `$modal.openedModals.length`: 取得現在打開的 modal 總數。

### `modals`

- 回傳：
  - `Array`: 取得所有 modal 的實例。
- 範例：
  - 取得第一個創建的 modal 實例
    ```js
      this.$modal.modals[0]
    ```
  - 取得現在創建的 modal 總數
    ```js
      this.$modal.modals.length
    ```
