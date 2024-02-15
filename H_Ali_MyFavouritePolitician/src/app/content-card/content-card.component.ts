import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'Imran Khan',
      description: 'Imran Ahmad Khan Niazi born 5 October 1952 is a Pakistani politician and former cricketer who served as the 22nd prime minister of Pakistan from August 2018 until April 2022.',
      creator: 'Haider Ali',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Imran_Ahmed_Khan_Niazi_-_UNGA_%2848784380531%29_%28cropped%29.jpg/220px-Imran_Ahmed_Khan_Niazi_-_UNGA_%2848784380531%29_%28cropped%29.jpg',
      type: 'Politicians',
      tags: ['politician', 'Pakistan']
    });

    this.contentList.add({
      id: 2,
      title: 'Donald Trump',
      description: 'Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021.',
      creator: 'Haider Ali',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg',
      type: 'Politicians',
      tags: ['politician', 'Usa']
    });

    this.contentList.add({
      id: 3,
      title: 'Modi',
      description: 'Narendra Damodardas Modi is an Indian politician who has served as the 14th prime minister of India since May 2014.',
      creator: 'Haider Ali',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png/220px-Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png',
      type: 'Politicians',
      tags: ['politician', 'India']
    });
  }

  
}