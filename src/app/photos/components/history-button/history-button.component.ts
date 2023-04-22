import { Component, Input, inject } from '@angular/core';
import { PhotosService } from 'src/app/photos/services/photos.service';

@Component({
  selector: 'app-history-button',
  templateUrl: './history-button.component.html',
  styleUrls: ['./history-button.component.css'],
})
export class HistoryButtonComponent {
  @Input() search = '';

  private photosService = inject(PhotosService);

  async searchHistory() {
    await this.photosService.onSearch(this.search);
    const searchInput = document.getElementById('search') as HTMLInputElement;
    searchInput.value = this.search;
    searchInput.focus();
  }
}
