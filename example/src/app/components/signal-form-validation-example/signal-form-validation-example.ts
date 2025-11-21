import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { form, required, email as emailValidator, minLength, Field } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'signal-form-example',
    standalone: true,
    templateUrl: './signal-form-validation-example.html',
    styleUrls: ['./signal-form-validation-example.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, Field, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule]
})
export class SignalFormValidationExampleComponent {
    model = signal<{ name: string; email: string }>({ name: '', email: '' });
    submitted = signal(false);

    form = form(this.model, (schema) => {
        required(schema.name, { message: 'El nombre es obligatorio.' });
        minLength(schema.name, 3, { message: 'El nombre debe tener al menos 3 caracteres.' });
        required(schema.email, { message: 'El email es obligatorio.' });
        emailValidator(schema.email, { message: 'El email no es válido.' });
    });

    submit(event: Event) {
        event.preventDefault();
        this.submitted.set(true);
        if (this.form().valid()) {
            alert('Formulario enviado correctamente');
            this.model.set({ name: '', email: '' });
            this.submitted.set(false);
        }
    }
}
