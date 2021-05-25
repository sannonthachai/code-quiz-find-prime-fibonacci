import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _input: number
  selectedValue: string
  calType: string[] = ["prime", "fibonacci"]
  result: boolean

  get input(): number {
    return this._input
  }

  set input(newInput: number) {
    switch (true) {
      case newInput != Math.floor(newInput):
        this._input = Math.round(newInput)
        break
      case newInput < 0:
        this._input = 1
        break
      default:
        this._input = newInput
    }

    this.cal(this.selectedValue)
  }

  isPrime(num: number = 1): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  isFibonacci(query: number = 1, count: number = 1, last: number = 0): boolean {
    if (count < query)
      return this.isFibonacci(query, count + last, count);
    if (count === query)
      return true;
    return false;
  }

  cal(calType: string): void {
    switch (calType) {
      case this.calType[0]:
        this.result = this.isPrime(this.input)
        break
      case this.calType[1]:
        this.result = this.isFibonacci(this.input)
        break
    }
  }
}
