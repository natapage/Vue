<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input v-model="post.title" type="text" placeholder="название" focused />
    <my-input v-model="post.body" type="text" placeholder="описание" />

    <my-button
      class="btn"
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Создать</my-button
    >
    <my-dialog v-model:show="dialogVisible">
      <div class="modal">
        <div>Все поля должны быть заполнены</div>
        <my-button class="btn" @click="dialogVisible = false">Ok</my-button>
      </div>
    </my-dialog>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
      dialogVisible: false,
    };
  },
  methods: {
    createPost() {
      if (!(this.post.title && this.post.body)) {
        this.showModal();
        return;
      }
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
    showModal() {
      this.dialogVisible = true;
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
