export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog(event) {
      this.$emit('update:show', false);
    },
  },
  mounted() {},
};
