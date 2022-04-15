import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockinfo',
  templateUrl: './stockinfo.component.html',
  styleUrls: ['./stockinfo.component.css']
})
export class StockinfoComponent implements OnInit {

  stockLIst  = [{ stockId: 102, stockName:'Microsoft', stockCategory:'Software and IT',buyQty:50, buyPrice:5,currentPrice:8},
                {stockId: 103, stockName:'Alphabet', stockCategory:'Software and IT',buyQty:10, buyPrice:10,currentPrice:12},
                {stockId: 104, stockName:'Amazon', stockCategory:'Software and IT',buyQty:50, buyPrice:20,currentPrice:13},
                {stockId: 105, stockName:'Tesla', stockCategory:'Software and IT',buyQty:30, buyPrice:3,currentPrice:2},
                {stockId: 106, stockName:'IBM', stockCategory:'Software and IT',buyQty:50, buyPrice:8,currentPrice:7},
                {stockId: 107, stockName:'Infosys', stockCategory:'Software and IT',buyQty:500, buyPrice:15,currentPrice:6},
                {stockId: 108, stockName:'QuantumScape',stockCategory:'Software and IT',buyQty:50, buyPrice:30,currentPrice:50},
                {stockId: 109, stockName:'TCS', stockCategory:'Software and IT',buyQty:250, buyPrice:2,currentPrice:12},
];
  constructor() { }

  ngOnInit(): void {
  }

}
