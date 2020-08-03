<script>
import { useStore, Store } from 'vuex';
import {
  MUTATION_INCREMENT, MUTATION_DECREMENT,
  ACTION_TEST,
  State,
} from '../../store';

export default {
  name: 'Home',
  setup() {
    const store:Store<State> = useStore();

    const increment = () => store.commit(MUTATION_INCREMENT);
    const decrement = () => store.commit(MUTATION_DECREMENT);

    const callAction = () => {
      store.dispatch(ACTION_TEST, 9527).then(() => {
        console.log('after vuex action');
      });
    };

    return {
      increment,
      decrement,
      callAction,
    };
  },
};
</script>

<template>
  <h1 class="display-1">About</h1>
  <button class="btn btn-primary" @click="increment">increment</button>
  <button class="btn btn-danger" @click="decrement">decrement</button>
  <button class="btn btn-info" @click="callAction">callAction</button>
</template>
