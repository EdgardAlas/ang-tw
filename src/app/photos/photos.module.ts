import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryButtonComponent } from './components/history-button/history-button.component';
import { HistoryComponent } from './components/history/history.component';
import { ListComponent } from './components/list/list.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    SearchComponent,
    ListComponent,
    HistoryComponent,
    SearchContainerComponent,
    PhotoCardComponent,
    HistoryButtonComponent,
  ],
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  exports: [SearchContainerComponent, HistoryComponent],
})
export class PhotosModule {}
