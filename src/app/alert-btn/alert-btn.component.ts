import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-btn',
  templateUrl: './alert-btn.component.html',
  styleUrls: ['./alert-btn.component.css']
})
export class AlertBtnComponent implements OnInit {

  message: string;
  showBtn: boolean;
  value: number;
  toggle = true;
  foodItems = [
    {name: 'chicken briyani', type: 'nonveg'},
    {name: 'veg briyani', type: 'veg'}
  ];

  constructor() {
    this.message = 'Good afternoon !! Its lunch time';
    this.value = Math.random();
    this.showBtn = (this.value > 0.7) ? true : false;
   }

  ngOnInit() {
  }

  showAlert() {
    alert(this.message);
  }

  toggleMessage(){
    this.toggle = !this.toggle;

  }

}
