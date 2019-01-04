<template>
  <v-ons-page>
    <div class="background"></div>
    <div class="content">
      <div class="headTp"></div>
      <div class="headBd">
        <div class="me_pic" @click="doProfile"><img src="@/assets/images/mine_img.png" alt=""></div>
        <p class="me_name">Anbition</p>
        <p class="me_mail">anbition@163.com</p>
        <section class="me_btnwp">
          <v-ons-button class="btn btn_bill" @click="doBill">
            <i class="icon_img">
              <img src="@/assets/images/my_icon_record.png" alt="">
            </i> 
            Bill
          </v-ons-button>
          <v-ons-button class="btn btn_fav" @click="doFavorite">
            <i class="icon_img">
              <img src="@/assets/images/my_icon_star.png" alt="">
            </i> 
            Favorite
          </v-ons-button>
        </section>
      </div>
      <v-ons-list class="list_tb_none" style="margin-top:15px;">
        <v-ons-list-item modifier="chevron" tappable>
            <div class="left">
                <img width="30" src="@/assets/images/my_icon_setting.png" alt="">
            </div>
            <div class="center mid_bot" @click="doSetting">
                <span>Setting</span>
            </div>
        </v-ons-list-item>
      </v-ons-list>
      <v-ons-list class="list_tb_none" style="margin-top:15px;">
        <v-ons-list-item modifier="chevron" tappable>
            <div class="left">
                <img width="30" src="@/assets/images/my_icon_help.png" alt="">
            </div>
            <div class="center mid_bot">
                <span>Support</span>
            </div>
        </v-ons-list-item>
        <v-ons-list-item modifier="chevron" tappable>
            <div class="left">
                <img width="30" src="@/assets/images/my_icon_about.png" alt="">
            </div>
            <div class="center mid_bot">
                <span>About</span>
            </div>
        </v-ons-list-item>
        <v-ons-list-item modifier="chevron" tappable>
            <div class="left">
                <img width="30" src="@/assets/images/my_icon_content.png" alt="">
            </div>
            <div class="center mid_bot">
                <span>Contact</span>
            </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>

</template>

<script>
export default {
  methods: {
    doProfile () {
      this.$store.commit("push", require("@/components/user/meProfile").default);
    },
    doBill () {
      this.$store.commit("push", require("@/components/user/meBill").default);
    },
    doFavorite () {
      this.$store.commit("push", require("@/components/user/meFavorite").default);
    },
    doSetting () {
      this.$store.commit("push", require("@/components/user/meSetting").default);
    }
  }
}
</script>

<style lang="less" scoped src="@/static/less/me.less"></style>
