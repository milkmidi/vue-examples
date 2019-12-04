
import { reactive, onMounted } from '@vue/composition-api';
import { fetchData, type UserDataType } from '@/services/api';

export type State = {
  userData: UserDataType,
  isLoading: boolean
}

const useFetch = () => {
  const state:State = reactive({
    userData: {},
    isLoading: false,
  });
  onMounted(async () => {
    state.isLoading = true;
    const userData:UserDataType = await fetchData();
    state.userData = userData;
    state.isLoading = false;
  });
  return state;
};


export default useFetch;
