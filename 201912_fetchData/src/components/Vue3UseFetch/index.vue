<script>
import useFetch, { type State } from './useFetch';


export default {
  setup() {
    const state:State = useFetch();
    return { state };
  },
};
</script>

<template lang="pug">
section
  h2 Vue3UseFetch.vue
  p {{state.isLoading}}
  p {{state.userData}}
</template>
