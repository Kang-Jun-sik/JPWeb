<template>
  <v-app>
    <dashboard-core-app-bar />
    <dashboard-core-drawer />
    <dashboard-core-view />
    <dashboard-core-settings />
  </v-app>
</template>

<script>
import {TestA} from "@/api/apitest";

  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar: () => import('./components/core/AppBar'),
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      DashboardCoreSettings: () => import('./components/core/Settings'),
      DashboardCoreView: () => import('./components/core/View'),
    },

    data: () => ({
      expandOnHover: false,
    }),

    watch: {
      $route: {
        handler($route) {

        },
        immediate: true,
      }
    },

    async mounted() {
      const response = await TestA();
    }
  }
</script>
