import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { Panel } from 'primeng/primeng';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { IndeterminateCheckboxState } from '../shared/indeterminate-checkbox-state.enum';
import { Menus } from '../shared/menus.interface';
import { FunAccess } from '../shared/fun-access.interface';

const menus = [
  {
    name: '主選單1',
    children: [
      { name: '1-1子選單', functions: [{ name: '1-1-1功能' }, { name: '1-1-2功能' }, { name: '1-1-3功能' }] },
      { name: '1-2子選單', functions: [{ name: '1-2-1功能' }, { name: '1-2-2功能' }, { name: '1-2-3功能' }] }
    ]
  },
  {
    name: '主選單2',
    children: [
      { name: '2-1子選單', functions: [{ name: '2-1-1功能' }, { name: '2-1-2功能' }, { name: '2-1-3功能' }] },
      { name: '2-2子選單', functions: [{ name: '2-2-1功能' }, { name: '2-2-2功能' }, { name: '2-2-3功能' }] }
    ]
  },
  {
    name: '主選單3',
    children: [
      { name: '3-1子選單', functions: [{ name: '3-1-1功能' }, { name: '3-1-2功能' }, { name: '3-1-3功能' }] },
      { name: '3-2子選單', functions: [{ name: '3-2-1功能' }, { name: '3-2-2功能' }, { name: '3-2-3功能' }] }
    ]
  },
  {
    name: '主選單4',
    children: [
      { name: '4-1子選單', FunAccess: [{ name: '4-1-1功能' }, { name: '4-1-2功能' }, { name: '4-1-3功能' }] },
      { name: '4-2子選單', FunAccess: [{ name: '4-2-1功能' }, { name: '4-2-2功能' }, { name: '4-2-3功能' }] }
    ]
  }
];

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @ViewChildren(Panel) panels: QueryList<Panel>;
  @ViewChild('funpanel') funpanel: Panel;

  value = Observable.of<Menus[]>(menus);
  data$ = new BehaviorSubject(menus);
  currentSubMenu: any;
  disabled = false;

  toggle(event, idx) {
    // TODO: 開闔 panel
    // panel.animating = true; 動畫效果(一定要加)
    // panel.expand(event)=>展開
    // panel.collapse(event)=>縮起來
  }

  changeState(menu, state: IndeterminateCheckboxState) {}

  constructor() {}

  ngOnInit() {}
}
