import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home';
import {DashboardComponent} from './components/dashboard';
import {EvaluationComponent} from './components/evaluation';
import {UserComponent} from "./components/user";
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    EvaluationComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
