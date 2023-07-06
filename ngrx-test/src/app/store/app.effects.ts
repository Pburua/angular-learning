import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, tap, withLatestFrom } from "rxjs";
import { LOAD_COUNTER_START } from "./app.actions";
import { AppState } from "./app.reducer";

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions, private store: Store<{ app: AppState }>) {

    }

    loadCounter$ = createEffect(() => this.actions$.pipe(
        ofType('[App Component] Load Counter Start'),
        map(() => {
            let data: string | null | number = localStorage.getItem('counter');
            if (data) data = JSON.parse(data);
            else data = 0;
            return {
                type: '[App Component] Load Counter Finish',
                counter: data
            };
        })
    ));

    saveCounter$ = createEffect(() => this.actions$.pipe(
        ofType('[App Component] Increment'),
        withLatestFrom(this.store.select('app')),
        map(([_action, app]) => {
            if (app.counter !== null && app.counter !== undefined)
                localStorage.setItem('counter', JSON.stringify(app.counter));
            return {
                type: '[App Component] Save Counter'
            };
        })
    ));
}