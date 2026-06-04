import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = signal(0);

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }

  reset() {
    this.count.set(0);
  }
}
