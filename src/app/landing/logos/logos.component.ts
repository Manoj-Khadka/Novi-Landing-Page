import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logos',
  imports: [CommonModule],
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.scss'
})
export class LogosComponent {
  protected readonly logos = [
    { name: 'Nova Labs', class: 'font-serif text-lg font-semibold tracking-tight' },
    { name: 'Cascade', class: 'font-mono text-base font-medium tracking-[0.2em]' },
    { name: 'FATHOM', class: 'text-lg font-bold tracking-[0.25em]' },
    { name: 'Northwind', class: 'font-serif text-lg italic font-medium' },
    { name: 'Arclight', class: 'text-lg font-light tracking-wide' },
    { name: 'Pixelforge', class: 'text-lg font-bold tracking-tight' },
    { name: 'VANTAGE', class: 'font-mono text-base font-bold tracking-widest' },
    { name: 'Brightline', class: 'text-lg font-semibold' }
  ];
}