<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import { COMMENT } from "../../../../modules/comments";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  replies: {
    type: Array as PropType<COMMENT[]>,
    required: true,
  },
});
</script>

<template>
  <div class="comments-list">
    <div class="comments-author">
      <div class="comments-author__img">
        <img src="/images/main-img.png" alt="" />
      </div>
      <div class="comments-author-info">
        <h6 class="comments-author__name">{{ props.name }}</h6>
        <p class="comments-author__date">{{ props.date }}</p>
        <p class="comments-author__text">{{ props.text }}</p>
      </div>
    </div>
    <div v-if="props.replies.length" class="comments-list-replies">
      <CommentsListApp
        v-for="comment in props.replies"
        :name="comment.name"
        :date="comment.date"
        :text="comment.text"
        :replies="comment.replies"
      />
    </div>
  </div>
</template>

<style lang="scss" src="./commentsListApp.scss"></style>
