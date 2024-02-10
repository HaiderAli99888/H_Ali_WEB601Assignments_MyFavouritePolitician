import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [
    { id: 1, title: 'Imran Khan', description: 'Imran Ahmad Khan Niazi; born 5 October 1952 is a Pakistani politician and former cricketer who served as the 22nd prime minister of Pakistan ', creator: 'Haider Ali', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Imran_Ahmed_Khan_Niazi_-_UNGA_%2848784380531%29_%28cropped%29.jpg', type: 'Politician', tags: ['Pakistan', 'Mianwali'] },
    { id: 2, title: 'Donald Trump', description: 'Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021.', creator: 'Haider Ali', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/800px-Donald_Trump_official_portrait.jpg', type: 'Politician', tags: ['USA', 'Washington'] },
    { id: 3, title: 'Narender Modi', description: 'Narendra Damodardas Modi; born 17 September 1950 is an Indian politician who has served as the 14th prime minister of India since May 2014.', creator: 'Haider Ali', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png', type: 'Politician', tags: ['India', 'Delhi'] },
    { id: 4, title: 'Zulfiqar Ali Bhutto', description: 'Zulfikar Ali Bhutto (5 January 1928 - 4 April 1979) was a Pakistani barrister, politician, and statesman. He served as the fourth president of Pakistan from 1971 to 1973 and later as the ninth prime minister of Pakistan from 1973 to 1977. ', creator: 'Haider Ali', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Z_A_Bhutto_%28President_of_Pakistan%29.jpg/800px-Z_A_Bhutto_%28President_of_Pakistan%29.jpg', type: 'Politician', tags: ['Pakistan', 'Larkana'] },
    { id: 5, title: 'Benazir Bhutto', description: 'Benazir Bhutto (21 June 1953 - 27 December 2007) was a Pakistani politician and stateswoman who served as the 11th and 13th prime minister of Pakistan from 1988 to 1990 and again from 1993 to 1996.', creator: 'Haider Ali', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Oliver_Mark_-_Benazir_Bhutto%2C_Dubai_2006_%28cropped%29.jpg/800px-Oliver_Mark_-_Benazir_Bhutto%2C_Dubai_2006_%28cropped%29.jpg', type: 'Politician', tags: ['Pakistan', 'Larkana'] },
    { id: 6, title: 'Murad Saeed', description: 'Murad Saeed; born 17 August 1986 is a Pakistani politician who served as Federal Minister for Communications and Federal Minister for Postal Services from December 2018 to April 2022.', creator: 'Haider Ali', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Murad-Saeed.png', type: '', tags: ['Pakistan', 'Chitral'] },
    { id: 7, title: 'Charles', description: 'Charles III (Charles Philip Arthur George; born 14 November 1948) is King of the United Kingdom and the 14 other Commonwealth realms.', creator: 'Haider Ali', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/King_Charles_III_%28July_2023%29.jpg', type: 'King', tags: ['England', 'Monarch'] }
  ];

  typeList: string[] = [];
  searchTitle: string = '';
  searchMessage: string = '';
  searchMessageColor: string = '';

  constructor() {}

  ngOnInit(): void {
    this.extractTypes();
  }

  extractTypes(): void {
    this.typeList = Array.from(new Set(this.contentArray.map(content => content.type).filter(type => type !== undefined))) as string[];
  }
  

  searchContent(): void {
    
    this.contentArray.forEach(content => content.highlight = false);

    const foundContent = this.contentArray.find(content => content.title === this.searchTitle);

    if (foundContent) {
      this.searchMessage = `Content with title "${this.searchTitle}" found!`;
      this.searchMessageColor = 'green';
      this.highlightContent(foundContent);
    } else {
      this.searchMessage = `No content found with title "${this.searchTitle}"`;
      this.searchMessageColor = 'red';
    }
  }

  highlightContent(content: Content): void {
    const index = this.contentArray.indexOf(content);
    this.contentArray[index].highlight = true;
  }

  handleImageClick(id: number, title: string): void {
    console.log(`Clicked on image with ID: ${id}, Title: ${title}`);
  }
}