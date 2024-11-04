import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CommonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    "Forex UPI limit: Min 1000 to 100k",
    "Forex IMPS limit: Min 1000 to 500k",
    "Forex NEFT limit: Min 1000 to 1 million INR",
    "Forex RTGS limit: Up to 2.5 million",
    "Forex withdrawal IMPS only: Min 1000 Max 49k",
    "Forex Deposits: 5.95%",
    "Forex Withdrawals: 3%",
    "Forex Settlements: 3.5%",

    
    "Igaming deposits: 4.5%",
    "Igaming withdrawals: 2%",
    "Igaming Settlements: 3.5%",
    "Igaming methods: IMPS,RTGS,NEFT",
    "Igaming UPI limit: Min 1000 to 100k",
    "Igaming IMPS limit: Min 1000 to 500k",
    "Igaming NEFT limit: Min 1000 to 1 million INR",
    "Igaming RTGS limit: Up to 2.5 million",

    "Igaming Mini UPI limit:500 to 1000",

    "FTD:First Time Deposit",
    "Adult deposits : 7.5%",
    "Adult Withdrawals : 3.5%",
    "Adult Settlements : 3.5%",

    "Dating deposits : 7.0%",
    "Dating Withdrawals : 3.5%",
    "Dating Settlements : 3.5%",
  ];
  filteredResults: string[] = [];
  isVisible:boolean=true;

  filterResults(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm.trim() === '') {
      this.filteredResults = [];
    } else {
      this.filteredResults = this.data.filter(item => item.toLowerCase().includes(searchTerm));
    }
  }

  OpenInfo():void{
    this.isVisible=!this.isVisible;
  }
}


