import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/historial.service';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit {
  history: string[] = [];
  constructor(private historyService: HistoryService) { }
  ngOnInit() {
    this.loadHistory();

    this.historyService.historyUpdates$.subscribe(() => {
      this.loadHistory();
    });
  }
  loadHistory() {
    this.history = this.historyService.getHistory();
  }
  clearHistory() {
    this.historyService.clearHistory();
    this.loadHistory();
  }
}
