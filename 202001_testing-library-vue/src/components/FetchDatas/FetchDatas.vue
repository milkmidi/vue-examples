<script>
import { fetchData } from '@/services/api';

export default {
  name: 'FetchDatas',
  data: () => ({
    list: [],
  }),
  mounted() {
    fetchData().then((list) => {
      this.list = list;
    });
  },
};
</script>

<template>
  <div class="fetch-datas">
    <h1>FetchDatas</h1>
    <ul data-testid="ul">
      <li
        v-for="name in list"
        :key="name"
      >
        {{ name }}
      </li>
    </ul>
  </div>
</template>
