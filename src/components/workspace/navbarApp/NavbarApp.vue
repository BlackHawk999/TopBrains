<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const scrollPosition = ref(0);

const updateScroll = () => {
    scrollPosition.value = window.scrollY
};
onMounted(() => {
    window.addEventListener('scroll', updateScroll);
})
</script>

<template>
  <div :class="['navbar', { 'change__color': scrollPosition > 50 }]">
    <div class="container">
      <div class="navbar-wrapper">
        <div class="navbar-items">
          <div class="navbar__logo">
            <img src="/images/logo.png" alt="" />
          </div>
          <div class="navbar__img">
            <img src="/images/main-img.png" alt="" />
          </div>
        </div>
        <div class="navbar-items search">
          <label class="navbar__input">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2083 10.8333H11.4842L11.2275 10.5858C12.3275 9.30246 12.8958 7.55163 12.5842 5.6908C12.1533 3.14246 10.0267 1.10746 7.46 0.795796C3.5825 0.31913 0.319168 3.58246 0.795835 7.45996C1.1075 10.0266 3.1425 12.1533 5.69083 12.5841C7.55167 12.8958 9.3025 12.3275 10.5858 11.2275L10.8333 11.4841V12.2083L14.7292 16.1041C15.105 16.48 15.7192 16.48 16.095 16.1041C16.4708 15.7283 16.4708 15.1141 16.095 14.7383L12.2083 10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.9908 2.58333 6.7083C2.58333 4.4258 4.42583 2.5833 6.70833 2.5833C8.99084 2.5833 10.8333 4.4258 10.8333 6.7083C10.8333 8.9908 8.99084 10.8333 6.70833 10.8333Z"
                fill="white"
                fill-opacity="0.9"
              />
            </svg>
            <input type="search" class="input" placeholder="Поиск"/>
          </label>
          <div class="navbar__img cabinet">
            <img src="/images/avatar.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./NavbarApp.scss"></style>
