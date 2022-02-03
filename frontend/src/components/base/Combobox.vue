<template>
  <v-select
      :items="items"
      :label="comboLabel"
      outline>
  </v-select>
</template>

<script>
export default {
  name: "Combobox",
  props: {
    comboLabel: {type: String, default: () => '포지션'},
    items: {type: Array, default: () => ['1', '2', '3', '4']}
  },
  data() {
    return {}
  },
  watch: {}
}
</script>

<style scoped>

</style>
