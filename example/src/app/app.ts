import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SignalFormValidationExampleComponent } from './components/signal-form-validation-example/signal-form-validation-example';
import { HttpResourceExampleComponent } from './components/http-resource-example/http-resource-example';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LinkedSignalExampleComponent } from './components/linked-signal-example/linked-signal-example';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalFormValidationExampleComponent, HttpResourceExampleComponent, CommonModule, MatToolbarModule, LinkedSignalExampleComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('example');
}
