import { reactive, toRefs } from "vue";

export default fn => {
  const reactivity = reactive({
    results: null,
    error: null,
    loading: false,
  });
  const createPromise = async (...args) => {
    reactivity.results = null;
    reactivity.error = null;
    reactivity.loading = true;

    try {
      reactivity.results = await fn(...args);
    } catch (error) {
      reactivity.error = error;
    } finally {
      reactivity.loading = false;
    }
  };
  return { ...toRefs(reactivity), createPromise };
};
