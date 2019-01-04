<template>
    <v-ons-page>
        <div class="background"></div>
        <v-ons-toolbar>
        <v-ons-back-button></v-ons-back-button>
        <div class="center">Favorite</div>
        </v-ons-toolbar>

        <v-ons-row>
            <v-ons-col>
                <div class="pix_content">
                    <div class="pix_listWp pix_card">
                        <v-ons-card class="pix_item">
                            <div class="pix_pic">
                                <div class="pic"><img src="@/assets/images/merch_img.png" alt=""></div>
                                <p class="pix_til"><span>COMCU旗舰店</span></p>
                            </div>
                            <v-ons-list class="pix_infor list_tb_none">
                                <v-ons-list-item modifier="nodivider">
                                    <div class="left">
                                        <i class="icon_img icon_pos"><img src="@/assets/images/svg_time.png" alt=""></i>
                                    </div>
                                    <div class="center">
                                        <span>Monday - Sunday 9AM - 6Pm</span>
                                    </div>
                                </v-ons-list-item>
                                <v-ons-list-item modifier="longdivider" class="list_bot">
                                    <div class="left">
                                        <i class="icon_img icon_pos"><img src="@/assets/images/svg_post.png" alt=""></i>
                                    </div>
                                    <div class="center">
                                        <span>3,Jalan PJS 11/23,Bandar Sunway,3700 Subang Jaya,Swlangor</span>
                                    </div>
                                </v-ons-list-item>
                                <v-ons-list-item modifier="nodivider">
                                    <div class="left">
                                        <i class="icon_img icon_20"><img src="@/assets/images/svg_fab_off.png" alt=""></i>
                                        <span class="font_16b marg_l10">3555</span>
                                    </div>
                                    <div class="right">
                                        <i class="icon_img icon_20"><img src="@/assets/images/merch_icon_star.png" alt=""></i>
                                    </div>
                                </v-ons-list-item>
                            </v-ons-list>
                        </v-ons-card>
                        <v-ons-card class="pix_item">
                            <div class="pix_pic">
                                <div class="pic"><img src="@/assets/images/merch_img.png" alt=""></div>
                                <p class="pix_til"><span>COMCU旗舰店</span></p>
                            </div>
                            <v-ons-list class="pix_infor list_tb_none">
                                <v-ons-list-item modifier="nodivider">
                                    <div class="left">
                                        <i class="icon_img icon_pos"><img src="@/assets/images/svg_time.png" alt=""></i>
                                    </div>
                                    <div class="center">
                                        <span>Monday - Sunday 9AM - 6Pm</span>
                                    </div>
                                </v-ons-list-item>
                                <v-ons-list-item modifier="longdivider" class="list_bot">
                                    <div class="left">
                                        <i class="icon_img icon_pos"><img src="@/assets/images/svg_post.png" alt=""></i>
                                    </div>
                                    <div class="center">
                                        <span>3,Jalan PJS 11/23,Bandar Sunway,3700 Subang Jaya,Swlangor</span>
                                    </div>
                                </v-ons-list-item>
                                <v-ons-list-item modifier="nodivider">
                                    <div class="left">
                                        <i class="icon_img icon_20"><img src="@/assets/images/svg_fab_on.png" alt=""></i>
                                        <span class="font_16b marg_l10">3555</span>
                                    </div>
                                    <div class="right">
                                        <i class="icon_img icon_20"><img src="@/assets/images/merch_icon_star.png" alt=""></i>
                                    </div>
                                </v-ons-list-item>
                            </v-ons-list>
                        </v-ons-card>
                    </div>
                </div>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>

<style lang="less" scoped src="@/static/less/merchantCard.less"></style>

