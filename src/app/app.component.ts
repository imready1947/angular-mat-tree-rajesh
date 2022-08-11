import { Component, OnInit } from '@angular/core';
import {
  MatTreeNestedDataSource,
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { NestedTreeControl, FlatTreeControl } from '@angular/cdk/tree';

/** Flat node with expandable and level information */

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  TREE_DATA: any = [
    {
      name: 'T S TRADING COPANY',
      rs_id: '09565792-c288-4885-a4ed-3dd055f250f5',
      role: 'RS',
      children: [
        {
          rs_id: '09565792-c288-4885-a4ed-3dd055f250f5',
          name: 'N.A.',
          tl_code: 'N.A.',
          role: 'TL',
          // children: [
          //     {
          //         name: "Raghavendran M",
          //         me_code: "6000001",
          //         tl_code: "N.A.",
          //         rs_id: "09565792-c288-4885-a4ed-3dd055f250f5",
          //         role: "ME"
          //     },
          //     {
          //         name: "Anurag",
          //         me_code: "6000002",
          //         tl_code: "N.A.",
          //         rs_id: "09565792-c288-4885-a4ed-3dd055f250f5",
          //         role: "ME"
          //     }
          // ]
        },
      ],
    },
    {
      name: 'R N ENTERPRISES',
      rs_id: '7f8c03c7-f364-4e35-8da6-2f60cc618169',
      role: 'RS',
      children: [
        {
          rs_id: '7f8c03c7-f364-4e35-8da6-2f60cc618169',
          name: 'N.A.',
          tl_code: 'N.A.',
          role: 'TL',
          children: [
            {
              name: null,
              me_code: null,
              tl_code: 'N.A.',
              rs_id: '7f8c03c7-f364-4e35-8da6-2f60cc618169',
              role: 'ME',
            },
          ],
        },
      ],
    },
    {
      name: 'Leanbox Logistics Solutions Pvt Ltd',
      rs_id: 'a5f100d5-bc88-4456-b507-1161575f8819',
      role: 'RS',
      children: [
        {
          rs_id: 'a5f100d5-bc88-4456-b507-1161575f8819',
          name: 'RAMESH RAMANOJ MISHRA',
          tl_code: '600002528',
          role: 'TL',
          children: [
            {
              name: 'RAMESH RAMANOJ MISHRA',
              me_code: '600002528',
              tl_code: '600002528',
              rs_id: 'a5f100d5-bc88-4456-b507-1161575f8819',
              role: 'ME',
            },
            {
              name: 'RAJESH HARI KADAM',
              me_code: '600002638',
              tl_code: '600002528',
              rs_id: 'a5f100d5-bc88-4456-b507-1161575f8819',
              role: 'ME',
            },
            {
              name: 'PRADIP MAHADEV BHATWADEKAR',
              me_code: '600002680',
              tl_code: '600002528',
              rs_id: 'a5f100d5-bc88-4456-b507-1161575f8819',
              role: 'ME',
            },
            {
              name: 'ANIL KAMLESH PRAJAPATI',
              me_code: '600002686',
              tl_code: '600002528',
              rs_id: 'a5f100d5-bc88-4456-b507-1161575f8819',
              role: 'ME',
            },
            {
              name: 'RAKESH RAMGYAN PRAJAPATI',
              me_code: '600002691',
              tl_code: '600002528',
              rs_id: 'a5f100d5-bc88-4456-b507-1161575f8819',
              role: 'ME',
            },
          ],
        },
        {
          rs_id: 'a5f100d5-bc88-4456-b507-1161575f8819',
          name: 'N.A.',
          tl_code: 'N.A.',
          role: 'TL',
          children: [
            {
              name: 'KANHAIYALAL SACHIDANAND JAISWAL',
              me_code: '600002720',
              tl_code: 'N.A.',
              rs_id: 'a5f100d5-bc88-4456-b507-1161575f8819',
              role: 'ME',
            },
          ],
        },
      ],
    },
  ];

  availableBtn: boolean = false;
  vaccanttoggle: boolean = false;
  me_code: any;
  drop_id: any;

  treeControl = new NestedTreeControl<any>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }

  myFunction(value, node) {
    debugger;
    console.log(node);

    this.me_code = node.me_code;
    console.log(this.me_code);

    if (value == 1) {
      this.availableBtn = !this.availableBtn;
      if (!this.availableBtn) {
      } else {
      }
    }

    if (value == 2) {
      this.vaccanttoggle = !this.vaccanttoggle;
    }
  }

  hasChild = (_: number, node: any) =>
    !!node.children && node.children.length > 0;
}
