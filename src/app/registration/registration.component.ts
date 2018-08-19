import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
<<<<<<< HEAD
  personal: { initial: string, firstname: string, lastname: string, middlename: string, gender: string, dob: any, type: string} = {initial: "Select Initial",firstname: "",middlename: "",lastname: "",gender: "",dob: "",type: "PERSONAL_INFO"};
=======
  personal: { initial: string, firstname: string } = {initial: "Select Initial",firstname: ""};
  contact: { mobilenumber: any, emailid: any, pincode: any, city: string, state: any, address: any} = {mobilenumber:"",emailid:"", pincode:"", city:"" , state:"", address:"", type: "conatctinfo"}
>>>>>>> 4a50299b6e9f484470ed2c2923c82ce6d8bd4495

  constructor() { }
  ngOnInit() {
  }
  saveContactInfo(){
    console.log(this.contact);
  }
  savePersonalInfo() {
  	console.log(this.personal);
  }

}
export class NgbdTabsetPills { }


