import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private authService:AuthService,private routes:Router){}

  title = 'Applications des gestions des devoirs a rendre(Assignments)';


  onclick()
  {
      if (!this.authService.loggedIn) {
        this.authService.logIn();
      }
      else
      {
          this.authService.logOut();
          this.routes.navigate(['/home']);

      }
  }

}
