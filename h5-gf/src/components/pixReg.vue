<template>
  <v-ons-page>
    <div class="background"></div>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button></v-ons-back-button>
      </div>
      <div class="center">Create account</div>
    </v-ons-toolbar>
    
    <div class="content">
      <v-ons-card class="card_sig">
          <v-ons-list class="list_tb_none">
            <v-ons-list-item modifier="longdivider" class="list_bot">
                <label class="left"><i class="icon_img icon_sig"><img src="@/assets/images/login_icon_name.png" alt=""></i></label>
                <v-ons-input v-model="model.name"
                            class="input"
                            placeholder="Name" />
            </v-ons-list-item>
            <v-ons-list-item modifier="longdivider" class="list_bot">
                <label class="left"><i class="icon_img icon_sig"><img src="@/assets/images/login_icon_email.png" alt=""></i></label>
                <v-ons-input v-model="model.mail"
                            class="input"
                            placeholder="E-mail" />
            </v-ons-list-item>
            <v-ons-list-item modifier="longdivider" class="list_bot">
                <label class="left"><i class="icon_img icon_sig"><img src="@/assets/images/login_icon_password.png" alt=""></i></label>
                <v-ons-input v-model="model.pass1"
                            class="input"
                            placeholder="PassWord" />
            </v-ons-list-item>
            <v-ons-list-item>
                <label class="left"><i class="icon_img icon_sig"><img src="@/assets/images/login_icon_password.png" alt=""></i></label>
                <v-ons-input v-model="model.pass2"
                            class="input"
                            placeholder="PassWord" />
            </v-ons-list-item>
          </v-ons-list>
      </v-ons-card>
      <v-ons-row>
        <v-ons-col>
          <section class="card_sig">
            <v-ons-button modifier="large"
                          style="background:#005DC0;"
                          @click="doSetpassword">Create Account</v-ons-button>
            <p class="font_13" style="text-align:center;">By creating an account you agree to the 
              <span class="font_b">Terms of use</span>
            </p>
          </section>
        </v-ons-col>
      </v-ons-row>
      <p class="post_bot">Already have an account ?</p>
    </div>
  </v-ons-page>
  
</template>

<script>
export default {
  data () {
    return {
      model: {
        name: "",
        mail: "",
        pass1: "",
        pass2: ""
      }
    };
  },
  methods: {
    doSetpassword () {
      this.$store.commit("push", require("@/components/setPassword").default);
    }
  }
};
</script>
<style lang="less" scoped src="@/static/less/login.less"></style>


