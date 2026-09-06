import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Kanban, MessageCircle, Calendar, Import } from 'lucide-angular';

@Component({
  selector: 'app-features',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  protected readonly Kanban = Kanban;
  protected readonly MessageCircle = MessageCircle;
  protected readonly Calendar = Calendar;
  protected readonly Import = Import;

  protected readonly features = [
    {
      icon: Kanban,
      title: 'Boards that move at your speed.',
      body: 'Drag tasks across lanes, watch statuses shift and feel the whole plan breathe. Sprint or ship, the board keeps pace with your team.',
      tint: 'from-accent/20 to-accent/5 text-accent-soft'
    },
    {
      icon: MessageCircle,
      title: 'Threads, not another inbox.',
      body: 'Discuss work where it lives — inside the task. No forwarding, no follow-ups, no buried replies.',
      tint: 'from-sky-500/20 to-sky-500/5 text-sky-300'
    },
    {
      icon: Calendar,
      title: 'One timeline for the whole team.',
      body: 'Milestones, sprints and deadlines on a single shared calendar. Everyone sees what ships this week — without asking.',
      tint: 'from-amber-500/20 to-amber-500/5 text-amber-300'
    },
    {
      icon: Import,
      title: 'Works the way you already do.',
      body: 'Bring your tasks, docs and chat history in a few clicks. Adopt NOVI without leaving your old habits behind.',
      tint: 'from-emerald-500/20 to-emerald-500/5 text-emerald-300'
    }
  ];
}