import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule, ButtonGroupModule, ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoFocusDirective } from './autoFocusDirective/auto-focus.directive';
import { RegisterPageComponent } from './register/register-page/register-page.component';
  
    
  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AutoFocusDirective,
    RegisterPageComponent
  ],
  imports: [
    
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule, 
     NgbModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonGroupModule,
    
    ReactiveFormsModule,
    AppRoutingModule,
    AlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
