import { Component, OnInit } from '@angular/core';
import {Denominator, HungarianDenominator} from '../app.type';
import {DenominatorService} from '../denominator.service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-single-denomination',
  templateUrl: './single-denomination.component.html',
  styleUrls: ['./single-denomination.component.css']
})
export class SingleDenominationComponent {

  public amount: number;
  public denominator: Denominator;
  public showPreferences: boolean;
  public currencyCode = 'HUF';
  public currencyDisplay = 'symbol-narrow';
  public currencyDigitsInfo = '';
  public currencyLocal = 'hu-HU';
  public formattedAmount: string;

  constructor(private denominatorService: DenominatorService,
              private currencyPipe: CurrencyPipe) {
    this.denominator = new HungarianDenominator();
    this.showPreferences = false;
  }

  transformAmount(element): void{
    // tslint:disable-next-line:max-line-length
    this.formattedAmount = this.currencyPipe.transform(this.amount, this.currencyCode, this.currencyDisplay, this.currencyDigitsInfo, this.currencyLocal);
    element.target.value = this.formattedAmount;
  }

  public denominate(): void {
    if (this.amount) {
      this.denominator = this.denominatorService.denominate(this.denominator, this.amount);
    }
  }
}
