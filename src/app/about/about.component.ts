import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  borImg = 'http://dolphinaquatics.in/images/dolphin_startingblock.jpeg';
  unimg = 'https://dyn.web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.11540-24%2F37187370_1085749951581270_3221344279385341952_n.jpg%3Foe%3D5B7589FC%26oh%3D2eb7f378b8e913176401e0312adb8ee2&t=l&u=918553423217%40c.us&i=1533452981';
  sir = 'https://dyn.web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.11540-24%2F37617312_2234287326849532_2940996010035380224_n.jpg%3Foe%3D5B758C32%26oh%3De0e5d0b7bf43367b584958afa65bbec3&t=l&u=918867315438%40c.us&i=1533988086';
  constructor() { }

  ngOnInit() {
  }

}
