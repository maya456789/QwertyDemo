import { Component,Input } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-offcanvas-content',
	standalone: true,
  imports: [NgbNavModule, NgbNavModule],
	template: `
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Offcanvas</h5>
			<button
				type="button"
				class="btn-close text-reset"
				aria-label="Close"
				(click)="activeOffcanvas.dismiss('Cross click')"
			></button>
		</div>
		<div class="offcanvas-body">
			<div>Hello {{ name }}

      
      </div>
			<button type="button" class="btn btn-outline-dark" routerLink="spa/reg" (click)="activeOffcanvas.close('Close click')">Close</button>
		</div>
    <button type="button" class="btn btn-outline-dark" routerLink="/spa/reg" >Register</button>
   
	`,
})
export class NgbdOffcanvasContent {
	@Input() name:any;
  active = 'top';
	constructor(public activeOffcanvas: NgbActiveOffcanvas) {}
}

@Component({
  selector: 'app-spa-sidebar',
  
  templateUrl: './spa-sidebar.component.html',
  styleUrls: ['./spa-sidebar.component.css']
})
export class SpaSidebarComponent {

  active = 'top';
  constructor(private offcanvasService: NgbOffcanvas) {}

	open() {
		const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);
		offcanvasRef.componentInstance.name = 'World';
	}
}
