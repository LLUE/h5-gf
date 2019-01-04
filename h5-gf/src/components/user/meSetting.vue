<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <v-ons-back-button></v-ons-back-button>
      <div class="center">Setting</div>
    </v-ons-toolbar>
    
    <div class="content">
        <v-ons-list class="list_tb_none" style="margin-top:15px;">
            <v-ons-list-item 
                modifier="chevron" 
                @click="doLanguage"
                tappable>
                <div class="center mid_bot">
                    <span class="lineh_16">Language</span>
                </div>
                <div class="right mid_bot2">
                    <span class="font_16">English</span>
                </div>
            </v-ons-list-item>
            <v-ons-list-item 
                modifier="chevron" 
                @click="doCurrency"
                tappable>
                <div class="center mid_bot">
                    <span class="lineh_16">Currency Unit</span>
                </div>
                <div class="right mid_bot2">
                    <span class="font_16">USD</span>
                </div>
            </v-ons-list-item>
        </v-ons-list>
    </div>
  </v-ons-page>
</template>
<script>
export default {
  methods: {
    doLanguage () {
      this.$store.commit("push", require("@/components/user/meLanguage").default);
    },
    doSetting () {
      this.$store.commit("push", require("@/components/user/meSetting").default);
    },
    doCurrency () {
      this.$store.commit("push", require("@/components/user/meCurrency").default);
    }
  }
}
</script>
<style lang="less" scoped src="@/static/less/me.less"></style>
