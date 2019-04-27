let data = require('./data/rulesets-tree.json')

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      sniffs: {
        selected: null,
        list: data
      },
    },
  },
};
