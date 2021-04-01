import {Component, OnInit} from '@angular/core';
import {PersonModel} from '../../models/person.model';
import {PrehealthdbService} from '../../services/prehealthdb.service';
import {ConvertToCsvService} from '../../services/convert-to-csv.service';
import {map} from 'rxjs/operators';
import {RequestModel} from '../../models/request-model';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent implements OnInit {
  loadedPosts: RequestModel[] = [];


  ngOnInit(): void {
    this.personService.getPosts().subscribe(posts => {
      this.loadedPosts = posts;
    });
  }
  constructor(private csvService: ConvertToCsvService, private personService: PrehealthdbService) {
  }
  // this function uses the injected csv service to convert the data table to a csv file
  // future work might include the ability to select certain entries from the datatable and only export those
  download() {
    this.csvService.downloadFile(this.loadedPosts, 'tableAsCSV');
  }

}



