import { Card } from '$/common/components/card';
import { Button } from './button';
import { useReducer, useState } from 'react';
import type { ActionDispatch, ChangeEventHandler, FormEvent } from 'react';
import { counterReducer, initialState, type CounterAction } from './counter-reducer';

const CounterControls = function ({ dispatch }: DispatchCounterAction) {
  return (
    <div className="flex gap-2">
      <Button
        variant='secondary'
        onClick={() => dispatch({ type: 'decrement' })}
      >➖ Decrement
      </Button>
      <Button variant='ghost' onClick={() => dispatch({ type: 'setCount', payload: 0 })}>🔁 Reset</Button>
      <Button variant='secondary' onClick={() => dispatch({ type: 'increment' })}>➕ Increment</Button>
    </div >
  )
}

type DispatchCounterAction = { dispatch: ActionDispatch<[action: CounterAction]> }

const CounterInputForm = function ({ dispatch }: DispatchCounterAction) {
  const [draftCount, setDraftCount] = useState(0);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = function (e) {
    setDraftCount(e.target.valueAsNumber);
  }

  const handleOnSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: 'setCount', payload: draftCount });
    setDraftCount(0)
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleOnSubmit}>
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        name="counter"
        value={draftCount}
        onChange={handleInputChange}
      />
      <Button type='submit'>Update Counter</Button>
    </form>
  )
}

export const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, initialState)

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count.count}</p>
      <CounterControls dispatch={dispatch} />
      <CounterInputForm dispatch={dispatch} />
    </Card>
  );
};
