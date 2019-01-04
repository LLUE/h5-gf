<template>
  <v-ons-page>
    <v-ons-toolbar>
      <v-ons-back-button>返回</v-ons-back-button>
      <div class="center">收钱</div>
    </v-ons-toolbar>
    <v-ons-card style="padding: 4px" v-if="!showQR">
      <v-ons-row class="row">
        <v-ons-col class="col">货币</v-ons-col>
        <v-ons-input v-model="model.trade_coin" class="input" placeholder="用户名" />
      </v-ons-row>
      <v-ons-row class="row">
        <v-ons-col class="col">数量</v-ons-col>
        <v-ons-input v-model="model.trade_amount" class="input" placeholder="密码" />
      </v-ons-row>
      <v-ons-row class="row">
        <v-ons-button modifier="large" class="loginbtn" @click="doCreate">确定</v-ons-button>
      </v-ons-row>
    </v-ons-card>
    <div v-show="showQR">
      <v-ons-card class="imgSrc">
        <img id="imgSrc" />
      </v-ons-card>
      <span>
        {{payStatus}}
      </span>
    </div>

  </v-ons-page>
</template>

<script>
import QRCode from "qrcode";

export default {
  data() {
    return {
      showQR: false,
      qrdata: null,
      payStatus: "等待支付中...",
      model: {
        trade_coin: "1",
        trade_amount: "10"
      },
      checkId: -1
    };
  },
  methods: {
    doCreate() {
      let params = {
        trade_coin: this.model.trade_coin,
        trade_amount: this.model.trade_amount
      };
      this.$http
        .post("/v1/trade/create", params)
        .then(res => {
          this.qrdata = res.data;
          this.showQR = true;
          QRCode.toDataURL(
            this.qrdata.qr_code,
            { errorCorrectionLevel: "H" },
            (err, url) => {
              document.getElementById("imgSrc").src = url;

              let q = `/v1/trade/query/${this.qrdata.trade_id}`;
              let check = () => {
                this.$http
                  .get(q)
                  .then(res => {
                    if (res.data.status == 0) {
                      this.checkId = setTimeout(check, 5000);
                    } else {
                      //this.$store.commit("pop");
                      clearTimeout(this.checkId);
                      this.$ons.notification.alert('收款成功');
                      this.$store.commit("replace", require("./pixAssets").default);
                    }
                  })
                  .catch(err => {
                    alert("x " + err.message);
                  });
              };
              this.checkId = setTimeout(check, 5000);
            }
          );
        })
        .catch(err => {
          alert("xxxx " + err.message);
        });
    }
  },
  destroyed() {
    clearTimeout(this.checkId);
  }
};
</script>

<style lang="less" scoped>
.imgSrc {
  text-align: center;
  margin-top: 40px;
  border-radius: 4px;
}
.bg {
  background-image: "@/images/logo_bg1.png";
}
.input {
  width: 80%;
  //margin: 2px 0;
  //border: 1px solid #f00;
}
.row {
  //border: 1px solid #f00;
  margin: 4px 0;
}
.col {
  text-align: center;
  //border: 1px solid #f00;
}
.loginbtn {
  border-radius: 7px;
  margin-top: 20px;
}
</style>


