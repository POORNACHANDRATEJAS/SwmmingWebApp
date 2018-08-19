import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
<<<<<<< HEAD
  personal: { initial: string, firstname: string } = {initial: "Select Initial",firstname: ""};
  contact: { mobilenumber: any, emailid: any, pincode: any, city: string, state: any, address: any} = {mobilenumber:"",emailid:"", pincode:"", city:"" , state:"", address:"", type: "conatctinfo"}
=======
  personal: { initial: string, firstname: string, lastname: string, middlename: string, gender: string, dob: any} = {initial: "Select Initial",firstname: "",middlename: "",lastname: "",gender: "",dob: ""};
>>>>>>> 405c36bc6148d899b1e935b3dbade044b35d748b

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


