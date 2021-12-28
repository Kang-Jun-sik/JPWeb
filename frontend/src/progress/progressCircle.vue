<template>
  <div class="text-xs-center" v-if="showLoading">
    <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "progressCircle",
  props: {
    showLoading: {
      type: Boolean,
      default: () => false
    },
  },
}
</script>

<style scoped>
.text-xs-center {
  text-align: center;
}
</style>
