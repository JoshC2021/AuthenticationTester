import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { TestPageComponent } from './test-page/test-page.component';
import { GoogleLogInComponent } from './google-log-in/google-log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TestPageComponent,
    GoogleLogInComponent
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'log-in', component: GoogleLogInComponent },
      { path: 'testing-log', component: TestPageComponent },
    ])
  ],

  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '686552421880-hkfl7jppqm0247v9pibcg7qv7f2s0ln0.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
