<template>
  <div class="loading" v-if="loading">
    <img src="../../assets/loading-gif-transparent-10.gif" alt="loading" />
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped>
.loading {
  display: grid;
  padding-top: 5rem;
  grid-template-columns: auto;
  grid-template-rows: 30rem;
  justify-content: center;
}
</style>
