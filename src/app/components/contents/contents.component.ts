import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent {
  contentArray: type[] = [
    {
      imgUrl: '../../../assets/images/avt1.png',
      name: 'Andrew Rathore'
    },
    {
      imgUrl: '../../../assets/images/avt2.png',
      name: 'Vera Duncan'
    },
    {
      imgUrl: '../../../assets/images/avt3.png',
      name: 'Mark Smith'
    }
  ]
}

interface type{
  imgUrl: string
  name: string
}
