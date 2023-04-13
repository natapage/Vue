<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
      <my-button @click="showModal">Удалить</my-button>
    </div>
  </div>

  <my-dialog v-model:show="dialogVisible">
    <div class="modal">
      <div>Вы уверены, что хотите удалить данный пост?</div>
      <my-button class="btn" @click="$emit('remove', post)">Да</my-button>
      <my-button class="btn" @click="dialogVisible = false">Нет</my-button>
    </div>
  </my-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showModal() {
      this.dialogVisible = true;
    },
  },
  emits: ['remove'],
};
</script>

<style>
.btn {
  margin: 15px;
}
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>
