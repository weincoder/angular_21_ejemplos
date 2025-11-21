import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http'; // <--- Nueva API específica
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

@Component({
    selector: 'http-resource-example',
    standalone: true,
    imports: [CommonModule, MatListModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule],
    templateUrl: './http-resource-example.html',
    styleUrl: './http-resource-example.scss'
})
export class HttpResourceExampleComponent {

    usersResource = httpResource<User[]>(() => 'https://jsonplaceholder.typicode.com/users');


    totalUsers = computed(() => this.usersResource.value()?.length ?? 0);

    reloadUsers() {
        this.usersResource.reload();
    }
}