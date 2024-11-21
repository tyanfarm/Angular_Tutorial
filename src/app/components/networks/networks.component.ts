import { Component } from '@angular/core';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.sass']
})
export class NetworksComponent {
  displayedColumns: string[] = ['chain', 'buy', 'sell', 'earn', 'swap'];
  
  dataSource = [
    {
      chain: {name: 'Bitcoin', icon: 'assets/images/bitcoin-icon.png'},
      buy: true,
      sell: true,
      earn: false,
      swap: true
    },
    {
      chain: {name: 'Ethereum', icon: 'assets/images/ethereum-icon.png'},
      buy: true,
      sell: true,
      earn: true,
      swap: true
    },
    {
      chain: {name: 'Cardano', icon: 'assets/images/cardano-icon.png'},
      buy: true,
      sell: true,
      earn: false,
      swap: true
    },
    {
      chain: {name: 'Binance', icon: 'assets/images/binance-icon.png'},
      buy: true,
      sell: true,
      earn: true,
      swap: true
    },
    {
      chain: {name: 'Ripple', icon: 'assets/images/ripple-icon.png'},
      buy: true,
      sell: true,
      earn: true,
      swap: true
    },
  ];
}
