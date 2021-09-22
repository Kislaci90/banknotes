import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-denomination',
  templateUrl: './multi-denomination.component.html',
  styleUrls: ['./multi-denomination.component.css']
})
export class MultiDenominationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  currencyList: string[] = ['HUF', 'USD', 'EUR'];
  currenciesCtrl = new FormControl();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      currenciesCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
