import { reactive, computed, toRefs } from "vue";

export default () => {
  const event = reactive({
    capacity: 3,
    attending: ["Tim", "Bob", "Joe"],
    spacesLeft: computed(() => {
      return event.capacity - event.attending.length;
    }),
  });
  const increaseCapacity = () => (event.capacity += 1);
  return { ...toRefs(event), increaseCapacity };
};
