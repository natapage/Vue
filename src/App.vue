<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="showDialog" style="margin: 15px">
      Создать пост</my-button
    >
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"> </post-form>
    </my-dialog>
    <post-list v-bind:posts="posts" @remove="removePost"></post-list>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      likes: 0,
      dislikes: 0,
      posts: [
        {
          id: 1,
          title: "описание1",
          body: "Java Sctript это язык программирования1",
        },
        {
          id: 2,
          title: "описание2",
          body: "Java Sctript это язык программирования2",
        },
        {
          id: 3,
          title: "описание3",
          body: "Java Sctript это язык программирования3",
        },
        {
          id: 4,
          title: "описание4",
          body: "Java Sctript это язык программирования4",
        },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
