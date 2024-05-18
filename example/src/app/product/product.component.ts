import { Component, computed, effect, signal } from '@angular/core';
import { Model } from '../repository.model';


@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  private model: Model = new Model();
  private messages = ["Total", "Price"];
  private index = signal<number>(0);

  // get count(): number {
  //   console.log("Invoke count()");
  //   return this.model.Products().length;
  // }
  count = computed(() => {
    return this.model.Products().length;
  });
  countEffect = effect(() => console.log("Invoke count()"));

  // get total(): string {
  //   console.log("Invoke total()");
  //   return this.model.Products().
  //     reduce((total, p) => total + (p.price ?? 0), 0).toFixed(2);
  // }

  total = computed(() => this.model.Products().reduce((total, p) => total + (p.price ?? 0), 0).toFixed(2));

  // get message(): string {
  //   return `${this.messages[this.index()]} $${this.total}`;
  // }
  message = computed(() => `${this.messages[this.index()]} $${this.total()}`);
  messageEffect = effect(() => console.log((`message value computed: ${this.message()}`)));


  toggleMessage(): void {
    //this.index = (this.index + 1) % 2;
    this.index.update(currentValue => (currentValue + 1) % 2);
  }

  removeProduct(): void {
    this.model.deleteProduct(this.model.Products()[0]?.id ?? 0);
  }
}
