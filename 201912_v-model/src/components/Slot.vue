<script>
export default {
  name: 'SlotVue',
  data: () => ({
    categories: ['Dart', 'Flutter', 'Vue.js'],
    footerData: 'footer',
  }),
};
</script>

<template lang="pug">
section(data-name="slot")
  p {{categories}}
  slot(:categories="categories")
  slot(name="footer" :footerData="footerData")
    h3 defaultSlotFooter {{footerData}}
</template>
