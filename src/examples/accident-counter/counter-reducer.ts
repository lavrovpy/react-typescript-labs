export const initialState = {
  count: 0
};

type Action = {
  type: string,
  payload?: unknown;
}

interface IncrementAction extends Action {
  type: 'increment';
  payload?: 'never';
}
interface DecrementAction extends Action {
  type: 'decrement';
  payload?: 'never';
}
interface SetCountAction extends Action {
  type: 'setCount';
  payload: number;
}
export type CounterAction = IncrementAction | DecrementAction | SetCountAction

export const counterReducer = (state = initialState, action: CounterAction) => {
  const { count } = state;

  /* switch (action.type) {
    case 'increment':
      return { count: count + 1 }
    case 'decrement':
      return { count: count - 1 }
    case 'setCount':
      return { count: action.payload }
  } */
  if (action.type === 'increment') {
    const newCount = count + 1;
    return { count: newCount };
  }

  if (action.type === 'decrement') {
    const newCount = count - 1;
    return { count: newCount };
  }

  if (action.type === 'setCount') {
    const newCount = action.payload;
    return { count: newCount }
  }

  return state;
};
