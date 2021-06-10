<template>
  <div>
    <custom-modal v-model="showModal" name="VApiShow" @confirm="showModal = false" @cancel="showModal = false">
      <template v-slot="{ params }">Hi {{ params.userName }} </template>
      <template v-slot:title>$modal.show</template>
    </custom-modal>
    <v-button highlight @click="$modal.show('VApiShow', { userName: 'vue-final-modal' })">Open modal</v-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    showModal: false
  })
}
</script>
