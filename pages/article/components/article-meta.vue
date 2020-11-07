<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: article.author.username,
        },
      }"
      ><img :src="article.author.image"
    /></nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: article.author.username,
          },
        }"
        class="author"
        >{{ article.author.username }}</nuxt-link
      >
      <span class="date">J{{ article.createdAt | date("MMM DD, YYYY") }}</span>
    </div>
    <template v-if="user && user.username === article.author.username">
      <nuxt-link
        class="btn btn-outline-secondary btn-sm"
        :to="{
          name: 'editor',
          query: {
            slug: article.slug,
          },
        }"
      >
        <i class="ion-edit"></i> Edit Article
      </nuxt-link>
      <button
        :disabled="deleteArticleDisabled"
        @click="onDeleteArticle(article.slug)"
        class="btn btn-outline-danger btn-sm"
      >
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </template>
    <template v-else>
      <button
        v-if="article.author.following"
        @click="onUnFollowUser(article.author)"
        :disabled="followDisabled"
        class="btn btn-sm action-btn btn-secondary"
      >
        <i class="ion-plus-round"></i>
        &nbsp; Unfollow {{ article.author.username }}
      </button>
      <button
        v-else
        @click="onFollowUser(article.author)"
        :disabled="followDisabled"
        class="btn btn-sm action-btn btn-outline-secondary action-btn"
      >
        <i class="ion-plus-round"></i>
        &nbsp; Follow {{ article.author.username }}
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: article.favorited,
        }"
        @click="onFavorite(article)"
        :disabled="favoriteDisabled"
      >
        <i class="ion-heart"></i>
        &nbsp; Favorite Post
        <span class="counter"> {{ article.favoritesCount }} </span>
      </button>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { followUser, unfollowUser } from "@/api/user";
import { deleteArticle, addFavorite, deleteFavorite } from "@/api/article";
export default {
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      deleteArticleDisabled: false,
      favoriteDisabled: false,
      followDisabled: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async onDeleteArticle(slug) {
      this.deleteArticleDisabled = true;
      try {
        // 删除文章
        await deleteArticle(slug);

        // 跳转到首页
        this.$router.push("/");
      } catch (err) {
        this.deleteArticleDisabled = false;
        console.log(err);
      }
    },
    async onFavorite(article) {
      this.favoriteDisabled = true;
      if (this.user) {
        if (article.favorited) {
          // 取消点赞
          await deleteFavorite(article.slug);
          article.favorited = false;
          article.favoritesCount -= 1;
        } else {
          // 添加点赞
          await addFavorite(article.slug);
          article.favorited = true;
          article.favoritesCount += 1;
        }
      } else {
        this.$router.push("/login");
      }
      this.favoriteDisabled = false;
    },
    async onFollowUser(userProfile) {
      this.followDisabled = true;
      if (this.user) {
        try {
          await followUser(userProfile.username);
          userProfile.following = true;
        } catch (err) {
          console.log(err);
        }
      } else {
        this.$router.push("/login");
      }
      this.followDisabled = false;
    },
    async onUnFollowUser(userProfile) {
      this.followDisabled = true;
      try {
        await unfollowUser(userProfile.username);
        userProfile.following = false;
      } catch (err) {
        console.log(err);
      }
      this.followDisabled = false;
    },
  },
};
</script>

<style></style>
