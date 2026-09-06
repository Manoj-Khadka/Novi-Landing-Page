import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Check, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  protected readonly Check = Check;
  protected readonly Sparkles = Sparkles;

  protected readonly plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      tagline: 'For small teams getting organized.',
      cta: 'Start for free',
      highlight: false,
      features: [
        'Up to 10 members',
        'Unlimited projects & tasks',
        'Docs & checklists',
        'Mobile & desktop apps',
        'Community support'
      ]
    },
    {
      name: 'Team',
      price: '$12',
      period: 'per user / month',
      tagline: 'For teams that ship every week.',
      cta: 'Start 14-day trial',
      highlight: true,
      features: [
        'Everything in Starter',
        'Timeline & roadmaps',
        'Automations & integrations',
        'Reports & workload view',
        'Priority support'
      ]
    },
    {
      name: 'Scale',
      price: 'Custom',
      period: 'annual billing',
      tagline: 'For agencies and companies with many projects.',
      cta: 'Talk to sales',
      highlight: false,
      features: [
        'Everything in Team',
        'Unlimited members',
        'SSO & advanced permissions',
        'Custom roles & audit log',
        'Dedicated success manager'
      ]
    }
  ];
}