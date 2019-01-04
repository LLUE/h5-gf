<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <v-ons-back-button></v-ons-back-button>
      <div class="center">Wealth</div>
    </v-ons-toolbar>
    
    <div class="gxWrap">
      <p class="gx_bal">Balance (USD)</p>
      <p class="gx_count">88,888,888.00</p>
    </div>
    <div class="pad_lr_30">
      <v-ons-row class="pad_tb_30">
        <v-ons-col class="tx_center" @click="doPayment">
          <div class="icon_img icon_home"><img src="@/assets/images/home_icon_pay.png" alt=""></div>
          <div>Payment</div>
        </v-ons-col>
        <v-ons-col class="tx_center">
          <div class="icon_img icon_home"><img src="@/assets/images/home_list_receive.png" alt=""></div>
          <div>Receive</div>
        </v-ons-col>
        <v-ons-col class="tx_center">
          <div class="icon_img icon_home"><img src="@/assets/images/home_icon_coupon.png" alt=""></div>
          <div>Coupon</div>
        </v-ons-col>
      </v-ons-row>
    </div>

    <v-ons-list class="mag_t_30 list_tb_none">
      <v-ons-list-item modifier="longdivider" class="list_bot">
        <div class="left">
          <div class="coin">
            <img class="list-item__thumbnail" src="@/assets/images/coin_bch.png">
          </div>
        </div>
        <div class="center">
          <span class="item_h">LDH</span>
          <span class="item_sub">1LDH = $6.99</span>
        </div>
        <div class="right txt_r txt_wrap">
          <span class="item_h">12.00000000</span>
          <span class="item_sub">1234.12 USD</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item modifier="longdivider" class="list_bot">
        <div class="left">
          <div class="coin">
            <img class="list-item__thumbnail" src="@/assets/images/coin_ada.png">          
          </div>
        </div>
        <div class="center">
          <span class="item_h">LDH</span>
          <span class="item_sub">1LDH = $6.99</span>
        </div>
        <div class="right txt_r txt_wrap">
          <span class="item_h">12.00000000</span>
          <span class="item_sub">1234.12 USD</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item modifier="longdivider" class="list_bot">
        <div class="left">
          <div class="coin">
            <img class="list-item__thumbnail" src="@/assets/images/coin_acm.png">        
          </div>
        </div>
        <div class="center">
          <span class="item_h">LDH</span>
          <span class="item_sub">1LDH = $6.99</span>
        </div>
        <div class="right txt_r txt_wrap">
          <span class="item_h">12.00000000</span>
          <span class="item_sub">1234.12 USD</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item modifier="longdivider" class="list_bot">
        <div class="left">
          <div class="coin">
            <img class="list-item__thumbnail" src="@/assets/images/coin_omg.png">       
          </div>
        </div>
        <div class="center">
          <span class="item_h">LDH</span>
          <span class="item_sub">1LDH = $6.99</span>
        </div>
        <div class="right txt_r txt_wrap">
          <span class="item_h">12.00000000</span>
          <span class="item_sub">1234.12 USD</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item modifier="longdivider" class="list_bot">
        <div class="left">
          <div class="coin">
            <img class="list-item__thumbnail" src="@/assets/images/coin_neo.png">     
          </div>
        </div>
        <div class="center">
          <span class="item_h">LDH</span>
          <span class="item_sub">1LDH = $6.99</span>
        </div>
        <div class="right txt_r txt_wrap">
          <span class="item_h">12.00000000</span>
          <span class="item_sub">1234.12 USD</span>
        </div>
      </v-ons-list-item>
    </v-ons-list>
   
    
  </v-ons-page>

</template>
<script>
export default {
  methods: {
    doPayment() {
      this.$store.commit("push", require("./paymentDet").default);
    }
  }
};
</script>

<style lang="less" scoped src="@/static/less/pixWealth.less"></style>

<style>
</style>
