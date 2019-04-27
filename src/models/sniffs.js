function forEachSniff(sniffs, callback) {
  for(let sniff in sniffs) {
    callback(sniff);
    if(sniff.children) {
      forEachSniff(sniffs.children, callback);
    }
  }
}

export default {
  namespace: 'sniffs',
  state: {
    list: [],
    selected: null
  },
  reducers: {
    'select'(state, { payload: id }) {
      forEachSniff(state.list, sniff => {
        if(sniff.id === id) {
          state.selected = sniff;
        }
      });

      console.log(id)

      return state;
    },
  },
};
