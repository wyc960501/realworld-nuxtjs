<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  :disabled="publishArticleDisabled"
                  placeholder="Article Title"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  :disabled="publishArticleDisabled"
                  placeholder="What's this article about?"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  :disabled="publishArticleDisabled"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  required
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.tagList"
                  type="text"
                  class="form-control"
                  :disabled="publishArticleDisabled"
                  placeholder="Enter tags"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                :disabled="publishArticleDisabled"
                class="btn btn-lg pull-xs-right btn-primary"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, addArticle, editArticle } from "@/api/article";
export default {
  // 在路由匹配组件渲染之前会执行中间件处理
  middleware: "authenticated",
  name: "EditorIndex",
  data() {
    return {
      publishArticleDisabled: false,
    };
  },
  async asyncData({ query }) {
    var article = {
      title: "",
      description: "",
      body: "",
      tagList: [],
    };
    if (query.slug) {
      // 获取文章
      const articleRes = await getArticle(query.slug);
      article = articleRes.data.article;
    }
    const slug = query.slug;
    return {
      article,
      slug,
    };
  },
  methods: {
    async onSubmit() {
      this.publishArticleDisabled = true;
      try {
        if (this.slug) {
          // 编辑文章
          editArticle(this.slug, {
            article: this.article,
          });

          // 跳转到文章内页
          this.$router.push(`/article/${this.slug}`);
        } else {
          // 添加文章
          await addArticle({
            article: this.article,
          });

          // 跳转到首页
          this.$router.go(-1);
        }
      } catch (err) {
        this.publishArticleDisabled = false;
        console.log(err);
      }
    },
  },
  head() {
    return {
      title: `editor - RealWorld`,
    };
  },
};
</script>

<style></style>
