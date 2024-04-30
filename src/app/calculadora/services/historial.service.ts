import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HistoryService {
  private localStorageKey = 'calculatorHistory';
  private historySubject = new Subject<void>();
  historyUpdates$ = this.historySubject.asObservable();
  getHistory(): string[] {
    const history = localStorage.getItem(this.localStorageKey);
    return history ? JSON.parse(history) : [];
  }
  addHistory(item: string) {
    const currentHistory = this.getHistory();
    currentHistory.push(item);
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentHistory));
    this.historySubject.next();
  }
  clearHistory() {
    localStorage.removeItem(this.localStorageKey);
    this.historySubject.next();
  }
}
