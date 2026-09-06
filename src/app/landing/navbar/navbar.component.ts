import { Component, effect, HostListener, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Menu, X, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  readonly scrolled = signal(false);
  readonly open = signal(false);

  protected readonly Menu = Menu;
  protected readonly X = X;
  protected readonly ArrowRight = ArrowRight;

  readonly links = [
    { label: 'Features', href: '#features' },
    { label: 'Customers', href: '#customers' },
    { label: 'Resources', href: '#faq' },
    { label: 'Pricing', href: '#pricing' }
  ];

  private readonly bodyLock = effect(() => {
    document.body.style.overflow = this.open() ? 'hidden' : '';
  });

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('window:keydown.esc', [])
  onEscape() {
    this.close();
  }

  toggle() {
    this.open.set(!this.open());
  }

  close() {
    if (this.open()) {
      this.open.set(false);
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}