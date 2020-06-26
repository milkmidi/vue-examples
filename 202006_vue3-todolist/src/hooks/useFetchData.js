
import { reactive, onMounted } from 'vue';

interface UserData {
  name:string;
  age:number;
}

function fetchData():Promise<UserData> {
  const mockData:UserData = {
    name: 'milkmidi',
    age: 18,
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1500);
  });
}

export interface UseFetchDataType {
  isLoading : boolean;
  userData: UserData;
}

const useFetchData = ():UseFetchDataType => {
  const state:UseFetchDataType = reactive({
    userData: {},
    isLoading: false,
  });
  onMounted(async () => {
    state.isLoading = true;
    const userData:UserData = await fetchData();
    state.userData = userData;
    state.isLoading = false;
  });
  return state;
};


export default useFetchData;
