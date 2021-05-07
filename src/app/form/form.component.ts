import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
subscription=['max','min','high'];
selected_subscription='min';
  ngOnInit(): void {
  }
@ViewChild('signupform') signup:NgForm
  onsubmit()
  {
console.log('data is',this.signup);

  }

}
