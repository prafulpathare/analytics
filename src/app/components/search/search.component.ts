import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input('placeholder') placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: any) {
    console.log(e.target.value)
  }
}
