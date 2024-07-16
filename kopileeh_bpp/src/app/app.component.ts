import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
  template: `
    
    <!-- Header -->
    <app-header/>

    <app-home/>

    <!-- Routes -->
    <router-outlet />

    <!-- Footer -->
     <app-footer/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-site';
}
