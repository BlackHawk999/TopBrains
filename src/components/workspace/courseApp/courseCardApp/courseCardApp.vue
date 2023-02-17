<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  count: {
    type: String,
  },
  duration: {
    type: String,
  },
  programm: {
    type: String,
  },
  subtitle: {
    type: String,
  },
});
</script>

<template>
  <div class="course-card">
    <div class="course-card__img">
      <img :src="props.image" alt="" />
    </div>
    <div class="course-card-info">
      <div class="course-card-infos"> 
        <button class="play__btn">
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.71502V14.285C0 15.2435 1.00049 15.8259 1.77099 15.3042L11.1319 9.01919C11.8449 8.54599 11.8449 7.45401 11.1319 6.96868L1.77099 0.695835C1.00049 0.174109 0 0.756501 0 1.71502Z"
              fill="white"
              fill-opacity="0.9"
            />
          </svg>
        </button>
        <h4 class="course-card__name">{{ props.name }}</h4>
        <ul class="course-card-items">
          <li>
            {{ props.count }}
            <span class="dots"></span>
          </li>
          <li>
            {{ props.duration }}
            <span class="dots"></span>
          </li>
          <li>{{ props.programm }}</li>
        </ul>
        <p class="course-card__subtitle">{{ props.subtitle }}</p>
      </div>
      <div class="course-card__btn">
        <svg
          width="12"
          height="16"
          viewBox="0 0 12 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.71502V14.285C0 15.2435 1.00049 15.8259 1.77099 15.3042L11.1319 9.01919C11.8449 8.54599 11.8449 7.45401 11.1319 6.96868L1.77099 0.695835C1.00049 0.174109 0 0.756501 0 1.71502Z"
            fill="white"
            fill-opacity="0.9"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./courseCardApp.scss"></style>
