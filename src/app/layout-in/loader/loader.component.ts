import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { LoaderService } from 'src/app/service/loader.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit, OnDestroy {

    loading: boolean = false;
    loadingSubscription: Subscription = new  Subscription();

    constructor(private cargadorService: LoaderService) { }

    ngOnInit() {
        this.loadingSubscription = this.cargadorService.loadingStatus.pipe(
            debounceTime(200)
        ).subscribe((value: any) => {
            this.loading = value;
        });
    }

    ngOnDestroy() {
        this.loadingSubscription.unsubscribe();
    }
}
