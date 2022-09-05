import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4]
  onlyOdd = false;

}
