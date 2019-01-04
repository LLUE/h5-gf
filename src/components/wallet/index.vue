<template>
  <v-ons-page>
    <div class="background"></div>
    <div class="gxWrap">
      <!-- <img src="@/assets/main_bg.png" /> -->
      <p class="gx_wel marg_t70">Good Morning,XiaoMing!</p>
      <p class="gx_wel">What do you want to do taday?</p>
    </div>
    <div class="pad_lr_30">
      <v-ons-row>
        <v-ons-col class="col">
          <div class="pad_t_30 clearfix">
            <div class="f_l"><span class="font_30">Balance</span></div>
            <div class="f_r" @click="doBalance">
              <span class="font_b font_30 marg_r">45.00000000</span>
              <span class="font_b font_22 marg_r">ACM</span>
              <i class="icon_img fw_rig_min"></i>
            </div>
          </div>
          <div class="bal_usd">
            <span class="marg_r">16,840,879.00</span><span>USD</span>
          </div>
        </v-ons-col>
      </v-ons-row>
      <v-ons-row class="pad_tb_30">
        <v-ons-col class="tx_center" @click="doPayment">
          <div class="icon_img icon_home"><img src="@/assets/images/home_icon_pay.png" alt=""></div>
          <div>Payment</div>
        </v-ons-col>
        <v-ons-col class="tx_center">
          <div class="icon_img icon_home"><img src="@/assets/images/home_list_receive.png" alt=""></div>
          <div>Receive</div>
        </v-ons-col>
        <v-ons-col class="tx_center" @click="doScan">
          <div class="icon_img icon_home"><img src="@/assets/images/home_icon_coupon.png" alt=""></div>
          <div>Coupon</div>
        </v-ons-col>
      </v-ons-row>
    </div>
    <v-ons-row>
      <v-ons-col>
        <div class="ad_img mag_t_30"><img src="@/assets/images/ad_img.png" alt=""></div>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <div class="mag_t_30 pix_content">
          <h3 class="pix_h">Fan Merchants</h3>
          <div class="pix_listWp">

            <v-ons-card class="pix_item">
              <div class="pix_pic" @click="doMerchant">
                <div class="pic"><img src="@/assets/images/merch_img.png" alt=""></div>
                <p class="pix_til">
                  <span>COMCU旗舰店</span>
                  <span class="slip">|</span>
                  <span><img width="12px" 
                          src="@/assets/images/svg_range.png" 
                          alt=""></span>
                  <span>1.2km</span>
                </p>
              </div>
              <v-ons-list class="pix_infor list_tb_none">
                <v-ons-list-item modifier="longdivider" class="list_bot">
                <div class="left">
                  <i class="icon_img icon_pos"><img src="@/assets/images/svg_time.png" alt=""></i>
                </div>
                <div class="center">
                  <span>Monday - Sunday 9AM - 6Pm</span>
                </div>
                </v-ons-list-item>
                <v-ons-list-item modifier="longdivider" class="list_bot">
                <div class="left">
                  <i class="icon_img icon_pos"><img src="@/assets/images/svg_post.png" alt=""></i>
                </div>
                <div class="center">
                  <span>3,Jalan PJS 11/23,Bandar Sunway,3700 Subang Jaya,Swlangor</span>
                </div>
                </v-ons-list-item>
              </v-ons-list>
            </v-ons-card>

            <v-ons-card class="pix_item">
              <div class="pix_pic" @click="doMerchant">
                <div class="pic"><img src="@/assets/images/merch_img.png" alt=""></div>
                <p class="pix_til">
                  <span>COMCU旗舰店</span>
                  <span class="slip">|</span>
                  <span><img width="12px" 
                          src="@/assets/images/svg_range.png" 
                          alt=""></span>
                  <span>1.2km</span>
                </p>
              </div>
              <v-ons-list class="pix_infor list_tb_none">
                <v-ons-list-item modifier="longdivider" class="list_bot">
                <div class="left">
                  <i class="icon_img icon_pos"><img src="@/assets/images/svg_time.png" alt=""></i>
                </div>
                <div class="center">
                  <span>Monday - Sunday 9AM - 6Pm</span>
                </div>
                </v-ons-list-item>
                <v-ons-list-item modifier="longdivider" class="list_bot">
                <div class="left">
                  <i class="icon_img icon_pos"><img src="@/assets/images/svg_post.png" alt=""></i>
                </div>
                <div class="center">
                  <span>3,Jalan PJS 11/23,Bandar Sunway,3700 Subang Jaya,Swlangor</span>
                </div>
                </v-ons-list-item>
              </v-ons-list>
            </v-ons-card>
          </div>
        </div>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
export default {
  methods: {
    doPayment() {
      this.$store.commit("push", require("./paymentDet").default);
    },
    logout() {
      delete localStorage.token;
      this.$store.commit("replace", require("@/components/pixWelcome").default);
    },
    doScan() {
      if (this.$ons.platform.isWebView()) {
        this.$ons.notification.alert(this.$ons.platform.isWebView());
      } else {
        this.$ons.notification.alert("请使用手机app");
      }
      this.$g.app.scan().then(code => {
        this.$http
          .request({
            url: code
          })
          .then(res => {
            if (res.data) {
              this.$store.commit("push", {
                ...require("./pay").default,
                onsNavigatorProps: {
                  trade: res.data
                }
              });
            }
          })
          .catch(err => {
            this.$ons.notification.alert(JSON.stringify(err));
          });
      });
    },
    doAssets() {
      this.$store.commit("push", require("./pixAssets").default);
    },
    doBalance() {
      this.$store.commit("push", require("./pixWealth").default);
    },
    doMerchant() {
      this.$store.commit("push", require("./merchant").default);
    },
  }
};
</script>

<style lang="less" scoped src="@/static/less/merchantCard.less"></style>
