import { Component, inject, OnInit } from '@angular/core';
import { PhotosService } from './../../services/photos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search = '';
  private photosService = inject(PhotosService);

  ngOnInit(): void {}

  async onSearch() {
    await this.photosService.onSearch(this.search);
    this.search = '';
  }
}
