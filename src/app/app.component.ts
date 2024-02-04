import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twilio-deomo';
  loggedIn = false;
  public isLoggedIn(){
    return this.loggedIn;
  }

  onLogInClicked(){
    this.loggedIn = true;
  }

  onLogOutClicked(){
    this.loggedIn = false;
  }

}
