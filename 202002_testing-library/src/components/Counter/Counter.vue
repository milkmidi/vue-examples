<script>
interface Data {
  count: number;
}
interface Props {
  defaultCount: number;
}
export default {
  props: {
    defaultCount: {
      type: Number,
      default: 0,
    },
  },
  data: (vm:Props):Data => ({
    count: vm.defaultCount,
  }),
  computed: {
    displayCount() {
      return this.count * 2;
    },
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>

<template>
  <section data-name="Counter.vue">
    <p>
      Times clicked:
      <span data-testid="count">{{ count }}</span>
      <!-- TODO -->
      <!-- <span data-testid="count">{{ displayCount }}</span> -->
    </p>
    <button
      class="btn btn-info"
      data-testid="button"
      @click="increment"
    >
      increment
    </button>
  </section>
</template>
