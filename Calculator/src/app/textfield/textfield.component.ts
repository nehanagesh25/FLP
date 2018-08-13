import { Component, OnInit } from '@angular/core';
 


@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})

export class TextfieldComponent implements OnInit {
  result: any;

  constructor() {
    this.result = "0";
  }

  displayResult(value){
    this.result=value;

  }

  ngOnInit() {
  }

}
