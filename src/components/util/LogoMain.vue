<template>
  <div id="container">
    <div>
      <img :src="resolve_img_url(pictureSrc)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictureSrc: {
      type: String,
      require: TransformStreamDefaultController,
    },
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context("../../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
};
</script>

<style>
#container {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
