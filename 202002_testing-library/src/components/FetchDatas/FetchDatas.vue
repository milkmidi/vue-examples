<script>
import { fetchData } from '@/services/api';

interface Data {
  list: string[]
}

export default {
  name: 'FetchDatas',
  data: ():Data => ({
    list: [],
  }),
  async mounted() {
    const list:string[] = await fetchData();
    this.list = list;
  },
};
</script>

<template>
  <section data-name="FetchDatas.vue">
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
  </section>
</template>
