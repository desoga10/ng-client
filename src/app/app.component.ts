import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './service/data.service';
import { Observable, catchError } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: Post[] = [];
  errorMessage!: string;

  constructor(private data_service: DataService) {}

  ngOnInit() {
    this.data_service.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        console.log(this.posts);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
