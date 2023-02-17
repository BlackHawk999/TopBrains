<script lang="ts" setup>
import { ref, watch } from "vue";
import PlayListVideoApp from "../playlistVideoApp/PlayListVideoApp.vue";
import PlayListApp from "../playlistApp/PlayListApp.vue";
import ArticleCardApp from "../articleCardApp/ArticleCardApp.vue";
import PlayListCardApp from "../playlistApp/playlistCardApp/PlayListCardApp.vue";
import CommentsApp from "../commentsApp/CommentsApp.vue";
import courseApp from "../courseApp/courseApp.vue";

const openPlayList = ref(false);
const articles = [
  {
    title: "Статья",
    text: "Прогнозы трендов продаж на ближайшие пять лет",
    Image: "/images/stock.jpg",
  },
  {
    title: "Статья",
    text: "Прогнозы трендов продаж на ближайшие пять лет",
    Image: "/images/trade.jpg",
  },
];

const cardsData = [
  {
    image: "/images/main-img.png",
    title: "Уроков завершено",
  },
  {
    number: "13",
    numberAmount: "20",
    title: "Уроков завершено",
  },
  {
    number: "13",
    numberAmount: "20",
    title: "Уроков завершено",
  },
  {
    image: "/images/avatar.png",
    title: "Уроков завершено",
  },
];

function showPlayList() {
  openPlayList.value = true;
  console.log("openParent: ", openPlayList.value);

  return openPlayList.value;
}

watch(openPlayList, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>

<template>
  <div class="main-app">
    <div class="main-app-wrapper">
      <div class="container">
        <div class="inner-wrapper">
          <div class="main-app-body">
            <PlayListVideoApp @open-list="showPlayList" />
            <div class="main-app-article">
              <h4 class="article__title">Читайте также</h4>
              <div class="article-wrapper">
                <ArticleCardApp
                  v-for="article in articles"
                  :title="article.title"
                  :text="article.text"
                  :image="article.Image"
                />
              </div>
            </div>
            <CommentsApp />
          </div>
          <div :class="['main-app-items', { show: openPlayList }]">
            <PlayListApp @close="openPlayList = false" />
            <div class="main-app-playlist">
              <PlayListCardApp
                v-for="card in cardsData"
                :image="card.image"
                :number="card.number"
                :number-amount="card.numberAmount"
                :title="card.title"
              />
            </div>
          </div>
        </div>
      </div>
      <courseApp />
    </div>
  </div>
</template>

<style lang="scss" src="./MainApp.scss"></style>
