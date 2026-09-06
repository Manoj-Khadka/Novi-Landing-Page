import {
  AfterViewInit,
  Component,
  ElementRef,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Lightbulb, ListChecks, Zap, Rocket, ChevronDown } from 'lucide-angular';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-workflow',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent implements AfterViewInit {
  private readonly el: HTMLElement = inject(ElementRef<HTMLElement>).nativeElement;

  protected readonly Lightbulb = Lightbulb;
  protected readonly ListChecks = ListChecks;
  protected readonly Zap = Zap;
  protected readonly Rocket = Rocket;
  protected readonly ChevronDown = ChevronDown;

  protected readonly steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Ideas',
      body: 'Capture thoughts, requests and stray threads as tasks the moment they show up. Nothing disappears in the noise.'
    },
    {
      number: '02',
      icon: ListChecks,
      title: 'Planning',
      body: 'Break big goals into boards, sprints and dates — visible to everyone, no status meetings required.'
    },
    {
      number: '03',
      icon: Zap,
      title: 'Execution',
      body: 'Move work forward with clear owners, live updates and discussion inline. Momentum never leaves the workspace.'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch',
      body: 'Ship, celebrate and carry every lesson into the next cycle. A loop, not a deadline.'
    }
  ];

  ngAfterViewInit(): void {
    const mm = gsap.matchMedia();
    const sec = this.el;

    mm.add({ all: 1, reduced: '(prefers-reduced-motion: reduce)' }, (ctx) => {
      const { reduced } = ctx.conditions as { reduced: boolean };
      if (reduced) {
        sec.querySelectorAll<HTMLElement>('.wf-card, .wf-ico, .wf-arrow, .wf-track-fill').forEach((el) => {
          gsap.set(el, { clearProps: 'all' });
        });
        ScrollTrigger.refresh();
        return;
      }

      const icons = sec.querySelectorAll<HTMLElement>('.wf-ico');
      const cards = sec.querySelectorAll<HTMLElement>('.wf-card');
      const arrows = sec.querySelectorAll<HTMLElement>('.wf-arrow');
      const fill = sec.querySelector<HTMLElement>('.wf-track-fill');
      const rail = sec.querySelector<HTMLElement>('.wf-rail') ?? sec;

      const tl = gsap.timeline({
        scrollTrigger: { trigger: rail, start: 'top 88%', once: true }
      });

      tl.fromTo(
        fill,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.4, ease: 'none', transformOrigin: 'top' },
        0
      )
        .fromTo(
          cards,
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.18, ease: 'power3.out' },
          0.5
        )
        .fromTo(
          icons,
          { y: 28, autoAlpha: 0, scale: 0.6 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.18, ease: 'back.out(1.8)' },
          0.9
        )
        .fromTo(
          arrows,
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.35, stagger: 0.18, ease: 'back.out(2.2)' },
          1.3
        )
        .eventCallback('onComplete', () => {
          sec.querySelectorAll<HTMLElement>('.wf-card, .wf-ico, .wf-arrow, .wf-track-fill').forEach((el) => {
            el.style.translate = '';
            el.style.scale = '';
            el.style.rotate = '';
          });
        });
    });
  }
}