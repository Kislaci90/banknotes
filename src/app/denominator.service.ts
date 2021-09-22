import { Injectable } from '@angular/core';
import {CashCounter, Denominator} from './app.type';

@Injectable({
  providedIn: 'root'
})
export class DenominatorService {

  constructor() { }

  public denominate(denominator: Denominator, amount: number): Denominator {
    let reminders = amount;
    denominator.cashCounters.forEach( (cacheCounter) => {
      cacheCounter.reminders = reminders;
      const possibleQuantity = Math.trunc(reminders / cacheCounter.cacheValue);
      cacheCounter.quantity = possibleQuantity;
      console.log(cacheCounter.quantity);
      reminders = reminders % cacheCounter.cacheValue;
      console.log(reminders);
      if (cacheCounter.availableQuantity != null && possibleQuantity > cacheCounter.availableQuantity) {
        reminders = DenominatorService.reCalculateReminders(cacheCounter, reminders, possibleQuantity);
      }
      if (reminders < 5) {
        return;
      }
    });
    denominator.finalReminders = reminders;
    return denominator;
  }

  private static reCalculateReminders(cacheCounter: CashCounter, reminders: number, possibleQuantity: number): number {
    console.log(`There is no more from ${cacheCounter.cacheName}`);
    cacheCounter.quantity = cacheCounter.availableQuantity;
    reminders += cacheCounter.cacheValue * (possibleQuantity - cacheCounter.availableQuantity);
    cacheCounter.availableQuantity = 0;
    return reminders;
  }
}
