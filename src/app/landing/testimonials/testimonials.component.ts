import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  protected readonly testimonials = [
    {
      quote:
        'We replaced four tools with NOVI. The context switching alone saved our team hours every week.',
      name: 'Amara Chen',
      role: 'Product Lead, Nova Labs',
      initials: 'AC',
      avatarClass: 'from-sky-400 to-indigo-600'
    },
    {
      quote:
        'The task and doc pairing is the killer feature. Our PRDs, specs and roadmaps finally live in one place.',
      name: 'Daniel Okafor',
      role: 'Design Director, Brightline',
      initials: 'DO',
      avatarClass: 'from-fuchsia-400 to-purple-600'
    },
    {
      quote:
        'As a five-person agency, NOVI is the first tool that scaled with us. Onboarding clients took one afternoon.',
      name: 'Sofia Reyes',
      role: 'Co-founder, Pixelforge',
      initials: 'SR',
      avatarClass: 'from-emerald-400 to-teal-600'
    }
  ];
}