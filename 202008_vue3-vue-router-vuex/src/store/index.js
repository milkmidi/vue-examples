import {
  createStore,
  Store, // interface
} from 'vuex';

export interface State {
  count: number;
}

export const MUTATION_INCREMENT = 'increment';
export const MUTATION_DECREMENT = 'decrement';

export const ACTION_TEST = 'actionTest';

const storeOptions = {
  state: {
    count: 0,
  },
  mutations: {
    [MUTATION_INCREMENT](state:State) {
      console.log('vuex mutations increment');
      state.count += 1;
    },
    [MUTATION_DECREMENT](state:State) {
      state.count += 1;
    },
    setCount(state:State, value:number) {
      state.count = value;
    },
  },
  actions: {
    [ACTION_TEST]({ commit }, value:number):Promise<string> {
      console.log('actionTest');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('hi vuex');
          commit('setCount', value);
        }, 1500);
      });
    },
  },
  getters: {

  },
};

const store:Store<State> = createStore(storeOptions);

export default store;

export const useStore = ():Store<State> => store;
