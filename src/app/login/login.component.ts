import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 name:any={};
 arr:any;

  constructor() { }

  ngOnInit() {
    // this.name="mano";
    this.arr=["1",2,3,4];
    console.log("ngonitlogin");
    console.log(JSON.stringify(this.arr));
    for(var i=0;i<=this.arr.length;i++)
    //console.log(this.arr);
    {
    console.log(this.arr[i]);
    }
  }
}
