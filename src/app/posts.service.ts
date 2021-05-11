import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import {map} from 'rxjs/operators';
import { Subject } from "rxjs";
import { ThrowStmt } from "@angular/compiler";

@Injectable({providedIn:'root'})
export class Postservice{

    error=new Subject<string>();
   
    constructor(private http:HttpClient){}
    
    oncreateandstorepost(name:string,hobby:string){
       
        const postdata:Post={name,hobby};
       
        this.http.post<{name:string}>("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json",postdata).subscribe(responsedata=>{
            console.log(responsedata);
            
          },error=>{
              this.error=error.message;
          });
    }

    ongetvalues()
    {
       return this.http.get<{[key:string]:Post}>("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json").pipe(map((responsedata)=>{
    
            const postarray:Post[]=[];
            for(const key in responsedata){
              if(responsedata.hasOwnProperty(key))
              {
                postarray.push({...responsedata[key],id:key});
              }
             
            }
            return postarray;
          
            
          }));
        }

        deletevalues()
        {
          return  this.http.delete("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json");
        }
    
}