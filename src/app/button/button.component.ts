import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private router:Router) { }
@Input() name:string;
message:string;
  ngOnInit(): void {
  }
 onget(message:string)
 {
   this.name=this.message;
 }
 OnMove(){
  this.router.navigate(['/name']);
  }
}
