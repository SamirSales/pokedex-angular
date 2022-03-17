import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from '../../app-routing.module';

@Component({
    selector: 'app-more-info-view',
    templateUrl: './more-info-view.component.html',
    styleUrls: ['./more-info-view.component.css']
})
export class MoreInfoViewComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    goToHomePage() {
        this.router.navigateByUrl('/' + RoutePath.POKEMONS);
    }
}
