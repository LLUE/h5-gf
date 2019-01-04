<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button></v-ons-back-button>
      </div>
      <div class="center">确认支付密码</div>
    </v-ons-toolbar>
    
    <div class="content">
      <v-ons-card class="card_sig" style="padding: 30px 25px;">
        <p class="font_16b" style="text-align:center;margin: 0 0 10px;">
          <span>请确认支付密码</span>
        </p>
        <div class="set-tool-content">
          <div class="pay-tool-inputs">
            <div class="item" :key="a"  v-for="(i,a) in items">
              <span class="icon_dot" v-if="password[i]"></span>
            </div>
          </div>
        </div>
      </v-ons-card>
      <v-ons-row>
        <v-ons-col>
          <section class="card_sig">
            <v-ons-button modifier="large"
              class="btn_ccc"
              @click="doLogin">OK</v-ons-button>
          </section>
        </v-ons-col>
      </v-ons-row>
        <div class="set-tool-keyboard">
          <ul>
            <li @click="keyUpHandle($event)" :key="i"  v-for="(val,i) in keys">
              {{ val }}
            </li>
            <li class="del" @click="delHandle"><span class="icon-del"> &lt; </span></li>
          </ul>
        </div>
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
      }
      return false
    },
    clearPasswordHandle: function () {
      this.password = []
    },
    doLogin () {
      this.$store.commit("push", require("@/components/pixMain").default);
    },
  }
}
</script>

<style lang="less" scoped>
.btn_ccc{
  background-color: #ccc;
}
</style>

<style lang="less" scoped src="@/static/less/login.less"></style>
<style lang="less" scoped src="@/static/less/setPassword.less"></style>

