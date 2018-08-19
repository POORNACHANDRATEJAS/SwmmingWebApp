import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  personal: { initial: string, firstname: string, lastname: string, middlename: string, gender: string, dob: any, type: string} = {initial: "Select Initial",firstname: "",middlename: "",lastname: "",gender: "",dob: "",type: "PERSONAL_INFO"};
  
  contact:{ mobilenumber: any, emailid: any, pincode: any,city: string,state: any,address: any, type:string} = {mobilenumber:"",emailid:"",pincode:"",city:"",state:"",address:"",type: "CONTACT_INFO"};
  
  constructor() { }
  ngOnInit() {
  }
  saveContactInfo() {
    console.log(this.contact);
    alert('hi');
  }
  savePersonalInfo() {
  	console.log(this.personal);
  }

}
export class NgbdTabsetPills { }


