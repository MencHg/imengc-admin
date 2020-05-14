<template>
  <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
  name: "app-nav",
  data: () => ({
    clipped:true,
    drawer:true,
    miniVariant:true,
    items: [
      {
        icon: "mdi-apps",
        title: "home",
        to: "/"
      },
      {
        icon: "mdi-chart-bubble",
        title: "about",
        to: "/about"
      }
    ],
  }),
};
</script>
<style lang="less" scoped>
  
</style>