<template>
  <v-ons-page>
    <v-ons-tabbar swipeable
                  :tabs="tabs">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          icon: 'ion-home',
          label: "Home",
          page: require("@/components/wallet/index").default,
          key: "walletPage"
        },
        {
          icon: "ion-navicon",
          label: "Me",
          page: require("@/components/user/index").default,
          key: "settingsPage"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>

.ion-wallet {
  src: url('../assets/wallet.png');
  height: 18px;
  width: 20px;
  background-size: cover;
}
.ion-profile {
  background: url('../assets/profile.png');
  height: 18px;
  width: 20px;
  background-size: cover;
}
</style>

