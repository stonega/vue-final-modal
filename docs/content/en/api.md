---
title: API Reference
description: 'Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.'
category: API
position: 7
version: 2
---

## Usage

<alert>`$modal` is an object containing VModal's data/methods.</alert>

### **Options API**

Just use `this.$modal`.

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

- Type: `Function`
- Arguments:
  - name: `String` - Name of the modal
  - params: `?: object` - Any data that you want to pass into the modal, checkout the guide [params](/guide/params).
- Returns: `Promise<Object>` | `Promise<Array>`
- Example:

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

  <alert>`v-model` is necessary when you open a modal with `$modal.show(name)` API.</alert>

### `hide([names])`

- Type: `Function`
- Arguments:
  - names: `String` - The names to hide
- Returns: `Promise<Object>` | `Promise<Array>`
- Example:

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

- Returns: `Promise<Object>` | `Promise<Array>`
- Example:

  ```js
  this.$modal.hideAll().then(() => {
    // do something on all modals closed
  })
  ```

Hide all modals.

```js
this.$modal.hideAll().then(() => {
  // do something on all modals closed
})
```

### `toggle(name, show, params)`

- Type: `Function`
- Arguments:
  - name: [`String` | `Array`] - The names of the modal
  - show: `?: Boolean` - Show modal or not
  - params: `?: object` - Any data that you want to pass into the modal, checkout the guide [params](/guide/params).
- Returns: `Promise<Object>` | `Promise<Array>`
- Example:

  ```js
  this.$modal.toggle('myModal').then(() => {
    // do something on modals opened or closed, it depends on params `show` is true or false
  })
  ```

Toggle modals by name.

```js
this.$modal.toggle('myModal').then(() => {
  // do something on modals opened or closed, it depends on params `show` is true or false
})
```

### `get([names])`

Get the modal instances by modal names.

- Type: `Function`
- Arguments:
  - names: `String`
- Return:
  - `Array`: returns the modal instances
- Example:

  ```js
  const modals = this.$modal.get('modalName1', 'modalName2', ...)
  ```

### `openedModals`

- Return:
  - `Array`: returns the opened modal instances.
- Examples:
  - get the first opened modal instance
    ```js
      this.$modal.openedModals[0]
    ```
  - get how many modals was opened
    ```js
      this.$modal.openedModals.length
    ```

### `modals`

- Return:
  - `Array`: returns all modal instances.
- Examples:
  - get the first created modal instance
    ```js
      this.$modal.modals[0]
    ```
  - get how many modals was created
    ```js
      this.$modal.modals.length
    ```