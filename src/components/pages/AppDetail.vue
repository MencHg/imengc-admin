<template>
  <section class="app-detail">
    this is my app-detail page
  </section>
</template>
<script>
export default {
  name: "app-detail",
  components: {

  },
  data: () => ({

  }),
  watch: {

  },
  filters: {

  },
  created() {
    console.log(this.$route.params.id);
    this.getBookDetail()
  },
  methods: {
    getBookDetail(){
      this.axios.get('/blog/book/detail?id='+this.$route.params.id)
        .then((result) => {
          console.log(result)
        }).catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
<style lang="less" scoped>
  
</style>