import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SimpleComponent } from './simple.component';
describe("Jasmine Test Environment", () => {
    let fixture: ComponentFixture<SimpleComponent>;
    let component: SimpleComponent;


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleComponent]
        });
        fixture = TestBed.createComponent(SimpleComponent);
        component = fixture.componentInstance;
    })

    it("is defined", () => {
        expect(component).toBeDefined()
    });

    it("is working", () => {
        expect(true).toBe(true);
        expect(6).toBeGreaterThan(3);
    });
    it("test string value", () => expect("London").toMatch("^Lon"));
});