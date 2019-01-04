<template>
  <div>
    <v-ons-navigator id="app"
                     :page-stack="stack">

    </v-ons-navigator>

    <div id="scan">
      <div class="zhs_head"
           style="background-color:rgba(0,0,0,0.4);">
        <div class="zhs_txt">
          Scan QR Code
        </div>
        <div id="scan_cancel"
             class="zhs_left"
             style="text-indent: 10px">
          Cancel
        </div>
        <div id="scan_scan"
             class="zhs_right"
             style="text-indent: 10px">
          Scan
        </div>
      </div>
      <img src="./assets/scan.png"
           style="position: absolute;width: 200px;height: 200px;top: 50%;left: 50%;margin-top: -120px;margin-left: -100px" />
      <img src="./assets/ding.png"
           id="ding"
           style="position: absolute;width: 50px;top: 50%;margin-top:120px;left: 50%;
                 margin-left: -25px;" />
      <img src="./assets/ding_selected.png"
           id="ding_selected"
           style="display:none;position: absolute;width: 50px;
                 top: 50%;margin-top:120px;left: 50%;margin-left: -25px;" />
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit("push", require("@/components/pixWelcome").default);
    // if (!localStorage.token) {
    //   this.$store.commit("push", require("@/components/pixWelcome").default);
    // } else {
    //   this.$store.commit("push", require("@/components/pixMain").default);
    // }
  },
  computed: {
    stack () {
      return this.$store.state.pageStack;
    }
  }
};
</script>

<style lang='less'>
.zhs_head {
  height: 60px;
  width: 100%;
  background: #1a99d5;
  position: relative;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 14px;

  .zhs_head {
    width: 100%;
    height: 100%;
    display: none;
  }
  .center {
    font-size: 14px;
  }
  .zhs_txt {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
  }
  .zhs_left {
    position: relative;
    position: absolute;
    width: 20%;
    height: 100%;
    top: 0;
    text-align: left;
    img {
      position: absolute;
      top: 50%;
      margin-top: -7.5px;
      width: 9px;
      margin-left: 20px;
    }
  }
  .zhs_right {
    position: absolute;
    width: 20%;
    height: 100%;
    top: 0;
    right: 0;
    text-align: center;
  }
}
#scan {
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
}
</style>
