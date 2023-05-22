import { EventEmitter, Injectable } from '@angular/core';
import { pagedetails } from '../../config/interface'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private rte: Router) { }

  page_identifiers: EventEmitter<any> = new EventEmitter<any>();

  setIdentifiers(params: any) {

    let url = params?.split('/')
    url?.shift()
    let last_ele: any = url?.length - 1
    let args: any = { title: '', breadcrumbs: [] }
    args.title = pagedetails[url[last_ele]]?.title
    // if (url?.length > 0) { url?.pop() }
    if (url[last_ele] != 'dashboard') {
      url.forEach((e: any) => {
        if (pagedetails[e]) { // pagedetails[e]?.breadcrumb
          args.breadcrumbs.push({ name: pagedetails[e]?.breadcrumb, key: e, })
        }
      });
      args?.breadcrumbs?.unshift({ name: 'Home', key: '/dashboard', })
    }


    this.page_identifiers.emit(args)
  }

  routerlink(params: any) {
    this.rte.navigate([`/${params}`])
  }
}
