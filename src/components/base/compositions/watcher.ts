import { ref, watch } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function watcher(props: any) {
  const innerValue = ref();
  console.log(props);
  watch(
    () => props.value,
    (newValue) => {
      innerValue.value = newValue;
      console.log(newValue);
    }
  );
  return {
    innerValue,
  };
}
