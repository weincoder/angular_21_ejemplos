import { Component, signal, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'linked-signal-example',
  standalone: true,
  imports: [CommonModule, FormsModule, MatLabel, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './linked-signal-example.html',
  styleUrl: './linked-signal-example.scss'
})
export class LinkedSignalExampleComponent {
  nombre = signal('');
  apellido = signal('');

  nombreCompleto = linkedSignal(() => `${this.nombre()} ${this.apellido()}`);
}
