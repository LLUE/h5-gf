<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <v-ons-back-button></v-ons-back-button>
      <div class="center">Currency Unit</div>
    </v-ons-toolbar>
    
    <div class="content">
        <v-ons-list class="list_tb_none" style="margin-top:15px;">
            <v-ons-list-item v-for="(vegetable, $index) in vegetables" :key="vegetable" tappable>
                <label class="right mid_bot2">
                    <v-ons-radio
                        :input-id="'radio-' + $index"
                        :value="vegetable"
                        v-model=" selectedVegetable"
                    >
                    </v-ons-radio>
                </label>
                <label :for="'radio-' + $index" class="center list_bot">
                {{ vegetable }}
                </label>
            </v-ons-list-item>
        </v-ons-list>
    </div>
  </v-ons-page>
</template>
<script>
export default {
  data() {
    return {
      vegetables: ['USD', 'PHP','CNY','AMD','BTH'],
      selectedVegetable: 'USD'
    };
  }
}
</script>
<style lang="less" scoped src="@/static/less/me.less"></style>
