import { Component } from '@angular/core';
import { Model } from '../repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private model: Model = new Model();
  private messages = ["Total", "Price"];
  private index = 0;

  get count(): number {
    return this.model.getProducts().length;
  }

  get total(): string {
    return this.model.getProducts().
      reduce((total, p) => total + (p.price ?? 0), 0).toFixed(2);
  }

  get message(): string {
    return `${this.messages[this.index]} $${this.total}`
  }

  toggleMessage(): void {
    this.index = (this.index + 1) % 2;
  }

  removeProduct(): void {
    this.model.deleteProduct(this.model.getProducts()[0]?.id ?? 0);
  }
}
