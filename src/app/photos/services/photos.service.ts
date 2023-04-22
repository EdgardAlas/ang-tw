import { HttpClient } from '@angular/common/http';
import { Photos } from './../typings/Photo.typings';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  history: string[] = [];
  photos: Photos = [];
  loaded = false;
  private api = environment.api_url;
  private client = inject(HttpClient);

  onSearch(search: string): Promise<Photos> {
    return new Promise((resolve, reject) => {
      this.client.get<Photos>(`${this.api}?q=${search}&_limit=30`).subscribe({
        next: (photos) => {
          this.photos = photos;
          this.addHistory(search);
          resolve(photos);
        },
        error: (error) => {
          reject(error);
        },
        complete: () => {
          if (!this.loaded) {
            this.loaded = true;
          }
        },
      });
    });
  }

  addHistory(search: string) {
    if (!this.history.includes(search) && search !== '') {
      this.history = [search, ...this.history].slice(0, 10);
    }
  }
}
