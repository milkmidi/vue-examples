export type UserDataType = {
  name: string,
  age: number
}

const mockData:UserDataType = {
  name: 'milkmidi',
  age: 18,
};

export const fetchData = ():Promise<UserDataType> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData);
  }, 1000);
});
