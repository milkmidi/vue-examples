<script>
import Basic from '@/components/Basic/index.vue';
import { withFetch } from '@/components/withFetch';
import fetchDataScoped from '@/components/fetchDataScoped';
import Child from '@/components/Child.vue';
import Vue3UseFetch from '@/components/Vue3UseFetch/index.vue';
import MixinFetch from '@/components/MixinFetch/index.vue';

const WithFetchComponent = withFetch(Child);

export default {
  name: 'App',
  components: {
    Basic,
    WithFetchComponent,
    fetchDataScoped,
    Vue3UseFetch,
    Child,
    MixinFetch,
  },
};
</script>

<template lang="pug">
#app
  .container
    Basic
    MixinFetch
    WithFetchComponent
    fetchDataScoped(v-slot="{userData,isLoading}")
      Child(:isLoading="isLoading", :userData="userData")
    Vue3UseFetch
</template>

<style lang="scss">
section{
  border: 2px solid #bdc3c7;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
}
</style>
