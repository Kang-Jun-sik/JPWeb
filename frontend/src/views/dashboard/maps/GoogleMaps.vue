<template>
  <v-container
      id="google-maps"
      fluid
      tag="section"
  >
    <v-row>
      <v-col cols="12">
        <base-material-card
            color="success"
            title="실내코트(더샷체육관)"
            class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <v-sheet>
              <progressCircle v-if="showLoading" :showLoading="showLoading"></progressCircle>
              <iframe v-else
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.1402355417713!2d127.18207171506492!3d37.62238897978748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb6f182927691%3A0x58dea88e35f761a!2z6rK96riw64-EIOuCqOyWkeyjvOyLnCDqsr3stpjroZw2OTHrsojquLggMTM!5e0!3m2!1sko!2skr!4v1639962734377!5m2!1sko!2skr"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                  @load="iframeLoaded"
              />
            </v-sheet>
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col
          cols="12"
          md="6"
      >
        <base-material-card
            color="success"
            title="야외코트1(뚝섬 장애인 농구장)"
            class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <v-sheet>
              <progressCircle v-if="showLoading" :showLoading="showLoading"></progressCircle>
              <iframe v-else
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.1151757302046!2d127.07351592595764!3d37.52897275946978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4fafe3bde4d%3A0x6f04dfe2fc0914b1!2z7ISc7Jq47Yq567OE7IucIOq0keynhOq1rCDsnpDslpHrj5kgNzA0LTM!5e0!3m2!1sko!2skr!4v1639963718321!5m2!1sko!2skr"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                  @load="iframeLoaded"
              />
            </v-sheet>
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col
          cols="12"
          md="6"
      >
        <base-material-card
            color="success"
            title="야외코트2(뚝섬 테니스코트 농구장)"
            class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <v-sheet>
              <progressCircle v-if="showLoading" :showLoading="showLoading"></progressCircle>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.153195654847!2d127.07319061506195!3d37.527885879805254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4fbb1053613%3A0x5ff1d535658f062e!2z7ISc7Jq47Yq567OE7IucIOq0keynhOq1rCDsnpDslpHrj5kgNDEwLTE!5e0!3m2!1sko!2skr!4v1639963949032!5m2!1sko!2skr"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                  @load="iframeLoaded"
              />
            </v-sheet>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.v-application .font-weight-light {
  font-weight: 600 !important;
}
</style>

<script>

import progressCircle from '@/progress/progressCircle.vue';

export default {
  components: {
    progressCircle
  },
  data() {
    return {
      showLoading: true
    }
  },
  methods: {
    iframeLoaded() {
      this.showLoading = false;
    }
  },
}

</script>
