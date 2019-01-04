<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <v-ons-back-button></v-ons-back-button>
      <div class="center">Transaction Record</div>
    </v-ons-toolbar>

    <div class="content">
      <v-ons-card class="card_item">
        <div class="card_top">
          <p>
            <i class="icon_img icon_merch"><img src="@/assets/images/icon_merch.png" alt=""></i>
            <span class="lineh_16">Merchant Name</span>
          </p>
          <p>
            <span class="font_f60">-456.00000000</span>
            <span class="font_min_f60">ACM</span>
          </p>
        </div>
        <v-ons-list class="list_tb_none" style="margin-top:10px;">
          <v-ons-list-item modifier="nodivider">
            <div class="left" style="width:150px;">
              <span class="font_16g">Current State</span>
            </div>
            <div class="center">
              <span class="font_16b">Payment Success</span>
            </div>
          </v-ons-list-item>
          <v-ons-list-item modifier="nodivider">
            <div class="left" style="width:150px;">
              <span class="font_16g">Order Number</span>
            </div>
            <div class="center">
              <span class="font_16b">40005456496987e</span>
            </div>
          </v-ons-list-item>
          <v-ons-list-item modifier="nodivider">
            <div class="left" style="width:150px;">
              <span class="font_16g">Transaction Time</span>
            </div>
            <div class="center">
              <span class="font_16b">28/11/2018 15:35:25</span>
            </div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-card>
    </div>
  </v-ons-page>

</template>
<style>
.icon_merch{
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 10px;
}
.icon_merch img{
  display: block;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
</style>

