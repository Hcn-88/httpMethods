import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GetMethodComponent } from './components/get-method/get-method.component';
import { PostMethodComponent } from './components/post-method/post-method.component';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GetMethodComponent, PostMethodComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpMethods';

  @ViewChild(GetMethodComponent) getComp!: GetMethodComponent;
  @ViewChild(PostMethodComponent) postComp!: PostMethodComponent;

  taskSelected!: Post;

  callFetchData() {
    this.getComp.fetchPosts();
  };

  showTaskForm(): boolean {
    return this.postComp.showCreateTaskForm = true;
  };

  onSelect(task: Post) {
    this.taskSelected = task;
  };

};
