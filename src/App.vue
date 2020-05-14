<template>
  <v-app>
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
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-avatar size="36">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      <span>imengc</span>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
import BasicAppHeader from './components/basic/BasicAppHeader'
import BasicAppNav from './components/basic/BasicAppNav'
export default {
  name: "App",
  components: {
    BasicAppHeader,
    BasicAppNav
  },
  data: () => ({
    clipped: true,
    drawer: true,
    fixed: false,
    items: [
      {
        icon: "mdi-apps",
        title: "首页",
        to: "/"
      },
      {
        icon: "mdi-chart-bubble",
        title: "发布",
        to: "/write"
      },
      {
        icon: "mdi-apps",
        title: "修改",
        to: "/"
      },
      {
        icon: "mdi-apps",
        title: "删除",
        to: "/"
      },
    ],
    miniVariant: false,
    title: "iMnegc.cn"
  }),
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less">
html{ 
  overflow-y: auto !important; 
}
.page-fixed{
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100%;
  background-color: #fff;
  .user-container{
    margin-top: -10%;
    max-width: 420px;
    min-width: 300px;
    min-height: 300px;
    box-shadow: 0 2px 5px 2px #aaa;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 3px;
  }
}
</style>