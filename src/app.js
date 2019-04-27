
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      sniffs: {
        selected: null,
        list: [
          {
            title: 'PSR2',
            children: [
              {
                title: "Test 1"
              },
              {
                title: "Test 2",
                children: [
                  {
                    title: "Test 4"
                  },
                  {
                    title: "Test 5"
                  },
                  {
                    title: "Test 6"
                  }
                ]
              },
              {
                title: "Test 3"
              }
            ]
          },
          {
            title: 'PSR1',
            children: [
              {
                title: "Test 1"
              },
              {
                title: "Test 2",
                children: [
                  {
                    title: "Test 4"
                  },
                  {
                    title: "Test 5"
                  },
                  {
                    title: "Test 6"
                  }
                ]
              },
              {
                title: "Test 3"
              }
            ]
          },
        ]
      },
    },
  },
};
