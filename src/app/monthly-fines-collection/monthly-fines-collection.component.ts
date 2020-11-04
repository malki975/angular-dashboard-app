import { Component, OnInit } from '@angular/core';
import sampleData from 'src/json/monthlyFinesCollectionJson.json';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';


@Component({
  selector: 'app-monthly-fines-collection',
  templateUrl: './monthly-fines-collection.component.html',
  styleUrls: ['./monthly-fines-collection.component.css']
})
export class MonthlyFinesCollectionComponent implements OnInit {

  dates: any[] = [];
  openCases: any[] = [];
  closeCases: any[] = [];
  sumOpen: any[] = [];
  sumClosed: any[] = [];

  ngOnInit(): void {
    this.sumOpen[0] = sampleData.monthlyFinesCollectionJson[0].openCases;
    this.sumClosed[0] = sampleData.monthlyFinesCollectionJson[0].closedCases;

    for (let i = 0; i < 12; i++) {
      this.dates[i] = sampleData.monthlyFinesCollectionJson[i].date;
      this.openCases[i] = sampleData.monthlyFinesCollectionJson[i].openCases;
      this.closeCases[i] = sampleData.monthlyFinesCollectionJson[i].closedCases;
    }

    for (let i = 1; i < 12; i++) {
      this.sumOpen[i] = this.sumOpen[i - 1] + sampleData.monthlyFinesCollectionJson[i].openCases;
      this.sumClosed[i] = this.sumClosed[i - 1] + sampleData.monthlyFinesCollectionJson[i].closedCases;
    }
    // throw new Error('Method not implemented.');
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    //maintainAspectRatio: false,
    // title: { fontSize: 10},
    legend: { position: "bottom", fullWidth: true, labels: { fontSize: 10 } },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}], yAxes: [{
        id: 'y-axis-0',
        position: 'left',

      },
      {
        id: 'y-axis-1',
        position: 'right',
        gridLines: {
          //color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          //fontColor: 'red',
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    tooltips: {
      rtl: true
    }
  };
  
  public barChartLabels: Label[] = this.dates;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: this.sumOpen, label: 'תיקים שנפתחו - מצטבר', type: "line", yAxisID: 'y-axis-0' },
    { data: this.sumClosed, label: 'תיקים שנסגרו - מצטבר', type: "line", yAxisID: 'y-axis-0' },
    { data: this.openCases, label: 'תיקים שנפתחו', yAxisID: 'y-axis-1' },
    { data: this.closeCases, label: 'תיקים שנסגרו', yAxisID: 'y-axis-1' }
  ];

  public barChartColors: Color[] = [
    { borderColor: '#f0ad4e' },
    { borderColor: '#5bc0de' },
    { backgroundColor: '#5cb85c' },
    { backgroundColor: '#d9534f' },
  ]

  constructor() { }

  // ngOnInit(): void {
  // }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}


