export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog(event) {
      if (event.target !== this) {
        return;
      }
      this.$emit('update:show', false);
    },
  },
  mounted() {},
};
