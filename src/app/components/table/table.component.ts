import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('headers') headers: string[] = [];
  @Input('data') data: any[] = [];
  selectedItems: any[] = [];
  viewItem: any[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.headers = Object.keys(this.data.length > 0 ? this.data[0] : []);
  }

  isNum(num: any) : boolean {
    if(typeof num === 'number') { return true; }
    return false;
  }

  onItemView(item: any) : void {
    let keys = Object.keys(item);
    
    this.viewItem = this.getKeyValArrayFromObject(item);
    console.log(this.viewItem);
  }

  getKeyValArrayFromObject(object: any): any {
    
    let itemArray = [];
    for (let key in object) {
      if(typeof object[key] === 'object') {
        object[key] = this.getKeyValArrayFromObject(object[key]);
      }
      itemArray.push(
        {
          key: key,
          value: object[key]
        }
      )
    }
    return itemArray;
  }

  typeOf(value: any) {
    return typeof value;
  }

  isLink(val: string) {
    return (""+val).split('http').length > 1 ? true : false;
  }

  onSelectItem(selectableItem: any) {
    let selectedItemIndex = this.selectedItems.indexOf(selectableItem);
    if(selectedItemIndex < 0) {
      this.selectedItems.push(selectableItem);
      return;
    }
    this.selectedItems = this.selectedItems.filter(item => selectableItem !== item);
  }

  deleteItem(object: any) {
    this.data = this.data.filter(obj => obj !== object);
  }

  deleteSelectedItems() {
    this.selectedItems.forEach(item => {
      this.deleteItem(item);
    });
    this.selectedItems = [];
  }
}
