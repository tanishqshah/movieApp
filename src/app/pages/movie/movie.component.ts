// import { Component , OnInit} from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  @ViewChild("video",{static:false}) videoPlayer:ElementRef | undefined;


  id:any;
  message:any;
  movie: any;
  reviews: any;
  isPlay: boolean = false;
  averageRating: number = 0;
  rating:number=0;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(this.id).subscribe((response:any) => {
      this.movie = response.movie;
      this.reviews = response.reviews;
      this.calculateAverage(this.reviews);
      // console.log(response);
    })
  }

  playVideo()
  {
    if(this.isPlay)
    {
      this.videoPlayer?.nativeElement.play();
      
    }
    else 
    {
      this.videoPlayer?.nativeElement.pause();

    }

    this.isPlay=!this.isPlay;
    
  }


  onSubmit(reviewForm: any) {
    

    let review = reviewForm.value;
    
    review.mid = Number(this.id);
    // console.log(review);
    
    this.movieService.createReview(review).subscribe((response:any)=>{
      // this.message = response.message;
      if(response.success===true)
      {
        review.created_at=new Date();
        this.reviews.unshift(review);
        this.calculateAverage(this.reviews);
      }

      
    })
    // review.mid=
  }

  calculateAverage(reviews:any[])
  {
    let totalRating=0;

    reviews.forEach((review)=>{
      totalRating+=Number(review.rating);
    })

    let average=totalRating/reviews.length;

    this.averageRating=average*20;

    console.log("rating",totalRating,average,this.averageRating);


  }
}
