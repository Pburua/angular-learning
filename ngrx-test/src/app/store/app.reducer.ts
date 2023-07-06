import { createReducer, on } from "@ngrx/store";

import { INCREMENT, LOAD_COUNTER_FINISH, LOAD_COUNTER_START } from "./app.actions";

export interface AppState {
    counter: number | null,
    loading: boolean,
}

const initialState: AppState = {
    counter: null,
    loading: true,
}

export const appReducer = createReducer(
    initialState,
    on(INCREMENT, (state: AppState) => {
        return {
            ...state,
            counter: state.counter !== null ? state.counter + 1 : null
        };
    }),
    on(LOAD_COUNTER_START, (state: AppState) => {
        return {
            ...state,
            loading: true
        };
    }),
    on(LOAD_COUNTER_FINISH, (state: AppState, payload: {counter: number, type: string}) => {
        return {
            ...state,
            loading: false,
            counter: payload.counter
        }
    })
)
