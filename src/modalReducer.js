const modal = (state = [], action) => {
  switch (action.type) {
	case 'SHOW_MODAL':
		console.log(state);
      return Object.assign({}, state, {
        modalShown: action.value
      })  
    default:
      return state
  }
}

export default modal

