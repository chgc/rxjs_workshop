import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IndeterminateCheckboxState } from '../shared/indeterminate-checkbox-state.enum';

@Component({
  selector: 'app-indeterminate-checkbox',
  templateUrl: './indeterminate-checkbox.component.html',
  styleUrls: ['./indeterminate-checkbox.component.scss']
})
export class IndeterminateCheckboxComponent implements OnInit {
  /**
   * 目前的狀態
   * 0: 未選取
   * 1: 全選
   * 2: 部分選取
   *
   * @type {IndeterminateCheckboxState}
   * @memberof IndeterminateCheckboxComponent
   */
  stateValue: IndeterminateCheckboxState;

  @Input()
  get state(): number {
    return this.stateValue;
  }

  set state(value: number) {
    this.stateValue = value;
  }

  /**
     * 文字資訊
     *
     * @type {string}
     * @memberof IndeterminateCheckboxComponent
     */
  @Input() label: string;

  @Input() disabled: boolean;

  /**
     * 狀態變更時的事件
     *
     * @memberof IndeterminateCheckboxComponent
     */
  @Output() stateChange = new EventEmitter<number>();

  constructor() {
    this.stateChange = new EventEmitter<number>();
  }

  ngOnInit() {}

  changeState() {
    if (this.disabled) {
      return;
    }

    if (this.state === IndeterminateCheckboxState.Checked) {
      this.state = IndeterminateCheckboxState.Unchecked;
    } else {
      this.state = IndeterminateCheckboxState.Checked;
    }
    this.stateChange.emit(this.state);
  }
}
