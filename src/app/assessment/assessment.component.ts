import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  isLike: boolean = false;
  countLike = 100;
  isDislike: boolean = false;
  countDislike = 25;

  constructor() { }

  ngOnInit(): void {
  }

  likeCounter() {
    this.isLike = !this.isLike;
    if (this.isLike)
      this.countLike++;
    else
      this.countLike--;
  }

  dislikeCounter() {
    this.isDislike = !this.isDislike;
    if (this.isDislike)
      this.countDislike++;
    else
      this.countDislike--;
  }

}
