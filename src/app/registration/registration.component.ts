import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  personal: { initial: string, firstname: string, lastname: string, middlename: string, gender: string, dob: any} = {initial: "Select Initial",firstname: "",middlename: "",lastname: "",gender: "",dob: ""};

  constructor() { }
  ngOnInit() {
  }
  savePersonalInfo() {
  	console.log(this.personal);
  }

}
export class NgbdTabsetPills { }


