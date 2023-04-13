<template>
  <input
    ref="input"
    :value="modelValue"
    @input="updateInput"
    class="input"
    type="text"
  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    focused: Boolean,
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
  // mounted() {
  //   if (this.focused) {
  //     this.$refs.input.focus(); // $refs объект, который содержит ссылки на элементы, input - имя элемента, focus - метод
  //   }
  // },
};
</script>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
