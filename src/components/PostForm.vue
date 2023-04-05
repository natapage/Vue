<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input v-model="post.title" type="text" placeholder="название" />
    <my-input
      v-bind:modelValue="post.body"
      @update:modelValue="
        (value) => {
          post.body = value;
        }
      "
      type="text"
      placeholder="описание"
    ></my-input>
    <!--
      <my-input
      v-model="post.body"
      type="text"
      placeholder="описание"
    />
    -->
    <my-button
      class="btn"
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Создать</my-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
h4 {
  margin-top: 30px;
}

.app {
  padding: 20px;
}
</style>
