import { Component, OnInit } from '@angular/core';
import { ServiceLicznikService } from './service-licznik.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceLicznikService]
})
export class AppComponent implements OnInit{

  wszystkieKliki: number;

  constructor(private licznikService: ServiceLicznikService) { }

  ngOnInit(): void {
    this.licznikService.getSum().subscribe(
      kliki => this.wszystkieKliki = kliki
    );
    };

}

