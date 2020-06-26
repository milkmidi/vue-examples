<script>
import CompositionApiUseFetchData from './components/CompositionApiUseFetchData.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  components: {
    A01Reactive: require('@/components/A01Reactive.vue').default,
    A02Ref: require('@/components/A02Ref.vue').default,
    A03WatchWatchEffect: require('@/components/A03WatchWatchEffect.vue').default,
    A04LifecycleHooks: require('@/components/A04LifecycleHooks.vue').default,
    CompositionApiUseFetchData,
    TodoList,
  },
};
</script>

<template>
  <div id="app">
    <A01Reactive />
    <A02Ref />
    <A03WatchWatchEffect />
    <A04LifecycleHooks />
    <CompositionApiUseFetchData />
    <TodoList />
  </div>
</template>

<style lang="scss" src="./App.scss">
</style>
