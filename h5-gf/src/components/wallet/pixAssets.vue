<template>
  <v-ons-page>
    <v-ons-toolbar>
      <v-ons-back-button>返回</v-ons-back-button>
      <div class="center">资产列表</div>
    </v-ons-toolbar>
    <v-ons-pull-hook :action="loadItem"
                     @changestate="state = $event.state">
      <span v-show="state === 'initial'"> Pull to refresh </span>
      <span v-show="state === 'preaction'"> Release </span>
      <span v-show="state === 'action'"> Loading... </span>
    </v-ons-pull-hook>
    <div v-if="AssetsList.length == 0">
      你还没有资产
    </div>
    <div v-else>
      <v-ons-card v-for="(asset, j) in AssetsList"
                  :key="j">
        <v-ons-row style="margin-top: 20px;">货币Id: {{asset.coin}}</v-ons-row>
        <v-ons-row style="margin-top: 20px;">货币数量: {{asset.balance}}</v-ons-row>
        <v-ons-row style="margin-top: 20px;">
          <!-- v-ons-col class="center" @click="doRecv(asset.coin)"><img src="@/assets/recieve.png" />接收</v-ons-col>
          <v-ons-col class="center" @click="doSend(asset.coin)"><img src="@/assets/send.png" />发送</v-ons-col -->
          <v-ons-col class="center"
                     @click="doBill(asset.coin)"><img src="@/assets/bill.png" />交易明细</v-ons-col>
        </v-ons-row>
      </v-ons-card>
    </div>
  </v-ons-page>

</template>

<script>
export default {
  data () {
    return {
      state: "initial",
      ass: [{}]
    };
  },
  created () {
    this.loadItem();
  },
  computed: {
    AssetsList () {
      return this.ass;
    }
  },
  methods: {
    loadItem (done) {
      this.$http.get("/v1/assets").then(res => {
        this.ass = res.data;
        if (done) {
          done();
        }
      });
    },
    doRecv (coinId) {
      coinId;
      this.$store.commit("push", require("./receive").default);
    },
    doSend (coinId) {
      this.$store.commit("push", require("./receive").default);
      coinId;
    },
    doBill (coinId) {
      //coinId;
      //this.$store.commit("push", require("./pixBills").default);
      this.$store.commit("push", {
        ...require("./pixBills").default,
        onsNavigatorProps: {
          coinId: coinId
        }
      });
    }
  }
};
</script>

<style>
.center {
  text-align: center;
}
</style>
