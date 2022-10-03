import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  mediaQuery$: Observable<MediaChange[]>;

  constructor(private mediaQuery: MediaObserver) {
    this.mediaQuery$ = mediaQuery.asObservable();
  }

  ngOnInit(): void {
    this.subs.push(this.mediaQuery$.subscribe(media => {
      console.log(media)
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(subs => subs.unsubscribe());
  }

}
