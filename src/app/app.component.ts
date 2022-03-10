import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  users: Users[] = [];
  firstName: any;
  title: any;
  p:number=1;

  constructor(public rs:RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
     
    });
  }
  Search(){
    if(this.firstName == ""){
    this.ngOnInit();
  }else{
    this.users=this.users.filter(res=>{
      return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
    });
  }
  }
  key : string = 'id';
  reverse : boolean = false;
  sort (key:any){
    this.key=key;
    this.reverse= !this.reverse;
  }
}
