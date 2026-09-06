import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { LogosComponent } from './logos/logos.component';
import { FeaturesComponent } from './features/features.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { StatsComponent } from './stats/stats.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing',
  imports: [
    NavbarComponent,
    HeroComponent,
    LogosComponent,
    FeaturesComponent,
    WorkflowComponent,
    ShowcaseComponent,
    StatsComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('root') root!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const root = this.root.nativeElement;
    const mm = gsap.matchMedia();

    mm.add({ all: 1, reduced: '(prefers-reduced-motion: reduce)' }, (ctx) => {
      const { reduced } = ctx.conditions as { reduced: boolean };

      if (reduced) {
        root.querySelectorAll<HTMLElement>('[class*="hero-item"], .hero-mockup, .hero-card').forEach((el) => {
          gsap.set(el, { opacity: 1, clearProps: 'all' });
        });
        root.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
          gsap.set(el, { clearProps: 'all' });
        });
        ScrollTrigger.refresh();
        return;
      }

      const heroItems = root.querySelectorAll<HTMLElement>('.hero-item');
      const heroMock = root.querySelector<HTMLElement>('.hero-mockup');
      const heroCards = root.querySelectorAll<HTMLElement>('.hero-card');

      const intro = gsap.timeline({ delay: 0.15 });
      intro
        .fromTo(
          heroItems,
          { y: 26, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12 }
        )
        .fromTo(
          heroMock,
          { y: 64, autoAlpha: 0, scale: 0.965 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 1.15, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          heroCards,
          { y: 30, autoAlpha: 0, scale: 0.96 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.6, ease: 'power2.out', stagger: 0.08 },
          '-=0.85'
        )
        .add(() => {
          heroCards.forEach((card, i) => {
            gsap.fromTo(
              card,
              { y: -10 },
              {
                y: 10,
                duration: 2.6 + (i % 2) * 0.6,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                delay: i * 0.35
              }
            );
          });
        }, '>');

      const reveals = root.querySelectorAll<HTMLElement>('.reveal');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 34, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: 'power2.out',
            delay: parseInt(el.dataset['delay'] ?? '0', 10) * 0.1,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            onComplete: () => {
              el.style.translate = '';
              el.style.scale = '';
              el.style.rotate = '';
            }
          }
        );
      });

      ScrollTrigger.refresh();
    });
  }
}