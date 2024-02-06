import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserProfile } from '../Models/UserProfile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  test: string = "test string";
  @Input()
  authObject: any = {
    authority: ''
    
  };

  userProfile: UserProfile = new UserProfile();

  constructor(private authService: AuthService){
    
    this.authService.userProfileChangeTracker.subscribe(data =>{
      alert('data received');
      this.authObject = data;
    });
  }

  getAuthService(){
    return this.authService;
  }

  getAuthObject(){
  }
}
