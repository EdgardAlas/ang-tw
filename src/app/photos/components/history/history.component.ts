import { Component, Input, inject } from '@angular/core';
import { PhotosService } from 'src/app/photos/services/photos.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  @Input() search = '';

  private photosService = inject(PhotosService);

  get history() {
    return this.photosService.history;
  }
}
