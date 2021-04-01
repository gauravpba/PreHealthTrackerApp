import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {ClarityModule} from '@clr/angular';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {ConvertToCsvService} from './services/convert-to-csv.service';
import { HomePageComponent } from './Components/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    AppRoutingModule,
    ClarityModule,
    MatInputModule,
    HttpClientModule
  ],
  // for convert csvservice to work it must be registered as a provider here
  providers: [ConvertToCsvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
