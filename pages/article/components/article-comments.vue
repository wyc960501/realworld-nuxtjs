<template>
  <div>
    <template v-if="user">
      <form @submit.prevent="onAddComment" class="card comment-form">
        <div class="card-block">
          <textarea
            v-model="comment.body"
            class="form-control"
            placeholder="Write a comment..."
            rows="3"
          ></textarea>
        </div>
        <div class="card-footer">
          <img :src="user.image" class="comment-author-img" />
          <button :disabled="addCommentDisabled" class="btn btn-sm btn-primary">
            Post Comment
          </button>
        </div>
      </form>
    </template>

    <template v-else>
      <p>
        <nuxt-link to="/login">Sign in</nuxt-link> or
        <nuxt-link to="/register">sign up</nuxt-link> to add comments on this
        article.
      </p>
    </template>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{
          comment.createdAt | date("MMM DD, YYYY")
        }}</span>
        <span
          v-if="user !== null && user.username === comment.author.username"
          class="mod-options"
        >
          <i class="ion-trash-a" @click="onDeleteComment(comment)"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, addComment, deleteComment } from "@/api/article";
import { mapState } from "vuex";
export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: [], // 文章评论列表
      comment: {
        body: "",
      }, // 评论框内容
      addCommentDisabled: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  async mounted() {
    const { data } = await getComments(this.article.slug);
    data.comments.forEach((comment) => {
      comment.deleteDisabled = false;
    });
    this.comments = data.comments;
  },
  methods: {
    async onAddComment() {
      this.addCommentDisabled = true;
      try {
        // 添加文章评论
        const { data } = await addComment(this.article.slug, {
          comment: this.comment,
        });
        this.comments.unshift(data.comment);
        this.comment.body = "";
      } catch (err) {
        console.log(err);
      }
      this.addCommentDisabled = false;
    },
    async onDeleteComment(comment) {
      try {
        // 删除文章评论
        await deleteComment(this.article.slug, comment.id);
        this.comments = this.comments.filter((obj) => obj.id !== comment.id);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
