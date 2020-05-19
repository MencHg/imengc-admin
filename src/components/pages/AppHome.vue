<template>
  <div class="app-home">
    <v-card-title>文章列表</v-card-title>
    <v-timeline dense>
      <v-timeline-item v-for="(item, i) in list" :key="i" :color="'#'+Math.random().toString(16).slice(-6)" small>
        <v-card class="py-4">
          <router-link :to="/detail/ + item._id">
            <v-card-title :class="`headline font-weight-light mb-4 ${'pink'}--text`">{{item.title}}</v-card-title>
            <v-card-text>{{item.book}}</v-card-text>
          </router-link>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
export default {
  name: "app-home",
  components: {},
  data: () => ({
    list: []
  }),
  watch: {},
  filters: {},
  created() {
    this.getUserinfo();
    this.getDataList();
   
  },
  methods: {
    getUserinfo() {
      this.axios
        .get("/blog/user/userinfo")
        .then(result => {
          this.$store.commit('setAuth', result.data.info)
          console.log(this.$store.getters.auth);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getDataList() {
      this.axios
        .get("/blog/book/list")
        .then(result => {
          this.list = result.data.bookList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.app-home {
  margin: 10px auto;
  max-width: 1100px;
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>