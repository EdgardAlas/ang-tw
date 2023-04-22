import { Component, inject } from '@angular/core';
import { PhotosService } from 'src/app/photos/services/photos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  private photosService = inject(PhotosService);

  get photos() {
    return this.photosService.photos;
  }

  get loaded() {
    return this.photosService.loaded;
  }
}
