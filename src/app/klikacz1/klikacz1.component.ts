import { Component, OnInit } from '@angular/core';
import { ServiceLicznikService } from '../service-licznik.service';

@Component({
  selector: 'app-klikacz1',
  templateUrl: './klikacz1.component.html',
  styleUrls: ['./klikacz1.component.css'],
})
export class Klikacz1Component implements OnInit {

  licznik1 = 0;

  constructor(private licznikService: ServiceLicznikService) { }

  ngOnInit() {
  }

  add(): void {
    this.licznik1 ++;
    this.licznikService.addClickService();
  }
}
