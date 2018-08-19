import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  personal: { initial: string, firstname: string } = {initial: "Select Initial",firstname: ""};
  contact: { mobilenumber: any, emailid: any, pincode: any, city: string, state: any, address: any} = {mobilenumber:"",emailid:"", pincode:"", city:"" , state:"", address:"", type: "conatctinfo"}

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


