<script>
import {
  ref,
  Ref,
} from 'vue';

export default {
  setup(props, { emit }) {
    const input:Ref<string> = ref('DefaultTodo');
    const submitHandler = () => {
      if (input.value !== '') {
        emit('addTodo', input.value);
        input.value = '';
      }
    };
    return {
      input,
      submitHandler,
    };
  },
};
</script>

<template>
  <section
    data-name="TodoForm.vue"
    class="style-1"
  >
    <form
      class="todo-form"
      @submit.prevent="submitHandler"
    >
      <input v-model="input">
    </form>
  </section>
</template>

<style lang="scss">
.todo-form{
  text-align: center;
  input{
    width: 100%;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #336;
  }
}
</style>
