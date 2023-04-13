<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [], // при каждом новом рендеринге компонента будет создаваться новый экземпляр массива, что может предотвратить ошибки при изменении массива внутри компонента
    },
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped></style>
