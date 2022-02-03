<template>
  <v-select
      :items="items"
      label="Outline style"
      outline>
  </v-select>
</template>

<script>
export default {
  name: "Combobox",
  data() {
    return {
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
    }
  },
  watch: {}
}
</script>

<style scoped>

</style>
