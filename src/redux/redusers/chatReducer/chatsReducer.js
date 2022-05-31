const initialState = {
  chats: [
    {
      id: 1,
      name: "Alexey",
    },
    {
      id: 2,
      name: "Olga",
    },
    {
      id: 3,
      name: "Andrey",
    },
  ],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
