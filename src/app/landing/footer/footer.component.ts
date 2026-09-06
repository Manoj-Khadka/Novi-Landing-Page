import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Twitter, Github, Linkedin, Youtube } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected subscribed = false;

  protected readonly social = [
    { label: 'Twitter', icon: Twitter },
    { label: 'GitHub', icon: Github },
    { label: 'LinkedIn', icon: Linkedin },
    { label: 'YouTube', icon: Youtube }
  ];

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