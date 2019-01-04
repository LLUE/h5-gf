<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <v-ons-back-button></v-ons-back-button>
      <div class="center">Bill</div>
    </v-ons-toolbar>

    <v-ons-list class="list_tb_none" style="margin-top:15px;">
      <v-ons-list-item class="list_bot"
        modifier="longdivider" 
        @click="doBillDail">
        <div class="left">
          <div class="coin">
            <img class="list-item__thumbnail" src="@/assets/images/bill_icon_b.png">
          </div>
        </div>
        <div class="center">
          <span class="item_h">Merchant Name</span>
          <span class="item_sub">9/12/2018</span>
        </div>
        <div class="right txt_r txt_wrap">
          <span class="item_h">- 300.00009463</span>
          <span class="item_sub">ACM</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item class="list_bot"
        modifier="longdivider" 
        @click="doBillDail">
        <div class="left">
          <div class="coin">
            <img class="list-item__thumbnail" src="@/assets/images/bill_icon_b.png">
          </div>
        </div>
        <div class="center">
          <span class="item_h">Merchant Name</span>
          <span class="item_sub">9/12/2018</span>
        </div>
        <div class="right txt_r txt_wrap">
          <span class="item_h">- 300.00009463</span>
          <span class="item_sub">ACM</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item class="list_bot"
        modifier="longdivider" 
        @click="doBillDail">
        <div class="left">
          <div class="coin">
            <img class="list-item__thumbnail" src="@/assets/images/bill_icon_b.png">
          </div>
        </div>
        <div class="center">
          <span class="item_h">Merchant Name</span>
          <span class="item_sub">9/12/2018</span>
        </div>
        <div class="right txt_r txt_wrap">
          <span class="item_h">- 300.00009463</span>
          <span class="item_sub">ACM</span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item class="list_bot"
        modifier="longdivider" 
        @click="doBillDail">
        <div class="left">
          <div class="coin">
            <img class="list-item__thumbnail" src="@/assets/images/bill_icon_b.png">
          </div>
        </div>
        <div class="center">
          <span class="item_h">Merchant Name</span>
          <span class="item_sub">9/12/2018</span>
        </div>
        <div class="right txt_r txt_wrap">
          <span class="item_h">- 300.00009463</span>
          <span class="item_sub">ACM</span>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>

</template>

<script>
export default {
  methods: {
    doBillDail() {
      this.$store.commit("push", require("@/components/user/meBillDail").default);
    }
  }
};
</script>
