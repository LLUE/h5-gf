<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <v-ons-back-button></v-ons-back-button>
      <div class="center">Payment Details</div>
    </v-ons-toolbar>
    
    <div class="content"> 
        <v-ons-list class="list_tb_none" style="margin-top:15px;">
            <v-ons-list-item>
                <div class="center list_bot">
                    <span class="font_16">Payee</span>
                </div>
                <div class="right mid_bot3">
                    <span class="lineh_16">Merchant Name</span>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center list_bot">
                    <span class="font_16">Amount</span>
                </div>
                <div class="right mid_bot3">
                    <span class="lineh_16">$10.00</span>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center list_bot">
                    <span class="font_16">Item</span>
                </div>
                <div class="right mid_bot3">
                    <span class="lineh_16">ACM</span>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center list_bot">
                    <span class="font_16">Crypto</span>
                </div>
                <div class="right mid_bot3">
                    <span class="lineh_16 color_f60">10.00002222 ACM</span>
                </div>
            </v-ons-list-item>
        </v-ons-list>
        <section class="btnBot">
          <v-ons-button class="btnNal" 
            modifier="large"
            @click="dialogVisible = true">
            OK
          </v-ons-button>
        </section>
        <v-ons-action-sheet
          class="dig-tool"
          :visible.sync="dialogVisible">
          <v-ons-page
            class="dig-page">
            <v-ons-toolbar class="dig-toolbar">
              <div class="left" @click="backHandle"><i class="icon_del"></i></div>
              <div class="center">请输入密码</div>
            </v-ons-toolbar>
            <div class="background bg-tool"></div>
            <div class="content pay-tool">
              <div class="pay-tool-content">
                <div class="pay-tool-inputs">
                  <div class="item" :key="a"  v-for="(i,a) in items">
                    <span class="icon_dot" v-if="password[i]"></span>
                  </div>
                </div>
              </div>
              <div class="pay-tool-keyboard">
                <ul>
                  <li @click="keyUpHandle($event)" :key="i"  v-for="(val,i) in keys">
                    {{ val }}
                  </li>
                  <li class="del" @click="delHandle"><span class="icon-del"> &lt; </span></li>
                </ul>
              </div>
            </div>
          </v-ons-page>
        </v-ons-action-sheet>
    </div>
  </v-ons-page>
</template>

<script>
const keys = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0]
export default {
  data () {
    return {
      dialogVisible: false,
      items: [0, 1, 2, 3, 4, 5],
      keys: keys(),
      password: []
    }
  },
  methods: {
    backHandle () {
      this.clearPasswordHandle() 
      this.dialogVisible = false
    },
    keyUpHandle (e) {
      let text = e.currentTarget.innerText
      let len = this.password.length
      if (!text || len >= 6) return false
      this.password.push(text)
      this.ajaxData()
    },
    delHandle () {
      if (this.password.length <= 0) return false
      this.password.pop()
    },
    ajaxData () {
      if (this.password.length >= 6) {
        console.log(parseInt(this.password.join(' ').replace(/\s/g, '')))
        this.doPaymentRes ()
      }
      return false
    },
    clearPasswordHandle: function () {
      this.password = []
    },
    doPaymentRes () {
      this.$store.commit("push", require("./paymentRes").default);
    }
  }
}

</script>

<style lang="less" scoped src="@/static/less/paymentDet.less"></style>
