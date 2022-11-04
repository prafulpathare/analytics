import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import {animate, style, state, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-item-viewer',
  templateUrl: './item-viewer.component.html',
  styleUrls: ['./item-viewer.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        
      })),
      state('out', style({
        height: 0,
        width: 0,
        top: '100vh'
      })),
      transition('in <=> out', animate('250ms ease-in-out'))
    ])
  ]
})
export class ItemViewerComponent implements OnInit {

  @Input('item') viewItem: any[] = [];
  openItemAnim: string = 'in';

  constructor(private element: ElementRef) {}  

  ngOnInit(): void {
    
  }
             
  ngOnChanges(){
    console.log('sdf', this.viewItem)
    this.openItemAnim =  this.viewItem.length > 0 ? 'in' : 'out';
  }

  typeOf(value: any) {
    return typeof this.viewItem[value];
  }

  isLink(val: string) {
    return (""+val).split('http').length > 1 ? true : false;
  }

  unsetViewItem() {
    this.viewItem = [];
    this.openItemAnim = 'out';
  }
}
