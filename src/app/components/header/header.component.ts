import { Component, Input } from '@angular/core';

// component for the Navbar on top, only hosts the title/logo, passing that string as a "prop"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = 'AL-loy.Co';


}
