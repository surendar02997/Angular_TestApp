import { getLocaleDayNames } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor(private router:Router) { }
 // name:string="";
  @Output() name:EventEmitter<string>=new EventEmitter<string>();
  ngOnInit(): void {
   
  }

onclick(na)
{
  this.name.emit(na);
 console.log("jj", this.name.emit(na));
  
}

OnMove(){
this.router.navigate(['/button']);
}

}
