export default {
  state: {
    name: 'hello',
    age: 18,
  },
  reducers: {
    setName(state: any, { payload }: { payload: string }) {
      state.name = payload;
    },
  },
}