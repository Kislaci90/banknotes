
export class Cache {}

export class BankNote extends Cache{}

export class Coin extends Cache {}

const HungarianBankNote: BankNote = {
  twentyThousands: 20000,
  tenThousands: 10000,
  fiveThousands: 5000,
  twoThousands: 2000,
  thousand: 1000,
  fiveHundreds: 500,
};

const HungarianCoins: Coin = {
  twoHundreds: 200,
  hundred: 100,
  fifty: 50,
  twenty: 20,
  ten: 10,
  five: 5,
};

export class CashCounter {
  cacheName: string;
  cacheValue: number;
  quantity = 0;
  reminders = 0;
  availableQuantity = null;

  constructor(cacheName: string, cacheValue: number) {
    this.cacheName = cacheName;
    this.cacheValue = cacheValue;
  }
}

export class Denominator {
  cashCounters = new Array<CashCounter>();
  finalReminders = 0;
}

export class HungarianDenominator extends Denominator {
  constructor() {
    super();
    Object.keys(HungarianBankNote).forEach(e => {
      console.log('Add bank note ' + e.toString());
      this.cashCounters.push(new CashCounter(e, HungarianBankNote[e]));
    });
    Object.keys(HungarianCoins).forEach(e => {
      console.log('Add coin ' + e.toString());
      this.cashCounters.push(new CashCounter(e, HungarianCoins[e]));
    });
  }
}

