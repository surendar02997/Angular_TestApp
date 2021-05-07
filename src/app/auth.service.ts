

export class Authservice
{
 isloggedin=false;

isAuthenticated()
{
    const promice=new Promise(
        (resolve,reject)=>{
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        }
    )

    return promice;
}
    
 loggedIn()
 {
    this.isloggedin=true;
 }


 loggedOut()
 {
    this.isloggedin=false;
 }
}