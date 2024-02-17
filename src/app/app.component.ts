import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Discount Cal', url: '/cal/Discount Cal', icon: 'calculator' },
    { title: 'About', url: '/about/About', icon: 'call' },
    { title: 'Develop By', url: '/developer/Develop By', icon: 'bug' },
    { title: 'Setting', url: '/settings/Settings', icon: 'cog' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
