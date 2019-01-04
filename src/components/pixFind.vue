<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button></v-ons-back-button>
      </div>
      <div class="center">Find Password</div>
    </v-ons-toolbar>
    
    <div class="content">
      <v-ons-row>
        <v-ons-col>
          <section class="card_sig">
            <p class="font_16" style="text-align:center;margin: 0 0 10px;">
              <span> Enter your email and we’ll send <br> to you the link to reset the password</span>
            </p>
          </section>
        </v-ons-col>
      </v-ons-row>
      <v-ons-card class="card_sig" style="padding: 10px 25px;">
        <v-ons-list class="list_tb_none">
          <v-ons-list-item modifier="longdivider" class="list_bot">
              <label class="left"><i class="icon_img icon_sig"><img src="@/assets/images/login_icon_email.png" alt=""></i></label>
              <v-ons-input v-model="model.mail"
                          class="input"
                          placeholder="E-mail" />
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-card>
      <v-ons-row>
        <v-ons-col>
          <section class="card_sig">
            <v-ons-button modifier="large"
                          style="background:#005DC0;"
                          >Submit</v-ons-button>
          </section>
        </v-ons-col>
      </v-ons-row>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  data () {
    return {
      model: {
        mail: ""
      }
    };
  }
};
</script>

<style lang="less" scoped src="@/static/less/login.less"></style>

