const uid = () => Math.random().toString(34).slice(2);

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: uid(),
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const showModal = (value) => {
  return {
    type: 'SHOW_MODAL',
    value
  }
}