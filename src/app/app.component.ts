import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '36133e40-92e3-489d-96b1-45b9bd255499',
      redirectUri: 'http://localhost:4200/',

    }
  });
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'twilio-deomo';
  loggedIn = false;

  constructor(private msalService: MsalService) {
  }
  ngOnInit(): void {
    this.msalService.initialize().subscribe(res => {
      console.log('init done.');

    });
  }

  onLogInClicked() {
    console.log('onlgin clicked');
    this.msalService.loginPopup({
      scopes: [
        'api://94b7ddc6-1835-44a6-844b-f2d8b36a6971/Core6APIScope/PublicScope',
        //'api://94b7ddc6-1835-44a6-844b-f2d8b36a6971/Core6APIScope/PrivateScope'
      ]
    }).subscribe(res => {
      if (res != null && res.account != null) {
        this.loggedIn = true;
      }
    })
  }

  onLogOutClicked() {
    this.loggedIn = false;
  }

  onTestClicked(){
    console.log('test clicked');
  }

}
