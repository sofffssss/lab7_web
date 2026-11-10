import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrayOne } from '../classes/arrayOne';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './array-one.component.html',
  styleUrl: './array-one.component.css'
})
export class ArrayOneComponent {
  arrayOne: ArrayOne = new ArrayOne();
  
  // Масив для зберігання значень
  numbers: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  hasResult: boolean = false;
  errorMessage: string = '';

  // Цей метод допомагає Angular не плутати поля
  trackByIndex(index: number, item: any): number {
    return index;
  }

  // Обробка вводу в конкретне поле
  onValueChange(event: any, index: number) {
    let val = event.target.value;
    
    // Дозволяємо тільки цифри та мінус на початку
    val = val.replace(/[^0-9-]/g, '');
    
    // Якщо це просто мінус, зберігаємо як 0 (або можна залишити порожнім)
    if (val === '-' || val === '') {
      this.numbers[index] = 0;
      event.target.value = val; // Залишаємо мінус у полі для зручності
    } else {
      this.numbers[index] = parseInt(val, 10);
      event.target.value = val; // Оновлюємо поле
    }
  }

  calculate(): void {
    this.errorMessage = '';
    this.hasResult = false;

    // Перевіряємо, чи всі поля заповнені (перевіряємо на NaN)
    for (let i = 0; i < this.numbers.length; i++) {
      if (isNaN(this.numbers[i])) {
        this.errorMessage = `Поле №${i + 1} містить некоректне число!`;
        return;
      }
    }

    this.arrayOne.setArray(this.numbers);
    this.arrayOne.findProduct();
    this.hasResult = true;
  }

  clear(): void {
    // Створюємо новий масив, щоб Angular точно побачив зміни
    this.numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.hasResult = false;
    this.errorMessage = '';
  }
}