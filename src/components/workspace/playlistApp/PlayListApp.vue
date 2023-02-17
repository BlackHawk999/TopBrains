<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'close'): void
}>()

const touchStartPos = ref(0)

function touchStart(event: TouchEvent) {
  touchStartPos.value = event.changedTouches[0].clientY
}

function touchMove(event: TouchEvent) {
  const currentStartPos = event.changedTouches[0].clientY
  if (currentStartPos - touchStartPos.value > 50) emit('close')
}
</script>

<template>
  <div class="main-playlist">
    <button class="playlist__icon" @touchstart="touchStart" @touchmove="touchMove" @click="emit('close')">
      <svg
        width="48"
        height="6"
        viewBox="0 0 48 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="48"
          height="6"
          rx="3"
          fill="white"
          fill-opacity="0.08"
        />
      </svg>
    </button>
    <h4 class="playlist__pretitle">Программа</h4>
    <div class="playlist-wrapper">
      <div class="playlist-body">
        <h5 class="playlist__title">Знакомство</h5>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">1. Встречайте, Даниэль Пинк</h6>
          <span class="playlist__time">8 мин</span>
        </a>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">2. Тренды Продаж</h6>
          <span class="playlist__time">12 мин</span>
        </a>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">3. Поиск точек соприкосновения</h6>
          <span class="playlist__time">20 мин</span>
        </a>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">4. Служить своей аудитории</h6>
          <span class="playlist__time">4 мин</span>
        </a>
      </div>
      <div class="playlist-body">
        <h5 class="playlist__title">Теория</h5>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">5. Создание карты обсуждения</h6>
          <span class="playlist__time">8 мин</span>
        </a>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">6. Cделайте сообщение важным</h6>
          <span class="playlist__time">12 мин</span>
        </a>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">7. Побуждение к действиям</h6>
          <span class="playlist__time">20 мин</span>
        </a>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">8. Тренды продаж</h6>
          <span class="playlist__time">7 мин</span>
        </a>
      </div>
      <div class="playlist-body">
        <h5 class="playlist__title">Теория</h5>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">5. Создание карты обсуждения</h6>
          <span class="playlist__time">8 мин</span>
        </a>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">6. Cделайте сообщение важным</h6>
          <span class="playlist__time">12 мин</span>
        </a>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">7. Побуждение к действиям</h6>
          <span class="playlist__time">20 мин</span>
        </a>
        <a href="#" class="playlist-video">
          <h6 class="playlist__name">8. Тренды продаж</h6>
          <span class="playlist__time">7 мин</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./PlayListApp.scss"></style>
