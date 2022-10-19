import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('headers') headers: string[] = [];
  @Input('data') data: any[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.headers = Object.keys(this.data[0]);
  }

  isNum(num: any) : boolean {
    if(typeof num === 'number') { return true; }
    return false;
  }

}
