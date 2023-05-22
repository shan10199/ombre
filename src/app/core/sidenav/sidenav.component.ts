import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { menu } from '../../config/image';
import { sideMenu } from '../../config/sidenavmenu';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

declare const sidemenu: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @ViewChild('myElement') myElementRef!: ElementRef;

  logo: any = menu?.full_logo; menus: any = sideMenu; image: any = menu; identifier: any;

  constructor(private rte: Router, private act_rte: ActivatedRoute, public shared: SharedService) { }

  ngOnInit(): void {
    this.shared.page_identifiers.subscribe(e => {
      this.identifier = e
    })
  }

  ngOnChanges() {

  }

  handleClicked(index: any, menu: any) {
    if(menu?.children == undefined) {
      this.rte.navigate([`${menu?.path}`])
    }

    sidemenu(index, menu?.children)
  }

}
