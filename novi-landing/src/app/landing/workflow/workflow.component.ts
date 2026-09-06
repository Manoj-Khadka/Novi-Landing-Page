import {
  AfterViewInit,
  Component,
  ElementRef,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Lightbulb, ListChecks, Zap, Rocket } from 'lucide-angular';
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

    const positionTrack = (): void => {
      const segs = sec.querySelectorAll<HTMLElement>('.wf-track-seg');
      const rail = sec.querySelector<HTMLElement>('.wf-rail');
      const icos = sec.querySelectorAll<HTMLElement>('.wf-ico');
      const half = 24;
      if (!rail || icos.length < 2) return;
      const centerInside = (ico: HTMLElement): number => {
        const step = ico.closest<HTMLElement>('.wf-step') ?? ico;
        return step.offsetTop + ico.offsetTop + ico.offsetHeight / 2;
      };
      const tops = Array.from(icos).map(centerInside);
      const railH = rail.offsetHeight;
      segs.forEach((seg, k) => {
        if (k + 1 >= tops.length) return;
        const top = tops[k] + half;
        const bottom = Math.max(railH - (tops[k + 1] - half), 0);
        seg.style.top = `${top}px`;
        seg.style.bottom = `${bottom}px`;
      });
    };

    positionTrack();
    const railEl = sec.querySelector<HTMLElement>('.wf-rail');
    const ro =
      railEl && typeof ResizeObserver !== 'undefined' ? new ResizeObserver(positionTrack) : null;
    if (ro && railEl) ro.observe(railEl);

    mm.add({ all: 1, reduced: '(prefers-reduced-motion: reduce)' }, (ctx) => {
      ctx.add(() => ro?.disconnect());
      const { reduced } = ctx.conditions as { reduced: boolean };
      if (reduced) {
        sec.querySelectorAll<HTMLElement>('.wf-card, .wf-ico, .wf-node, .wf-track-fill').forEach((el) => {
          gsap.set(el, { clearProps: 'all' });
        });
        ScrollTrigger.refresh();
        return;
      }

      const icons = sec.querySelectorAll<HTMLElement>('.wf-ico');
      const cards = sec.querySelectorAll<HTMLElement>('.wf-card');
      const nodes = sec.querySelectorAll<HTMLElement>('.wf-node');
      const fills = sec.querySelectorAll<HTMLElement>('.wf-track-fill');

      const activate = (i: number): void => {
        icons[i]?.classList.add('is-active');
      };
      const settle = (): void => {
        icons.forEach((el) => {
          el.classList.remove('is-active');
          el.classList.add('is-lit');
        });
        icons.forEach((el) => {
          el.style.translate = '';
          el.style.scale = '';
          el.style.rotate = '';
        });
        cards.forEach((el) => {
          el.style.translate = '';
          el.style.scale = '';
          el.style.rotate = '';
        });
        nodes.forEach((el) => {
          el.style.translate = '';
          el.style.scale = '';
          el.style.rotate = '';
        });
        fills.forEach((el) => {
          el.style.translate = '';
          el.style.scale = '';
          el.style.rotate = '';
        });
      };

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sec.querySelector('.wf-rail'), start: 'top 88%', once: true }
      });

      tl.fromTo(
        fills[0],
        { scaleY: 0 },
        { scaleY: 1, duration: 0.7, ease: 'none', transformOrigin: 'top' },
        0
      )
        .fromTo(
          cards,
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.18, ease: 'power3.out' },
          0.35
        )
        .fromTo(
          icons,
          { y: 28, autoAlpha: 0, scale: 0.6 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.18, ease: 'back.out(1.8)' },
          0.75
        )
        .fromTo(
          fills[1],
          { scaleY: 0 },
          { scaleY: 1, duration: 0.7, ease: 'none', transformOrigin: 'top' },
          1.2
        )
        .fromTo(
          nodes,
          { scale: 0.4, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.35, stagger: 0.18, ease: 'back.out(2.2)' },
          1.5
        )
        .fromTo(
          fills[2],
          { scaleY: 0 },
          { scaleY: 1, duration: 0.7, ease: 'none', transformOrigin: 'top' },
          2.0
        )
        .call(() => activate(0), undefined, 0.75)
        .call(() => activate(1), undefined, 1.25)
        .call(() => activate(2), undefined, 1.9)
        .call(() => activate(3), undefined, 2.35)
        .eventCallback('onComplete', settle);
    });
  }
}