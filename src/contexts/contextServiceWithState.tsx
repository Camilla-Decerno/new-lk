/**
 * Base implementation to ease creation of React Context based 'services' with a state.
 * Allows to create a React Context which:
 *   - keeps a state,
 *   - exposes methods that can mutate the state,
 *   - allows components to use the state and react to changes of it,
 *   - allows anyone to subscribe to state changes.
 */

import { Context, useContext, useEffect, useState } from "react";

type StateSubscription = () => void;
type UnsubscribeCallback = () => void;
type UpdateStateAction<State> = (prevState: State) => State;
type StateService<State> = {
  getState(): State;
  updateState(action: UpdateStateAction<State>): void;
  subscribeState(callback: StateSubscription): UnsubscribeCallback;
};
type Service<State, ServiceInterface> = StateService<State> & ServiceInterface;

/** Create an instance of a Context service keeping a state. */
export function createContextServiceWithState<State, ServiceInterface>(
  initialState: State,
  extend: (stateApi: StateService<State>) => ServiceInterface
): Service<State, ServiceInterface> {
  let subscriptions: StateSubscription[] = [];

  let state = initialState;
  const stateService = {
    getState: () => state,
    updateState: (action: (prev: State) => State) => {
      state = action(state);
      subscriptions.forEach((subscription) => subscription());
    },
    subscribeState: (subscription: StateSubscription) => {
      subscriptions = [...subscriptions, subscription];

      const unsubscribe = () => {
        subscriptions = subscriptions.filter((other) => other !== subscription);
      };

      return unsubscribe;
    },
  };

  const api = { ...extend(stateService), ...stateService };
  return api;
}

/** Creates an unusable instance for use as a default parameter to React.createContext(...). */
export function asUninitialized<State, ServiceInterface>(
  api: Service<State, ServiceInterface>
): Service<State, ServiceInterface> {
  const uninitializedApi: Record<string, any> = { ...api };
  Object.keys(uninitializedApi).forEach((key: string) => {
    uninitializedApi[key] = () => {
      throw new Error(`API not initialized, cannot use '${key}'.`);
    };
  });

  return uninitializedApi as Service<State, ServiceInterface>;
}

/** Hook to access state. */
export function useServiceState<State, ServiceInterface>(
  context: Context<Service<State, ServiceInterface>>
): State {
  const service = useContext(context);
  const [state, setState] = useState(service.getState());

  // Update component state when service state changes
  useEffect(() => {
    // Subscribe to service state updates
    const unsubscribe = service.subscribeState(() =>
      setState(service.getState())
    );

    // Unsubscribe from service state updates when component unmounts.
    return unsubscribe;
  }, []);

  return state;
}
