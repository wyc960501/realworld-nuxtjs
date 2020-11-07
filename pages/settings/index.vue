<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onUpdateUser">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.image"
                  class="form-control"
                  :disabled="updateSettingDisabled"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.username"
                  class="form-control form-control-lg"
                  :disabled="updateSettingDisabled"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="user.bio"
                  class="form-control form-control-lg"
                  :disabled="updateSettingDisabled"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.email"
                  class="form-control form-control-lg"
                  :disabled="updateSettingDisabled"
                  type="text"
                  placeholder="Email"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.password"
                  class="form-control form-control-lg"
                  :disabled="updateSettingDisabled"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button
                :disabled="updateSettingDisabled"
                class="btn btn-lg btn-primary pull-xs-right"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button
            @click="onLogout"
            :disabled="logoutDisabled"
            class="btn btn-outline-danger"
          >
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { updateUserProfile } from "@/api/user";
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  // 在路由匹配组件渲染之前会执行中间件处理
  middleware: "authenticated",
  name: "SettingsIndex",
  data() {
    return {
      updateSettingDisabled: false,
      logoutDisabled: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async onUpdateUser() {
      this.updateSettingDisabled = true;
      try {
        // 更新用户资料
        await updateUserProfile({
          user: this.user,
        });
        // 跳转到用户界面
        this.$router.push("/profile/" + this.user.username);
      } catch (err) {
        this.updateSettingDisabled = false;
        console.log(err);
      }
    },
    async onLogout() {
      this.logoutDisabled = true;
      try {
        // 跳转到首页
        this.$router.push("/", () => {
          // 删除用户的登录状态
          this.$store.commit("removeUser");
          Cookie.remove("user");
        });
      } catch (err) {
        this.logoutDisabled = false;
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
