<template>
  <div id="container">
    <v-chip id="chips" color="#fff" label>
      <img :src="resolve_img_url(pictureSrc)" />
    </v-chip>
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
.Sheet-view {
  background: #b8fc3c;
  border: #b8fc3c;
}

#container {
  display: grid;
  grid-template-columns: 500px;
  justify-content: center;
  color: #314156;
}

#chips {
  padding: 5rem;
}
</style>
