import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header style="text-align: center; padding: 20px; background: #2c3e50; color: white;">
      <h1>Лабораторна робота №7</h1>
      <h2>Фреймворк Angular</h2>
      <p>Виконала: студентка групи АнД-31/2 Ткачук Софія</p>
    </header>
  `
})
export class HeaderComponent {}