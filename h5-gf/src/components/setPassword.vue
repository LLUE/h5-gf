<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button></v-ons-back-button>
      </div>
      <div class="center">设置支付密码</div>
    </v-ons-toolbar>
    
    <div class="content">
      <v-ons-card class="card_sig" style="padding: 30px 25px;">
        <p class="font_16b" style="text-align:center;margin: 0 0 10px;">
          <span>请设置6位支付密码</span>
        </p>
        <div class="set-tool-content">
          <div class="pay-tool-inputs">
            <div class="item" :key="a"  v-for="(i,a) in items">
              <span class="icon_dot" v-if="password[i]"></span>
            </div>
          </div>
        </div>
        <p class="font_16" style="margin: 0 0">
          <span>请不要设置重复数字或相连数字的密码</span>
        </p>
      </v-ons-card>
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
        this.doConfirm()
      }
      return false
    },
    clearPasswordHandle: function () {
      this.password = []
    },
    doConfirm () {
      this.$store.commit("push", require("@/components/confirm").default);
    }
  }
}
</script>


<style lang="less" scoped src="@/static/less/login.less"></style>
<style lang="less" scoped src="@/static/less/setPassword.less"></style>

