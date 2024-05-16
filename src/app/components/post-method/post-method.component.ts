import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { Post } from '../../Post';
import { GetMethodComponent } from '../get-method/get-method.component';
import { EditModeService } from '../../services/edit-mode.service';

@Component({
  selector: 'app-post-method',
  standalone: true,
  imports: [CreateTaskComponent],
  templateUrl: './post-method.component.html',
  styleUrl: './post-method.component.scss'
})
export class PostMethodComponent implements OnInit {

  showCreateTaskForm: boolean = false;
  @Input() selectedTask!: Post;
  @ViewChild('getComp') getCom!: GetMethodComponent;

  constructor(private service: EditModeService) {};

  ngOnInit(): void {};

  openCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.selectedTask = {title: "", priority: "", assignedTo: "", status: "", description: ""};
    this.service.onEdittingMode(false);
  };

  closeCreateTaskForm() {
    this.showCreateTaskForm = false;
  };

};
