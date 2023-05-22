import { Component, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared.service';
import { menu } from '../../config/image';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  image: any = menu


  constructor(private rte: Router, private shared: SharedService) { }

  ngOnInit(): void {
    this.shared.setIdentifiers(this.rte.url)
  }

  barchart = new Chart({
    chart: {
      type: 'column',
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },

    xAxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      labels: {
        formatter() {
          return `<span style="color: #737B8B">${this.value}</span>`
        }
      }
    },
    yAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: ''
      }
    },
    series: [
      {
        name: 'Last 6 days',
        data: [2, 1, 3, 3, 1, 1, 2, 1, 3, 3, 1, 3],
        color: '#506B62',

        align: 'left'
      } as any,
      {
        name: 'Last Week',
        data: [1, 2, 1, 2, 3, 2, 1, 3, 1, 2, 3, 2],
        color: '#E6E8EC',
      } as any
    ]
  });

  piechart = new Chart({
    chart: {
      type: 'pie',
    },
    legend: {
      enabled: false
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },

    xAxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      labels: {
        formatter() {
          return `<span style="color: #737B8B">${this.value}</span>`
        }
      }
    },
    yAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: ''
      }
    },
    tooltip: {
      useHTML: true,
      backgroundColor: '#2D404D',
      shadow: false,
      formatter: function () {
        /* return '<div style="background-color: #2D404D; color: #FFFFFF;" class="tooltip"> ' +
          this.series.name + '<br>' + this.key + '<br>' + this.y +
          '</div>'; */

        return `<div style="background-color: #2D404D; border-radius: 6px; padding: 5px; color: #FFFFFF; font-weight: 500; font-size: 12px; letter-spacing: 0.3px;" class="tooltip"> 
          
          <div style="line-height: 13px;">${this.key}</div><br>
          <div style="font-weight: 400; line-height: 10px; opacity: 0.5;">1pm-4pm</div><br>
          <div style="font-size: 16px; line-height: 16px;">1.890 Appointment</div>
          </div>`;
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        }
      }
    },
    colors: ['#2D404D', '#C0F8FB', '#A0E0E3'],
    series: [
      {
        name: 'Appointment ',
        data: [
          {
            name: 'Afternoon',
            y: 40
          },
          {
            name: 'Evening',
            y: 30
          },
          {
            name: 'Morning',
            y: 30
          }],
        type: 'pie',
        innerSize: '70%',
      }]
  });




  dummy: any = [
    {
      url: 'http://localhost:4000/assets/pictures/cover/login_cover.png',
      name: 'Hydraclean',
      price: '$100'
    },
    {
      url: 'http://localhost:4000/assets/pictures/cover/login_cover.png',
      name: 'Hydrafusion',
      price: '$100'
    },
    {
      url: 'http://localhost:4000/assets/pictures/cover/login_cover.png',
      name: 'Mesojet',
      price: '$50'
    }, {
      url: 'http://localhost:4000/assets/pictures/cover/login_cover.png',
      name: 'EndyMed Face V-Lift',
      price: '$50'
    }
  ]

  dummy2: any = [
    {
      date: 'Fri May 19 2023 11:39:48 GMT+0530 (India Standard Time)',
      member: 'Sally',
      service: 'Hydrafusion',
      outlet: 'Serangoon',
      beautician: 'Ariel'
    },
    {
      date: 'Fri May 19 2023 11:39:48 GMT+0530 (India Standard Time)',
      member: 'Sally',
      service: 'Hydrafusion',
      outlet: 'Serangoon',
      beautician: 'Ariel'
    },
    {
      date: 'Fri May 19 2023 11:39:48 GMT+0530 (India Standard Time)',
      member: 'Sally',
      service: 'Hydrafusion',
      outlet: 'Serangoon',
      beautician: 'Ariel'
    },
    {
      date: 'Fri May 19 2023 11:39:48 GMT+0530 (India Standard Time)',
      member: 'Sally',
      service: 'Hydrafusion',
      outlet: 'Serangoon',
      beautician: 'Ariel'
    },
    {
      date: 'Fri May 19 2023 11:39:48 GMT+0530 (India Standard Time)',
      member: 'Sally',
      service: 'Hydrafusion',
      outlet: 'Serangoon',
      beautician: 'Ariel'
    },
  ]

}
