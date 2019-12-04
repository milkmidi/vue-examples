<script>
import { fetchData, type UserDataType } from '@/services/api';

interface Data {
  userData: UserDataType,
  isLoading: boolean,
}

export default {
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
};
</script>

<template lang="pug">
section
  h1 Basic.vue
  p isLoading:{{isLoading}}
  p {{userData}}
</template>
