import { SimpleDataSource } from "./SimpleDataSource.model";
import { Product } from "./product.model";

export class Model {
    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => { this.products.push(p) });
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product | undefined {
        return this.products.find(p => p.id == id);
    }

    saveProduct(product: Product): void {
        if (product.id == 0 || product.id == undefined) {
            product.id = this.generateId();
            this.products.push(product);
        } else {
            let index = this.products.findIndex(p => p.id == product.id);
            if (index > -1) {
                this.products.splice(index, 1, product);
            }
        }
    }

    deleteProduct(id: number): void {
        let index = this.products.findIndex(p => p.id == id);
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    generateId(): number {
        let result = 100;
        while (this.getProduct(result) != null) {
            result++;
        }
        return result;
    }
}