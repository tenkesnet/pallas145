import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { Model } from "./model/repository.model";
import { Product } from "./model/product.model";

@Component({
    selector: "simple",
    templateUrl: './simple.component.html'

})
export class SimpleComponent {
    category: string = "Chess";
    highlighted: boolean = false;

    @Output("pa-highlight")
    change = new EventEmitter<boolean>();

    @Input("pa-model")
    model?: Model;

    constructor(private repository: Model) { }

    getProducts(): Product[] {
        return this.model == undefined ? [] :
            this.model.Products()
                .filter(p => p.category == this.category);

    }

    @HostListener("mouseenter", ["$event.type"])
    @HostListener("mouseleave", ["$event.type"])
    setHighlight(type: string) {
        this.highlighted = type == "mouseenter";
        this.change.emit(this.highlighted);
    }
}
