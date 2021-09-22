import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/hu';
import { SingleDenominationComponent } from './single-denomination/single-denomination.component';
import { MultiDenominationComponent } from './multi-denomination/multi-denomination.component';
import {RoutingModule} from './routing/routing.module';
import {RouterModule} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    SingleDenominationComponent,
    MultiDenominationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    CommonModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatCheckboxModule,
    MatSliderModule,
    MatExpansionModule,
    RoutingModule,
    RouterModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'hu-HU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
