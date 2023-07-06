import { INCREMENT, LOAD_COUNTER_START } from './store/app.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  counter: number | null = null;
  subscription: Subscription | null = null;
  loading: boolean = true;

  constructor(private store: Store<{app: AppState}>) {
    
  }

  ngOnInit() {
    this.subscription = this.store.select('app').subscribe((data: AppState) => {
      this.counter = data.counter;
      this.loading = data.loading;
    })
    this.store.dispatch(LOAD_COUNTER_START())
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onIncrement() {
    this.store.dispatch(INCREMENT())
  }
}
