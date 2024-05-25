import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { SimpleComponent } from './simple.component';
import { Model } from './model/repository.model';
import { RestDataSource } from './model/rest.datasource';
import { DebugElement, signal } from '@angular/core';
import { Product } from './model/product.model';
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from "@angular/core";
@Component({
    template: `<simple [pa-model]="model"></simple>`
})
class TestComponent {
    constructor(public model: Model) { }
    @ViewChild(SimpleComponent)
    SimpleComponent!: SimpleComponent;
}


describe("Jasmine Test Environment", () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: SimpleComponent;
    let mockRepository = {
        Products: signal([
            new Product(1, "test1", "Soccer", 100),
            new Product(2, "test2", "Chess", 100),
            new Product(3, "test3", "Soccer", 100)
        ])
    }
    let debugElement: DebugElement;
    let bindingElement: HTMLSpanElement;
    let divElement: HTMLDivElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleComponent, TestComponent],
            providers: [{ provide: Model, useValue: mockRepository }]
        });

        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            component = fixture.componentInstance.SimpleComponent;
            debugElement = fixture.debugElement
                .query(By.directive(SimpleComponent));
        });
    }));


    it("is defined", () => {
        expect(component).toBeDefined()
    });

    it("is working", () => {
        expect(true).toBe(true);
        expect(6).toBeGreaterThan(3);
    });
    it("test string value", () => expect("London").toMatch("^Lon"));

    it("filters categories", () => {
        component.category = "Chess"
        expect(component.getProducts().length).toBe(1);
        component.category = "Soccer";
        expect(component.getProducts().length).toBe(2);
        component.category = "Running";
        expect(component.getProducts().length).toBe(0);
    });

    // it("filters categories 2", () => {
    //     component.category = "Chess"
    //     fixture.detectChanges();
    //     expect(component.getProducts().length).toBe(1);
    //     expect(bindingElement.textContent).toContain("1");
    //     component.category = "Soccer";
    //     fixture.detectChanges();
    //     expect(component.getProducts().length).toBe(2);
    //     expect(bindingElement.textContent).toContain("2");
    //     component.category = "Running";
    //     fixture.detectChanges();
    //     expect(component.getProducts().length).toBe(0);
    //     expect(bindingElement.textContent).toContain("0");
    // });

    // it("handles mouse events", () => {
    //     expect(component.highlighted).toBeFalsy();
    //     expect(divElement.classList.contains("bg-success")).toBeFalsy();
    //     debugElement.triggerEventHandler("mouseenter",
    //         new Event("mouseenter"));
    //     fixture.detectChanges();
    //     expect(component.highlighted).toBeTruthy();
    //     expect(divElement.classList.contains("bg-success")).toBeTruthy();
    //     debugElement.triggerEventHandler("mouseleave",
    //         new Event("mouseleave"));
    //     fixture.detectChanges();
    //     expect(component.highlighted).toBeFalsy();
    //     expect(divElement.classList.contains("bg-success")).toBeFalsy();
    // });

    it("implements output property", () => {
        let highlighted: boolean = false;
        component.change.subscribe(value => highlighted = value);
        debugElement.triggerEventHandler("mouseenter",
            new Event("mouseenter"));
        expect(highlighted).toBeTruthy();
        debugElement.triggerEventHandler("mouseleave",
            new Event("mouseleave"));
        expect(highlighted).toBeFalsy();
    });

    it("receives the model through an input property", () => {
        component.category = "Chess";
        fixture.detectChanges();
        let products = mockRepository.Products()
            .filter(p => p.category == component.category);
        let componentProducts = component.getProducts();
        for (let i = 0; i < componentProducts.length; i++) {
            expect(componentProducts[i]).toEqual(products[i]);
        }
        expect(debugElement.query(By.css("span"))
            .nativeElement.textContent)
            .toContain(products.length);
    });
});