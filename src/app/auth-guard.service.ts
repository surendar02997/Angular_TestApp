import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Authservice } from "./auth.service";

@Injectable()

export class Authguard implements CanActivate{
constructor(private Authservice:Authservice,private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
       return this.Authservice.isAuthenticated().then(
            (authenticated:boolean)=>{
                if(authenticated)
                {
                    return true;
                }
                else{
this.router.navigate(['/']);
                }
            }
        )
    };

    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state);
    }
    

    

    
}