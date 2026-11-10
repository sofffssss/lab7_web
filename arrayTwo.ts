export class ArrayTwo {
  a: number[][] = [];
  positiveCount: number = 0;

  constructor() {
    this.a = [];
  }

  // Генерація масиву A[1..n, 1..n], де aij = sin(i + j/2)
  genArray(n: number): void {
    this.a = [];
    for (let i = 1; i <= n; i++) {
      this.a[i - 1] = [];
      for (let j = 1; j <= n; j++) {
        this.a[i - 1][j - 1] = Math.sin(i + j / 2);
      }
    }
  }

  // Підрахунок додатніх елементів
  countPositive(): number {
    this.positiveCount = 0;
    for (let i = 0; i < this.a.length; i++) {
      for (let j = 0; j < this.a[i].length; j++) {
        if (this.a[i][j] > 0) {
          this.positiveCount++;
        }
      }
    }
    return this.positiveCount;
  }
}