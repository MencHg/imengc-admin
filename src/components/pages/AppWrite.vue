<template>
  <div class="app-write">
    <v-card-title>发布文章</v-card-title>
    <v-card-text>
      <mavon-editor id="md-editor" :ishljs="true" v-model="md" />
    </v-card-text>
    <v-card-actions>
      <v-btn small @click="sbumitUpload">确认发布</v-btn>
    </v-card-actions>
  </div>
</template>
<script>
export default {
  name: "app-write",
  data: () => ({
    md: ""
  }),
  methods: {
    sbumitUpload() {
      if (this.md !== "" && this.md.length > 100) {
        this.axios
          .post("/blog/book/add", { book: this.md })
          .then(result => {
            if(result.data.code === 200)
            this.$router.push('/')
          })
          .catch(err => {
            console.log(err);
          });
      }else{
        alert("提交的内容长度不符合规范!~");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.app-write {
  margin: 10px;
  #md-editor {
    min-height: 620px;
  }
  .v-note-wrapper {
    z-index: 0;
  }
}
</style>