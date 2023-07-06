import { createAction, props } from "@ngrx/store";

export const INCREMENT = createAction('[App Component] Increment');
export const LOAD_COUNTER_START = createAction('[App Component] Load Counter Start');
export const LOAD_COUNTER_FINISH = createAction('[App Component] Load Counter Finish', props<{ counter: number }>());
export const SAVE_COUNTER = createAction('[App Component] Save Counter');
