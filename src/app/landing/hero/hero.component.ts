import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import {
  ArrowRight,
  Play,
  Star,
  Lock,
  Search,
  Bell,
  Smile,
  Send,
  CalendarDays,
  Clock,
} from 'lucide-angular';

interface LaneTask {
  title: string;
  tag: string;
  dot: string;
  initials: string;
  initialsClass: string;
}

interface Lane {
  name: string;
  dot: string;
  tasks: LaneTask[];
}

interface ChatMsg {
  initials: string;
  avatarClass: string;
  name: string;
  time: string;
  text: string;
}

interface ProgressRow {
  label: string;
  value: number;
  barClass: string;
}

interface DeadlineRow {
  label: string;
  sub: string;
  priorityClass: string;
  iconName: typeof CalendarDays;
  iconClass: string;
}

const AVATARS = [
  'bg-gradient-to-br from-sky-400 to-indigo-600',
  'bg-gradient-to-br from-amber-400 to-orange-600',
  'bg-gradient-to-br from-emerald-400 to-teal-600',
  'bg-gradient-to-br from-fuchsia-400 to-purple-600',
  'bg-gradient-to-br from-rose-400 to-pink-600',
];

@Component({
  selector: 'app-hero',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected readonly ArrowRight = ArrowRight;
  protected readonly Play = Play;
  protected readonly Star = Star;
  protected readonly Lock = Lock;
  protected readonly Search = Search;
  protected readonly Bell = Bell;
  protected readonly Smile = Smile;
  protected readonly Send = Send;
  protected readonly CalendarDays = CalendarDays;
  protected readonly Clock = Clock;

  protected readonly stars = [1, 2, 3, 4, 5];

  protected readonly board = {
    title: 'Sprint Board',
    meta: 'Sprint 24 · 7 tasks',
    lanes: [
      {
        name: 'To do',
        dot: 'bg-dim',
        tasks: [
          {
            title: 'Onboarding',
            tag: 'Design',
            dot: 'bg-sky-400',
            initials: 'MP',
            initialsClass: AVATARS[0],
          },
          {
            title: 'Empty state',
            tag: 'Design',
            dot: 'bg-sky-400',
            initials: 'SO',
            initialsClass: AVATARS[1],
          },
        ],
      },
      {
        name: 'Progress',
        dot: 'bg-accent',
        tasks: [
          {
            title: 'Drag & drop',
            tag: 'Dev',
            dot: 'bg-violet-400',
            initials: 'KW',
            initialsClass: AVATARS[2],
          },
        ],
      },
      {
        name: 'Done',
        dot: 'bg-emerald-400',
        tasks: [
          {
            title: 'design tokens',
            tag: 'Dev',
            dot: 'bg-violet-400',
            initials: 'MC',
            initialsClass: AVATARS[4],
          },
        ],
      },
    ] as Lane[],
  };

  protected readonly chat = {
    title: 'Team Chat',
    messages: [
      {
        initials: 'MK',
        avatarClass: AVATARS[0],
        name: 'Manoj',
        time: '09:41',
        text: 'Can we review the mobile flow at 2?',
      },
      {
        initials: 'SC',
        avatarClass: AVATARS[4],
        name: 'Sushank',
        time: '09:43',
        text: 'Ship target moved to Friday — updated the board.',
      },
      {
        initials: 'GK',
        avatarClass: AVATARS[2],
        name: 'Gaurav',
        time: '09:46',
        text: 'LGTM. I added the launch checklist.',
      },
    ] as ChatMsg[],
  };

  protected readonly progress = {
    title: 'Project Progress',
    total: '72%',
    rows: [
      { label: 'Mobile App', value: 72, barClass: 'from-accent to-accent-soft' },
      { label: 'Brand Identity', value: 45, barClass: 'from-accent-cyan to-sky-400' },
      { label: 'Onboarding', value: 88, barClass: 'from-emerald-400 to-teal-500' },
      { label: 'Analytics', value: 22, barClass: 'from-dim to-muted' },
    ] as ProgressRow[],
  };

  protected readonly deadlines = {
    title: 'Upcoming Deadlines',
    chip: 'This week',
    rows: [
      {
        label: 'Launch checklist',
        sub: 'Release 2.0 · due Fri',
        priorityClass: 'High',
        iconName: CalendarDays,
        iconClass: 'text-accent-soft',
      },
      {
        label: 'QA handoff',
        sub: 'Mobile polish · due Mon',
        priorityClass: 'Medium',
        iconName: Clock,
        iconClass: 'text-sky-300',
      },
      {
        label: 'Release notes',
        sub: 'Docs · due Nov 20',
        priorityClass: 'Low',
        iconName: CalendarDays,
        iconClass: 'text-emerald-300',
      },
    ] as DeadlineRow[],
  };
}
