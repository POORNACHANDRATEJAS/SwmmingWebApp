import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  personal: { initial: string, firstname: string } = {initial: "Select Initial",firstname: ""};

  constructor() { }
  ngOnInit() {
  }
  savePersonalInfo() {
  	console.log(this.personal);
  }

}
export class NgbdTabsetPills { }


