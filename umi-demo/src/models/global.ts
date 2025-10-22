const GlobalModel = {
  namespace: 'global',
  state: {
    status: 'unloaded',
  },
  reducers: {
    setStatus(state: any, { payload }: { payload: string }) {
      state.status = payload;
    }
  }
}

export default GlobalModel;