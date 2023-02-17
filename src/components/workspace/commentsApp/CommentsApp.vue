<script lang="ts" setup>
import commentsListApp from "./commentsListApp/commentsListApp.vue";

const comments = [
  {
    name: "KKomol",
    date: "2 дня назад",
    text: "Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, но думаю именно этот стоит посмотреть :)",
    replies: [
      {
        name: "TopBreyns - Поддержка",
        date: "1 день назад",
        text: "Нет ребят я конечно все понимаю таких фильмов",
        replies: [],
      },
    ],
  },
  {
    name: "Abdullokh",
    date: "4 дня назад",
    text: "Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, но думаю именно этот стоит посмотреть :)",
    replies: [],
  },
  {
    name: "Amaliya Cat",
    date: "5 дня назад",
    text: "Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, но думаю именно этот стоит посмотреть :)",
    replies: [
      {
        name: "TopBreyns - Поддержка",
        date: "1 день назад",
        text: "Нет ребят я конечно все понимаю таких фильмов",
        replies: [],
      },
    ],
  },
  {
    name: "Annamana",
    date: "6 дня назад",
    text: "Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, но думаю именно этот стоит посмотреть :)",
    replies: [],
  },
];
</script>

<template>
  <div class="comments">
    <div class="comments-header">
      <p class="comments__count">32 Комментария</p>
      <div class="comments-leave">
        <div class="comments-leave__img">
          <img src="/images/avatar.png" alt="" />
        </div>
        <input
          type="text"
          class="comments-leave__input"
          placeholder="Оставить отзыв..."
        />
      </div>
    </div>
    <div class="comments-body">
      <commentsListApp
        v-for="comment in comments"
        :name="comment.name"
        :date="comment.date"
        :text="comment.text"
        :replies="comment.replies"
      />
    </div>
    <div class="comments-footer">
      <button class="comments__btn" v-if="comments.length">Показать ещё</button>
    </div>
  </div>
</template>

<style lang="scss" src="./CommentsApp.scss"></style>
