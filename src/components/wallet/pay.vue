<template>
  <v-ons-page>
    <v-ons-toolbar>
      <v-ons-back-button>返回</v-ons-back-button>
      <div class="center">付款</div>
    </v-ons-toolbar>
    <v-ons-card style="padding: 4px">
      <v-ons-row class="row">
        <v-ons-col class="col">支付Id</v-ons-col>
        <v-ons-input v-model="trade.trade_id"
                     class="input" />
      </v-ons-row>
      <v-ons-row class="row">
        <v-ons-col class="col">收款人</v-ons-col>
        <v-ons-input v-model="trade.seller_id"
                     class="input" />
      </v-ons-row>
      <v-ons-row class="row">
        <v-ons-col class="col">付款货币</v-ons-col>
        <v-ons-input v-model="trade.trade_coin"
                     class="input" />
      </v-ons-row>
      <v-ons-row class="row">
        <v-ons-col class="col">付款金额</v-ons-col>
        <v-ons-input v-model="trade.trade_amount"
                     class="input" />
      </v-ons-row>
      <v-ons-row class="row">
        <v-ons-button modifier="large"
                      class="loginbtn"
                      @click="doPay">确认支付</v-ons-button>
      </v-ons-row>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
export default {
  props: {
    trade: {
      trade_id: "",
      seller_id: 0,
      trade_coin: 0,
      trade_amount: 0
    }
  },
  methods: {
    async doPay () {
      let c = await this.$ons.notification.prompt("请输入支付密码");
      if (c) {
        this.$http.get(`/v1/trade/pay/${this.trade.trade_id}`).then(res => {
          this.$ons.notification.alert(res.data.message);
          if (res.errcode == 0) {
            //this.$store.commit("pop");
            this.$store.commit("replace", require("./pixAssets").default);
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.input {
  width: 80%;
}
</style>

