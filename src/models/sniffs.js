const forEachSniff = (sniffs, callback) => {
  sniffs.forEach(sniff => {
    callback(sniff);
    if(sniff.children) {
      forEachSniff(sniff.children, callback);
    }
  })
}

// const findSniffByKey = (sniffs, key) => {
//   for(let sniff in sniffs) {
//     if(sniff.key == key) return sniff;

//     if(sniff.children) {
//       var result = forEachSniff(sniffs.children, callback);
//       if(result) return result;
//     }
//   }

//   return false;
// }

export default {
  namespace: 'sniffs',
  state: {
    list: [],
    selected: null
  },
  reducers: {
    'select'(state, { payload: keys }) {
      let selected;
      forEachSniff(state.list, sniff => {
        if(sniff.key === keys[0]) {
          selected = sniff;
        }
      });

      return { ...state, selected };
    },
    'actionChange'(state, { payload: action }) {
      let selected = state.selected;
      let list = state.list;

      selected.action = action;

      forEachSniff(list, sniff => {
        if(sniff.key === selected.key) {
          sniff = selected
        }
      });

      return { ...state, list, selected };
    },
  },
};
