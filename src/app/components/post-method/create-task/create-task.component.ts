import { Component, Output, EventEmitter, OnInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../Post';
import { AppComponent } from '../../../app.component';
import { EditModeService } from '../../../services/edit-mode.service';
import { HttpServicesService } from '../../../services/http-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent implements OnInit {

  faClose = faClose;
  isEdit: boolean = false;

  @Input() taskSelected!: Post;
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('myInput') myInputField!: ElementRef;
  @ViewChild('myForm') formTask!: NgForm;

  obs!: Observable<Object>;

  constructor(private parent: AppComponent,
              private service: EditModeService,
              private httpService: HttpServicesService,
            ) {};

  @HostListener('document:click', ['$event']) onClick(event: any) {
    if(event.target.className === "overlay") {
      this.onCloseForm();
    };
  };  

  onCloseForm(){
    this.closeForm.emit(false);
  };

  ngOnInit(): void {};

  ngAfterViewInit() {
    setTimeout(() => this.myInputField.nativeElement.focus(),0);
    setTimeout(() => this.formTask.form.patchValue(this.taskSelected),0);
    setTimeout(() => this.isEdit = this.service.isEditting,0);
  };

  handleAdd(data: NgForm) {
    this.obs = this.httpService.postMethod(data);
  };

  handleEdit(data: NgForm) {
    const id = this.taskSelected.id;
    this.obs = this.httpService.putMethod(id, data);
  };

  handleAddOrEdit(data: NgForm) {
    if(!this.isEdit) {
      this.handleAdd(data.value);
    } else {
      this.handleEdit(data.value);
    };

    // instead of subscribing to the observable twice in handleAdd and handleEdit methods
    this.obs.subscribe({
      next: (response) => {
        console.log(`the response is: ${response}`);
        this.parent.callFetchData();
      },
      error: (error) => {
        console.log(`there was an error!, ${error}`);
      },
      complete: () => {
        console.log('the request is complete');
      },
    });

    data.reset();
    this.onCloseForm();
  };

};
