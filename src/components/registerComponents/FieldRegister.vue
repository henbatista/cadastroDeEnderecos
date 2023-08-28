<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-text-field
        :v-model="model"
        :label="label"
        :rules="[required]"
        :readonly="readonly"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    model: {
      type: String,
      required: true,
    },
  },
};
</script>
