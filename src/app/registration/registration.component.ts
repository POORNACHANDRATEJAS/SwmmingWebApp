import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  personal: { initial: string, firstname: string, lastname: string, middlename: string, gender: string, dob: any, type: string} = {initial: "Select Initial",firstname: "",middlename: "",lastname: "",gender: "",dob: "",type: "PERSONAL_INFO"};
  
  contact:{ mobilenumber: any, emailid: any, pincode: any,city: string,state: any,address: any, type:string, userid: any } = {mobilenumber:"",emailid:"",pincode:"",city:"",state:"",address:"",type: "CONTACT_INFO", userid: sessionStorage.getItem('userid')};
  
  constructor( public _http: HttpClient) { }
  ngOnInit() {
  }
  saveContactInfo() {
    console.log(this.contact);
    //alert('hi');
    this._http.post('http://192.168.1.4:7999/api/v1/dummyApiContact',this.contact).subscribe((data) => {
      console.log(data);
      //sessionStorage.setItem('userid',data.result);
    });
  }
  savePersonalInfo() {
    console.log(this.personal);
    this._http.post('http://192.168.1.4:7999/api/v1/dummyApi',this.personal).subscribe((data) => {
      //console.log(data);
      //sessionStorage.setItem('userid',data.result);
    });
  }

}
export class NgbdTabsetPills { }


