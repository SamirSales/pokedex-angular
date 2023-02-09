import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from '../../app-routing.module';

@Component({
    selector: 'app-more-info-page',
    templateUrl: './more-info-page.component.html',
    styleUrls: ['./more-info-page.component.css']
})
export class MoreInfoPageComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    goToHomePage() {
        this.router.navigateByUrl('/' + RoutePath.POKEMONS);
    }
}
