import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements AfterViewInit {
  protected readonly stats = [
    { target: 5000, suffix: '+', decimals: 0, label: 'Teams' },
    { target: 40, suffix: '%', decimals: 0, label: 'Faster Delivery' },
    { target: 99.9, suffix: '%', decimals: 1, label: 'Uptime' },
    { target: 4.9, suffix: '', decimals: 1, label: 'Rating' }
  ];

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const nums = this.el.nativeElement.querySelectorAll<HTMLElement>('.stat-num');
    if (!nums.length) {
      return;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animate = (targetEl: HTMLElement) => {
      const target = parseFloat(targetEl.dataset['target'] ?? '0');
      const decimals = parseInt(targetEl.dataset['decimals'] ?? '0', 10);

      const setValue = (value: number) => {
        targetEl.textContent = value.toFixed(decimals);
      };

      if (reduced) {
        setValue(target);
        return;
      }

      const state = { value: 0 };
      gsap.to(state, {
        value: target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => setValue(state.value)
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      nums.forEach(animate);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const target = entry.target as HTMLElement;
          observer.unobserve(target);
          animate(target);
        });
      },
      { threshold: 0.3 }
    );

    nums.forEach((num) => observer.observe(num));
  }
}