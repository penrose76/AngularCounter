import { Component, OnInit } from '@angular/core';
import { ServiceLicznikService } from '../service-licznik.service';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css']
})
export class Klikacz2Component implements OnInit {

  licznik2 = 0;

  constructor(private licznikService: ServiceLicznikService) { }

  ngOnInit() {
  }

  add(): void {
    this.licznik2 ++;
    this.licznikService.addClickService();
  }

}
