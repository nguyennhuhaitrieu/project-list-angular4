import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-project-list',
  templateUrl: './../templates/control.component.html',
})
export class ControlComponent {
  @Input("typeSummary") typeSummary: number;
  @Input("typeCurrency") typeCurrency: string;

  @Output("typeSummaryChange") typeSummaryChange = new EventEmitter<number>();
  @Output("typeCurrentcyChange") typeCurrentcyChange = new EventEmitter<string>();

  valueSummary: string[] = ["Small","Medium","Full"];
  valueCurrency: string[] = ["vnd","usd"];

  settingSummary(value: any) {
    this.typeSummaryChange.emit(value);
  }

  settingCurrentcy(value: any) {
    this.typeCurrentcyChange.emit(value);
  }

  constructor() {

  }
}
