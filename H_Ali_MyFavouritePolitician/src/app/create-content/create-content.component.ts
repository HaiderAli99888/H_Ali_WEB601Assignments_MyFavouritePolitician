import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };

  @Output() contentAdded: EventEmitter<Content> = new EventEmitter();

  constructor() {}

  addContent(): void {
    this.contentAdded.emit(this.newContent);
    this.newContent = { id: this.newContent.id + 1, title: '', description: '', creator: '', imgURL: '', type: '', tags: [] };
  }
}
