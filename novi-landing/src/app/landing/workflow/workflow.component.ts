import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Inbox, ListChecks, Zap, Rocket } from 'lucide-angular';

@Component({
  selector: 'app-workflow',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {
  protected readonly Inbox = Inbox;
  protected readonly ListChecks = ListChecks;
  protected readonly Zap = Zap;
  protected readonly Rocket = Rocket;

  protected readonly steps = [
    {
      number: '01',
      icon: Inbox,
      title: 'Capture',
      body: 'Turn Slack threads, emails and hallway talks into tasks in one click. Nothing gets lost in the noise.',
      tint: 'from-accent/25 to-accent/5 text-accent-soft'
    },
    {
      number: '02',
      icon: ListChecks,
      title: 'Plan',
      body: 'Prioritize on boards, scope in sprints and agree on dates — all in the same place you work.',
      tint: 'from-sky-500/25 to-sky-500/5 text-sky-300'
    },
    {
      number: '03',
      icon: Zap,
      title: 'Execute',
      body: 'Assign owners, move cards, attach files and discuss inline. Momentum never leaves the workspace.',
      tint: 'from-amber-500/25 to-amber-500/5 text-amber-300'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Ship & learn',
      body: 'Track velocity, review what shipped and carry lessons into the next cycle. A loop, not a deadline.',
      tint: 'from-emerald-500/25 to-emerald-500/5 text-emerald-300'
    }
  ];
}