export class ArrayOne {
  a: number[] = [];
  product: number = 1;      // добуток від'ємних елементів
  hasNegative: boolean = false;

  constructor() {
    this.a = [];
  }

  // Заповнення масиву з клавіатури (10 елементів)
  setArray(values: number[]): void {
    this.a = values;
    this.product = 1;
    this.hasNegative = false;
    for (let i = 0; i < this.a.length; i++) {
      if (this.a[i] < 0) {
        this.product *= this.a[i];
        this.hasNegative = true;
      }
    }
  }

  // Метод обчислення добутку від'ємних елементів
  findProduct(): number {
    this.product = 1;
    this.hasNegative = false;
    for (let i = 0; i < this.a.length; i++) {
      if (this.a[i] < 0) {
        this.product *= this.a[i];
        this.hasNegative = true;
      }
    }
    return this.hasNegative ? this.product : 0;
  }
}