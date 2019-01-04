<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <v-ons-back-button></v-ons-back-button>
      <div class="center">Merchant Detail</div>
    </v-ons-toolbar>
    
    <v-ons-row>
      <v-ons-col class="pix_content">
        <v-ons-card class="pix_item">
            <div class="pix_pic"><img src="@/assets/images/merch_img2.png" alt=""></div>
            <div class="merch_name clearfix">
                <span class="mhname">iHerb(南山店)</span>
                <span class="icon_img f_r"><img src="@/assets/images/merch_icon_star.png" alt=""></span>
            </div>
            <v-ons-list class="pix_infor list_tb_none">
                <v-ons-list-item modifier="longdivider" class="list_bot list_icon">
                    <div class="left wpicon">
                        <i class="icon_img icon_pos"><img src="@/assets/images/svg_time.png" alt=""></i>
                    </div>
                    <div class="center">
                        <span>Monday - Sunday 9AM - 6Pm</span>
                    </div>
                </v-ons-list-item>
                <v-ons-list-item modifier="longdivider" class="list_bot list_icon">
                    <div class="left wpicon">
                        <i class="icon_img icon_pos"><img src="@/assets/images/svg_post.png" alt=""></i>
                    </div>
                    <div class="center">
                        <span>3,Jalan PJS 11/23,Bandar Sunway,3700 Subang Jaya,Swlangor</span>
                    </div>
                </v-ons-list-item>
                <v-ons-list-item modifier="longdivider" class="list_bot list_icon">
                    <div class="left wpicon">
                        <i class="icon_img icon_pos"><img src="@/assets/images/merch_icon_phone.png" alt=""></i>
                    </div>
                    <div class="center">
                        <span>0771-45842878</span>
                    </div>
                </v-ons-list-item>
            </v-ons-list>
        </v-ons-card>
        <div class="inf_map">地图</div>
        <section style="margin: 15px">
            <v-ons-button 
                modifier="large" 
                style="background: #005DC0;"
                @click="actionSheetVisible = true">
                Get Direction
            </v-ons-button>
        </section>
        
        <v-ons-action-sheet class="pic_select"
            :visible.sync="actionSheetVisible"
            cancelable
            >
            <v-ons-action-sheet-button style="text-align: center;">高德地图</v-ons-action-sheet-button>
            <v-ons-action-sheet-button style="text-align: center;">百度地图</v-ons-action-sheet-button>
            <v-ons-action-sheet-button style="text-align: center;">谷歌地图</v-ons-action-sheet-button>
        </v-ons-action-sheet>

      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>
<script>
export default {
  data () {
    return {
      actionSheetVisible: false
    };
  }
}
</script>
<style lang="less" scoped src="@/static/less/merchant.less"></style>
<style lang="less" scoped src="@/static/less/me.less"></style>
<style>
.merch_name{
    padding: 20px 15px 15px;
    border-bottom: 1px solid #eee;
}
.merch_name .mhname{
    font-size: 20px;
}
.merch_name .f_r{
    width: 20px;
    height: 20px;
    margin-top: 2px;
}
.merch_name .f_r img{
    display: block;
    width: 20px;
    height: 20px;
}
</style>
