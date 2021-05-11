import { HttpClient } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {map} from 'rxjs/operators';

import{Post} from '../post.model';
import { Postservice } from '../posts.service';


@Component({
  selector: 'app-http-form',
  templateUrl: './http-form.component.html',
  styleUrls: ['./http-form.component.css']
})
export class HttpFormComponent implements OnInit {

  constructor(private http:HttpClient,private postservice:Postservice) { }

  loadedposts=[];
  error:string;
  isfetching=false;
  private errorsubs:Subscription
  ngOnInit(): void {

   this.errorsubs= this.postservice.error.subscribe(errormessage=>{
      this.error=errormessage;
    })

    this.getpostdata();
  }


  sendpostdata(postdata:Post)
  {
   this.postservice.oncreateandstorepost(postdata.name,postdata.hobby);
   ;
  }

  getpostdata()
  {
    this.isfetching=true;
   this.postservice.ongetvalues().
          
   subscribe(getdeata=>{
     this.isfetching=false;
    this.loadedposts=getdeata;
     console.log("loadedposts",this.loadedposts);
   },error=>{
    // alert();
    this.isfetching=false;
     this.error=error.message;
   });
  }

  deletedata(){
    this.postservice.deletevalues().subscribe(response=>{
      this.loadedposts=[];
    })
  }

  onhandle(){
    this.error='';
    this.isfetching=false;
  }
  ngOnDestroy(){
    this.errorsubs.unsubscribe();
      }

}
