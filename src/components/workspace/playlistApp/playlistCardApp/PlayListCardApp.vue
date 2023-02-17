<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  image: {
    type: String,
  },
  number: {
    type: String,
  },
  numberAmount: {
    type: String
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="playlist-card">
    <div class="playlist-header">
      <div class="playlist-card__img" v-if="props.image">
        <img :src="props.image" alt="" />
      </div>
      <h4 class="playlist-card__num" v-else>
        {{ props.number }}/<span class="child__num">{{ props.numberAmount }}</span>
      </h4>
    </div>
    <h5 class="playlist-card__title">
      {{ props.title }}
    </h5>
  </div>
</template>

<style lang="scss" src="./PlayListCardApp.scss"></style>
