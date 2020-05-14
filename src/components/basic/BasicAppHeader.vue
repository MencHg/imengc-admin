<template>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
</template>
<script>
export default {
  name: "app-header",
  data: () => ({
    clipped:true,
    title:"iMengc.js",
    drawer:true,
    miniVariant:true,
  })
};
</script>
<style lang="less" scoped>
  
</style>