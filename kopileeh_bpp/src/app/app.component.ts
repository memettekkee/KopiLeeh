import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    
    <!-- Header -->
    <app-header/>

    <!-- Routes -->
    <router-outlet />

    <!-- Footer -->

  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-site';
}
