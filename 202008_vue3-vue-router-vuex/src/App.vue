<script>
import {
  computed,
  ComputedRef, // interface
} from 'vue';
import {
  useRouter,
  Router, // interface
} from 'vue-router';
import {
  useStore,
  Store, // interface
} from 'vuex';

import Navigation from '@/components/Navigation.vue';

import { State } from '@/store';

export default {
  components: {
    Navigation,
  },
  setup() {
    const store:Store<State> = useStore();
    const count:ComputedRef<number> = computed(() => store.state.count);
    const { currentRoute }:Router = useRouter();
    return {
      currentRoute,
      count,
    };
  },
};
</script>

<template>
  <div class="container">
    <Navigation />
    <h2>{{ currentRoute.fullPath }}</h2>
    <h3>vuex state.count:{{ count }}</h3>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
