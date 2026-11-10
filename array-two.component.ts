import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrayTwo } from '../classes/arrayTwo';

@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './array-two.component.html',
  styleUrl: './array-two.component.css'
})
export class ArrayTwoComponent {
  arrayTwo: ArrayTwo = new ArrayTwo();
  nInput: number | null = null;
  hasResult: boolean = false;
  errorMessage: string = '';

  calculate(): void {
    this.errorMessage = '';
    this.hasResult = false;

    if (this.nInput === null || this.nInput < 1) {
      this.errorMessage = 'Введіть натуральне число n (n ≥ 1)!';
      return;
    }

    const n = Math.floor(this.nInput);
    this.arrayTwo.genArray(n);
    this.arrayTwo.countPositive();
    this.hasResult = true;
  }
}