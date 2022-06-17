import { useReducer } from 'react'

type State = { page: number }

const initialState = { page: 1 }

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setPage'; payload: number }
  | { type: 'reset' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { page: state.page + 1 }
    case 'decrement':
      return { page: state.page - 1 }
    case 'setPage':
      return { page: action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const usePageNation = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const increment = () => dispatch({ type: 'increment' })
  const decrement = () => dispatch({ type: 'decrement' })
  const set = (page: number) => dispatch({ type: 'setPage', payload: page })
  const reset = () => dispatch({ type: 'reset' })
  return { state, increment, decrement, set, reset } as const
}

export default usePageNation
