/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { QuantityComponent } from './quantity.component';

let component: QuantityComponent;
let fixture: ComponentFixture<QuantityComponent>;

describe('quantity component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ QuantityComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(QuantityComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});