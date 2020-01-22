
<script>
export default {
  data: () => ({
    count: 0,
  }),
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>

<template>
  <div>
    <p>
      Times clicked:
      <span data-testid="count">{{ count }}</span>
    </p>
    <button
      data-testid="button"
      @click="increment"
    >
      increment
    </button>
  </div>
</template>

<style lang="scss" scoped>
button{
  width: 100px;
  height: 50px;
  border: 1px solid red;
}
</style>
