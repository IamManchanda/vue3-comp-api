import { reactive, computed, toRefs } from "vue";

export default () => {
  const reactivity = reactive({
    capacity: 3,
    attending: ["Tim", "Bob", "Joe"],
    spacesLeft: computed(() => {
      return reactivity.capacity - reactivity.attending.length;
    }),
  });
  const increaseCapacity = () => (reactivity.capacity += 1);
  return { ...toRefs(reactivity), increaseCapacity };
};
