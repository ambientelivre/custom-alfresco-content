import { SearchService } from "@alfresco/adf-content-services";
import { ResultSetPaging } from "@alfresco/js-api";
import { Component, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: 'app-custom-search-bar',
  templateUrl: './custom-search-bar.component.html',
  styleUrls: ['./custom-search-bar.component.css'],
})
export class CustomSearchBarComponent implements OnInit {
  data: ResultSetPaging;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  async onSearchChanged(event: EventEmitter<string>) {
    this.data = await this.searchService
      .search(event.toString(), 5, 0)
      .toPromise();
  }
}
