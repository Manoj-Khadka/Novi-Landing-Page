import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Github, Twitter, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly Github = Github;
  protected readonly Twitter = Twitter;
  protected readonly Linkedin = Linkedin;

  protected readonly columns = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Download']
    },
    {
      title: 'Company',
      links: ['About', 'Customers', 'Careers', 'Blog', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Docs', 'API', 'Community', 'Guides', 'Status']
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'DPA']
    }
  ];
}