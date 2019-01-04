<template>
  <v-ons-page>
    <v-ons-toolbar>
      <v-ons-back-button>返回</v-ons-back-button>
      <div class="center">交易明细</div>
    </v-ons-toolbar>
    <div>
      <v-ons-card v-for="(asset, j) in bills"
                  :key="j">
        <div v-if="asset.seller_id == $store.state.uid">
          <v-ons-list>
            <v-ons-row>
              <v-ons-col style="text-align:center"> 收入 </v-ons-col>
            </v-ons-row>
            <v-ons-list-item>{{asset.trade_id}}</v-ons-list-item>
            <v-ons-list-item>付款人: {{asset.seller_id}}</v-ons-list-item>
            <v-ons-list-item>交易金额: {{asset.trade_amount}}</v-ons-list-item>
            <v-ons-list-item>交易时间: {{new Date(asset.pay_time).toLocaleString()}}</v-ons-list-item>
          </v-ons-list>
        </div>
        <div v-else>
          <v-ons-list>
            <v-ons-row>
              <v-ons-col style="text-align:center"> 支出 </v-ons-col>
            </v-ons-row>
            <v-ons-list-item>{{asset.trade_id}}</v-ons-list-item>
            <v-ons-list-item>收款人: {{asset.seller_id}}</v-ons-list-item>
            <v-ons-list-item>交易金额: {{asset.trade_amount}}</v-ons-list-item>
            <v-ons-list-item>交易时间: {{new Date(asset.pay_time).toLocaleString()}}</v-ons-list-item>
          </v-ons-list>
        </div>
      </v-ons-card>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  props: {
    coinId: 0
  },
  data () {
    return {
      bills: []
    };
  },
  created () {
    this.$http.get(`/v1/bills/${this.coinId}`).then(res => {
      this.bills = res.data;
      console.log(JSON.stringify(this.bills));
    });
  }
};
</script>

