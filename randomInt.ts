export class randomInt {
  randomInteger(min: number, max: number): number {
    // випадкове число від min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}