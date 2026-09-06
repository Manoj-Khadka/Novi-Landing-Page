import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { CheckCircle2 } from 'lucide-angular';

@Component({
  selector: 'app-showcase',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  protected readonly CheckCircle2 = CheckCircle2;

  protected readonly rows = [
    {
      eyebrow: 'Plan',
      title: 'Projects without the chaos',
      body: 'Turn strategy into structure. Roadmaps, milestones and status roll up so leadership sees reality, and makers see the next task.',
      bullets: [
        'Initiatives with owners, dates and status',
        'Roll-ups for leadership and roadmaps',
        'Templates that encode your process'
      ],
      icon: CheckCircle2,
      reverse: false
    },
    {
      eyebrow: 'Execute',
      title: 'Tasks that actually get done',
      body: 'Boards, lists and subtasks keep momentum visible. Comments, files and activity live on the task — not scattered across five tools.',
      bullets: [
        'Drag-and-drop boards and focused lists',
        'Inline comments, files and mentions',
        'Automation for the busywork'
      ],
      icon: CheckCircle2,
      reverse: true
    },
    {
      eyebrow: 'Ship',
      title: 'A schedule everyone trusts',
      body: 'Estimate, plan sprints and watch timelines move as work progresses. Spot risk early, celebrate launches on time.',
      bullets: [
        'Sprints, milestones and shared calendar',
        'Timeline view that stays current',
        'Launch readiness checklist'
      ],
      icon: CheckCircle2,
      reverse: false
    }
  ];

  protected readonly projects = [
    { name: 'Mobile App v2', team: 'Engineering', tint: 'bg-sky-500/15 text-sky-300', bar: 'w-[72%]', barClass: 'bg-sky-400', pct: '72%', initials: 'MA' },
    { name: 'New brand identity', team: 'Design', tint: 'bg-fuchsia-500/15 text-fuchsia-300', bar: 'w-[45%]', barClass: 'bg-fuchsia-400', pct: '45%', initials: 'NB' },
    { name: 'Onboarding refresh', team: 'Product', tint: 'bg-emerald-500/15 text-emerald-300', bar: 'w-[88%]', barClass: 'bg-emerald-400', pct: '88%', initials: 'OR' },
    { name: 'Analytics dashboard', team: 'Engineering', tint: 'bg-amber-500/15 text-amber-300', bar: 'w-[22%]', barClass: 'bg-amber-400', pct: '22%', initials: 'AD' }
  ];

  protected readonly tasks = [
    { title: 'Unify the account settings screen', tag: 'Dev', tagClass: 'bg-violet-500/10 text-violet-300', initials: 'KW', avatarClass: 'from-violet-400 to-purple-600', state: 'In review' },
    { title: 'Hand-tested checkout on staging', tag: 'QA', tagClass: 'bg-emerald-500/10 text-emerald-300', initials: 'MP', avatarClass: 'from-sky-400 to-indigo-600', state: 'Done' },
    { title: 'Write launch-day runbook', tag: 'Ops', tagClass: 'bg-amber-500/10 text-amber-300', initials: 'LB', avatarClass: 'from-amber-400 to-orange-600', state: 'In progress' }
  ];

  protected readonly timelineWeeks = ['W42', 'W43', 'W44', 'W45', 'W46', 'W47'];
  protected readonly bars = [
    { name: 'Design system', work: 'Design', tint: 'bg-sky-500/25', barClass: 'bg-sky-400', start: 0, width: 3 },
    { name: 'Core app', work: 'Eng', tint: 'bg-violet-500/25', barClass: 'bg-violet-400', start: 1, width: 4 },
    { name: 'Billing', work: 'Eng', tint: 'bg-emerald-500/25', barClass: 'bg-emerald-400', start: 2, width: 3 },
    { name: 'Launch', work: 'All', tint: 'bg-amber-500/25', barClass: 'bg-amber-400', start: 4, width: 2 }
  ];
}