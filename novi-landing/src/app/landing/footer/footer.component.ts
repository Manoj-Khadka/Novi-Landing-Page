import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected subscribed = false;

  protected readonly columns = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Blog']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Support', 'Community']
    }
  ];

  protected subscribe(event: Event): void {
    event.preventDefault();
    this.subscribed = true;
  }
}