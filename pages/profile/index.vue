<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="userProfile.image" class="user-img" />
            <h4>{{ userProfile.username }}</h4>
            <p>
              {{ userProfile.bio }}
            </p>
            <template v-if="user.username === userProfile.username">
              <nuxt-link
                class="btn btn-sm btn-outline-secondary action-btn"
                to="/settings"
              >
                <i class="ion-gear-a"></i> Edit Profile Settings
              </nuxt-link>
            </template>
            <template v-else>
              <button
                v-if="userProfile.following"
                @click="onUnFollowUser(userProfile)"
                :disabled="followDisabled"
                class="btn btn-sm action-btn btn-secondary"
              >
                <i class="ion-plus-round"></i>
                &nbsp; Unfollow {{ userProfile.username }}
              </button>
              <button
                v-else
                @click="onFollowUser(userProfile)"
                :disabled="followDisabled"
                class="btn btn-sm action-btn btn-outline-secondary action-btn"
              >
                <i class="ion-plus-round"></i>
                &nbsp; Follow {{ userProfile.username }}
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'my_article',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'my_article',
                    },
                  }"
                  >My Articles</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'favorited_article',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'favorited_article',
                    },
                  }"
                  >Favorited articles</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }"
              >
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{
                    name: 'profile',
                    params: {
                      username: article.author.username,
                    },
                  }"
                  class="author"
                >
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{
                  article.createAt | date("MMM DD, YYYY")
                }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                  active: article.favorited,
                }"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- 分页列表 -->
          <nav v-if="totalPage > 1">
            <ul class="pagination">
              <li
                class="page-item"
                :class="{ active: item === page }"
                v-for="item in totalPage"
                :key="item"
              >
                <nuxt-link
                  class="page-link"
                  :to="{
                    name: 'profile',
                    query: {
                      tab: tab,
                      page: item,
                    },
                  }"
                  >{{ item }}</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getUserProfile, followUser, unfollowUser } from "@/api/user";
import { getArticles, addFavorite, deleteFavorite } from "@/api/article";
export default {
  // 在路由匹配组件渲染之前会执行中间件处理
  middleware: "authenticated",
  name: "UserProfile",
  data() {
    return {
      followDisabled: false,
    };
  },
  async asyncData({ query, params }) {
    const { data } = await getUserProfile(params.username);
    const userProfile = data.profile;

    // 获取用户自己、喜欢的文章列表
    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const tab = query.tab || "my_article";
    var articleRes;
    if (tab === "my_article") {
      articleRes = await getArticles({
        limit,
        offset: (page - 1) * limit,
        author: params.username,
      });
    } else {
      articleRes = await getArticles({
        limit,
        offset: (page - 1) * limit,
        favorited: params.username,
      });
    }
    const { articles, articlesCount } = articleRes.data;
    articles.forEach((article) => {
      article.favoriteDisabled = false;
    });
    return {
      userProfile,
      articles,
      articlesCount,
      limit,
      page,
      tab,
    };
  },
  watchQuery: ["page", "tab"],
  computed: {
    ...mapState(["user"]),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },
  methods: {
    async onFollowUser(userProfile) {
      console.log(1);
      this.followDisabled = true;
      try {
        await followUser(userProfile.username);
        userProfile.following = true;
      } catch (err) {
        console.log(err);
      }
      this.followDisabled = false;
    },
    async onUnFollowUser(userProfile) {
      console.log(2);
      this.followDisabled = true;
      try {
        await unfollowUser(userProfile.username);
        userProfile.following = false;
      } catch (err) {
        console.log(err);
      }
      this.followDisabled = false;
    },
    async onFavorite(article) {
      article.favoriteDisabled = true;
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
      article.favoriteDisabled = false;
    },
  },
  head() {
    return {
      title: `${this.userProfile.username} - RealWorld`,
    };
  },
};
</script>

<style></style>
