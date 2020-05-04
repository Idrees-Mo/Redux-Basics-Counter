const count = document.getElementById("count")
const inc = document.getElementById("inc")
const dec = document.getElementById("dec")

//initial state 
const initialState = {
  count: 0
}
//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Inc':
      return {
        ...state,
        count: state.count + 1
      }
    case 'Dec':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
//store
const store = Redux.createStore(reducer)

// action creator 
const incCount = () => {
  store.dispatch({ type: 'Inc' })
}
const decCount = () => {
  store.dispatch({ type: 'Dec' })
}

inc.addEventListener('click', () => {
  incCount()
  const state = store.getState()
  count.innerHTML = state.count
})

dec.addEventListener('click', () => {
  decCount()
  const state = store.getState()
  count.innerHTML = state.count
})

// const state = store.getState()
// console.log(state)