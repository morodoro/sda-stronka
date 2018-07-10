import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  currentIndex = 0;
  photos: Photo[] = [];

  constructor(httpClient: HttpClient) {
    httpClient.get<Photo[]>('assets/photos.json')
      .subscribe((response) => {
       this.photos = response;
      });
  }

  prev() {
    if (this.currentIndex == 0) {
      this.currentIndex = this.photos.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.photos.length-1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }

  }
  getCurrentPhoto(): Photo {
    if (this.photos) {
      return this.photos[this.currentIndex];
    } else {
      console.log('Nie ma zdjec');
      return null;
    }
  }

  setCurrentPhotoIndex(index) {
    if (this.photos.length - 1 >= index && index >= 0)  {
      this.currentIndex = index;
    }
  }

}
