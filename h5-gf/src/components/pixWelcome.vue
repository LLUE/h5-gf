<template>
  <v-ons-page>
    <div class="background bg"></div>
    <div class="sig_logo"><img src="@/assets/images/logo.png" /></div>
    <v-ons-card class="card_sig card_in">
      <div class="content">
        <v-ons-list class="list_tb_none list_rad">
          <v-ons-list-item modifier="nodivider" class="list_bgtrsp">
              <label class="left"><i class="icon_img icon_sig"><img src="@/assets/images/login_icon_name.png" alt=""></i></label>
              <v-ons-input class="input"
                          placeholder="Name/E-mail" />
          </v-ons-list-item>
        </v-ons-list>
        <v-ons-list class="list_tb_none list_rad">
          <v-ons-list-item modifier="nodivider" class="list_bgtrsp">
              <label class="left"><i class="icon_img icon_sig"><img src="@/assets/images/login_icon_password.png" alt=""></i></label>
              <v-ons-input class="input"
                          placeholder="PassWord" />
          </v-ons-list-item>
        </v-ons-list>
      </div>
    </v-ons-card>
    <section class="sig_btn">
        <p class="font_13" style="margin:0 0 10px;">
          <span class="font_b" @click="doFind">Forget Password ?</span>
        </p>
        <v-ons-button modifier="large"
                      style="background:#005DC0;"
                      @click="doLogin">登陆</v-ons-button>
        <p class="font_13" style="text-align:center;">
          <span> Don’t have an account ?  </span>
          <span class="font_b" @click="doReg">Sing Up</span>
        </p>
    </section>
  </v-ons-page>
</template>

<script>
export default {
  methods: {
    doLogin () {
      this.$store.commit("push", require("@/components/pixMain").default);
    },
    doFind () {
      this.$store.commit("push", require("@/components/pixFind").default);
    },
    doReg () {
      this.$store.commit("push", require("@/components/pixReg").default);
    }
  }
};
</script>

<style lang="less" scoped src="../static/less/login.less"></style>
