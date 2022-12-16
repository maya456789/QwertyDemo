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
import { DefaultComponent } from './adminPages/default/default.component';
import { SpaSidebarComponent } from './spa-sidebar/spa-sidebar.component';
import { LoginComponent } from './login/login.component';
import { CoreuiSidebarComponent } from './coreui-sidebar/coreui-sidebar.component';
import { OffcanvasModule } from '@coreui/angular';
import { NavModule } from '@coreui/angular';
import { NavbarModule } from '@coreui/angular';
import { DropdownModule } from '@coreui/angular';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { IraTestComponent } from './ira-test/ira-test.component';



@NgModule({
  declarations: [
    AppComponent,
    AutoFocusDirective,
    RegisterPageComponent,
    DefaultComponent,
    SpaSidebarComponent,
    LoginComponent,
    CoreuiSidebarComponent,
    SignupComponent,
    IraTestComponent
  ],
  imports: [
    
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule, 
    HttpClientModule,
     NgbModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonGroupModule,
    DropdownModule,
    IconModule, 
    NavModule,
    OffcanvasModule,
    SidebarModule,
    NavbarModule,
    
    ReactiveFormsModule,
    AppRoutingModule,
    AlertModule,
  ],
  providers: [AuthService,IconSetService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
