<template>
  <div>
    <v-modal v-model="showModal">
      <span class="modal__title">Hello, vue-final-modal</span>
    </v-modal>
    <v-button highlight @click="showModal = true">Open modal</v-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    showModal: false
  })
}
</script>

<style scoped>
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
