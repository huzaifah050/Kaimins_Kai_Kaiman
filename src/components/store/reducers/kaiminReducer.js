const initialState = {
  url: null,
  progress: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_KAI':
      console.log('kai created', payload);
      return state;

    case 'IMAGE_UPLOADED': 
      console.log('image added');
      return {...state, url: payload }

    default:
      return state;
  }
};
