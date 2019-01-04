<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <v-ons-back-button></v-ons-back-button>
      <div class="center">Profile</div>
    </v-ons-toolbar>
    
    <div class="content">
        <v-ons-list class="list_tb_none" style="margin-top:15px;" 
            @click="actionSheetVisible = true">
            <v-ons-list-item tappable >
                <div class="center mid_bot">
                    <span class="lineh_16">Profile Photo</span>
                </div>
                <div class="right mid_bot2">
                    <div class="pro_pic"><img width="30" src="@/assets/logo1.png" alt=""></div>
                </div>
            </v-ons-list-item>
        </v-ons-list>
        <v-ons-action-sheet class="pic_select"
            :visible.sync="actionSheetVisible"
            cancelable
            >
            <v-ons-action-sheet-button>选择图片</v-ons-action-sheet-button>
            <v-ons-action-sheet-button>手机拍照</v-ons-action-sheet-button>
        </v-ons-action-sheet>

        <v-ons-list class="list_tb_none" style="margin-top:15px;">
            <v-ons-list-item 
                modifier="chevron" 
                @click="alertDialog1Visible = true"
                tappable>
                <div class="center mid_bot">
                    <span class="lineh_16">Full Name</span>
                </div>
                <div class="right mid_bot2">
                    <span class="font_16">Join</span>
                </div>
            </v-ons-list-item>
            <v-ons-alert-dialog modifier="rowfooter"
                :visible.sync="alertDialog1Visible">
                <span slot="title">What is your name?</span>
                <p class="font_13">设置昵称后，朋友找您更方便</p>
                <input type="text" class="text-input--underbar">
                <template slot="footer">
                    <v-ons-alert-dialog-button @click="alertDialog1Visible = false">Cancel</v-ons-alert-dialog-button>
                    <v-ons-alert-dialog-button @click="alertDialog1Visible = false">Ok</v-ons-alert-dialog-button>
                </template>
            </v-ons-alert-dialog>

            <v-ons-list-item modifier="chevron" tappable>
                <div class="center mid_bot">
                    <span class="lineh_16">Email</span>
                </div>
                <div class="right mid_bot2">
                    <span class="font_16">join@mail.com</span>
                </div>
            </v-ons-list-item>
        </v-ons-list>

        <v-ons-list class="list_tb_none" style="margin-top:15px;">
            <v-ons-list-item modifier="chevron" tappable>
                <div class="center mid_bot">
                    <span class="lineh_16">Trade Password</span>
                </div>
            </v-ons-list-item>
        </v-ons-list>
    </div>
  </v-ons-page>
</template>
<script>
export default {
  data () {
    return {
      actionSheetVisible: false,
      alertDialog1Visible: false
    };
  }
}
</script>
<style lang="less" scoped src="@/static/less/me.less"></style>
