import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import{FooterComponent} from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HomeComponent,GroupsComponent ,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-1--Week-16';
}
