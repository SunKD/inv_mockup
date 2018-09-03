/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TopNavComponent } from './top-nav.component';

let component: TopNavComponent;
let fixture: ComponentFixture<TopNavComponent>;

describe('top-nav component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TopNavComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TopNavComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});