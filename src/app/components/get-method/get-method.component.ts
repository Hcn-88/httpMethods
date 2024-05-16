import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from '../../app.component';
import { EditModeService } from '../../services/edit-mode.service';
import { Post } from '../../Post';
import { HttpServicesService } from '../../services/http-services.service';

@Component({
  selector: 'app-get-method',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './get-method.component.html',
  styleUrl: './get-method.component.scss'
})
export class GetMethodComponent implements OnInit {

  tasks: Post[] = [];

  faEdit = faEdit;
  faDelete = faTrashCan;

  isLoading: boolean = false;

  @Output() select: EventEmitter<Post> = new EventEmitter<Post>;

  constructor(private parent: AppComponent,
              private serviceMode: EditModeService,
              private httpService: HttpServicesService
            ) {};

  ngOnInit(): void {
    this.fetchPosts();
  };

  fetchPosts() {
    this.isLoading = true;
    this.httpService.getMethod().subscribe({
      next: (data) => {
        data.forEach((item, index) => {
          console.log(`[${index + 1}]`, item);
        });
        this.tasks = data;
        this.isLoading = false;
      },
      error: (error) =>{
        console.log(`Get Method: error ${error}`);
      },
      complete: () => {
        console.log('Get request Complete');
      },
    });
  };

  handleDelete(id: string | undefined) {
    this.httpService.deleteMethod(id).subscribe({
      next: (data) => {
        console.log(`deleted task with ID: ${id}`); 
        this.fetchPosts();
      },
      error: (error) => console.log(`error deleting the task: ${error}`),
      complete: () => console.log("deletion completed"),
    })
  };

  selectTask(id: string | undefined) {
    this.parent.showTaskForm();
    const selectedTask = this.tasks.find(task => task.id === id);
    this.select.emit(selectedTask);
    this.serviceMode.onEdittingMode(true);
  };

};
