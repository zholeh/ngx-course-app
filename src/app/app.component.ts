import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ng060619';
  public bonus = 0.2;
  private salary = 3000;
  public account = {
    name: 'Igor'
  };

  public width = '100%';
  public content = '<span>Igor</span>';

  public getSalary(bonus: number): number {
    return Math.round(this.salary) * (1 + bonus);
  }

  public onClick(value: number, ev: MouseEvent): void {
    console.log(ev);
    console.log(value);
  }

  public search(el: HTMLInputElement): void {
    console.log(el);
  }
}
