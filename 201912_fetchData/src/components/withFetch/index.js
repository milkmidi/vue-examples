import Vue from 'vue';

import { fetchData, type UserDataType } from '@/services/api';

interface Data {
  userData: UserDataType,
  isLoading: boolean
}

export function withFetch(Component:Object) {
  return Vue.component('withFetch', {
    data: ():Data => ({
      userData: {},
      isLoading: false,
    }),
    async mounted() {
      this.isLoading = true;
      const userData:UserDataType = await fetchData();
      this.userData = userData;
      this.isLoading = false;
    },
    render(h) {
      return h(Component, {
        props: {
          ...this.$data,
        },
      });
    },
  });
}
