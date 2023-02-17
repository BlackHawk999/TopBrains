<script lang="ts" setup>
import courseCardApp from "./courseCardApp/courseCardApp.vue";

const cards = [
  {
    image: "/images/coursecard.png",
    name: "Robert Reffikin",
    count: "32 урока",
    duration: "4 часа",
    programm: "Программа",
    subtitle:
      "Как генеральный директор и основатель Compass Роберт Реффкин использовал.",
  },
  {
    image: "/images/coursecard2.png",
    name: "Daniel Pink",
    count: "32 урока",
    duration: "4 часа",
    programm: "Программа",
    subtitle:
      "Как генеральный директор и основатель Compass Роберт Реффкин использовал.",
  },
];
</script>

<template>
  <div class="course">
    <div class="container">
      <div class="course-wrapper">
        <div class="course-header">
          <h4 class="course__title">Курсы</h4>
          <p class="course__subtitle">
            TopBreyns снимает курсы от ещё многих <br />
            профессионалов, которые вам будут интересны
          </p>
        </div>
        <div class="course-body">
          <courseCardApp
            v-for="card in cards"
            :image="card.image"
            :name="card.name"
            :count="card.count"
            :duration="card.duration"
            :programm="card.programm"
            :subtitle="card.subtitle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./courseApp.scss"></style>
