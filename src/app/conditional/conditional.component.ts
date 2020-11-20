import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {
  show=false
  names="yes"

  colors = "blue"

  constructor() { }

  ngOnInit(): void {
  }

}
