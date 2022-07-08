import { writable } from "svelte/store";

const store = writable([
  {
    id: 1,
    name: 'test',
    description: 'test description',
  },
]);

export default store;