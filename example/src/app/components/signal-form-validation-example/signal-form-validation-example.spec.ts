import { TestBed } from '@angular/core/testing';
import { SignalFormValidationExampleComponent } from './signal-form-validation-example';
import { By } from '@angular/platform-browser';

describe('SignalFormValidationExampleComponent', () => {
    let fixture: any;
    let component: SignalFormValidationExampleComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SignalFormValidationExampleComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SignalFormValidationExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('debe crearse correctamente', () => {
        expect(component).toBeTruthy();
    });



    it('debe deshabilitar el botón si el formulario es inválido', () => {
        fixture.detectChanges();
        const button = fixture.debugElement.query(By.css('button'));
        expect(button.nativeElement.disabled).toBe(true);
    });

    it('debe habilitar el botón si el formulario es válido', () => {
        component.model.set({ name: 'Daniel', email: 'daniel@correo.com' });
        fixture.detectChanges();
        const button = fixture.debugElement.query(By.css('button'));
        expect(button.nativeElement.disabled).toBe(false);
    });
});
