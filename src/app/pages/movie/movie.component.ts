import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  id:any;
  message:any;



  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(this.id).subscribe((response)=>{
      console.log(response);
    })
  }


  onSubmit(reviewForm: any) {
    

    let review = reviewForm.value;
    
    review.mid = Number(this.id);
    console.log(review);
    
    this.movieService.createReview(review).subscribe((response:any)=>{
      this.message=response.message;
      console.log(response);
      return (response);
    })
    // review.mid=
  }
}
