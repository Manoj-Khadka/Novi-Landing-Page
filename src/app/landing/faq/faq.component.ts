import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  protected readonly ChevronDown = ChevronDown;

  protected readonly openIndex = signal<number | null>(0);

  protected readonly items = [
    {
      q: 'How is NOVI different from other project tools?',
      a: 'NOVI brings projects, tasks, docs and schedules into one workspace, so your team stops paying the context-switching tax. You plan on the same screen you work on, and the plan stays in sync automatically.'
    },
    {
      q: 'Is there really a free plan?',
      a: 'Yes. The Starter plan is free forever for teams of up to 10 people with unlimited projects and tasks. No credit card required.'
    },
    {
      q: 'Can we move our data from another tool?',
      a: 'You can import from CSV, Notion, Trello, Asana and Jira in a few clicks. A guided importer maps your projects, statuses and assignments so nothing is lost in the move.'
    },
    {
      q: 'Does NOVI work for design teams?',
      a: 'Absolutely. Docs pair with boards, and Figma previews render right inside tasks, so designers review work without leaving the workspace.'
    },
    {
      q: 'What about integrations?',
      a: 'NOVI connects to Slack, GitHub, Figma, Google Calendar, Linear and 60+ more tools. Incoming events become tasks; activity flows back out to your channels.'
    },
    {
      q: 'Is my data secure?',
      a: 'Every workspace is encrypted at rest and in transit, hosted on SOC 2 Type II infrastructure. Data is backed up continuously and you can export everything anytime.'
    }
  ];

  toggle(index: number) {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}