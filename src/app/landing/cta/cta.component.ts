import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-cta',
  imports: [LucideAngularModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  protected readonly ArrowRight = ArrowRight;
}