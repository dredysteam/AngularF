import { Component, OnInit } from '@angular/core';

// interface Item{
//   id: number,
//   name?:string
// }

// interface Charge{
//   items?: Item[];
// }

@Component({
  selector: 'app-comp-arch-feat-modules',
  templateUrl: './comp-arch-feat-modules.component.html',
  styleUrls: ['./comp-arch-feat-modules.component.css']
})
export class CompArchFeatModulesComponent implements OnInit {

  // items: Item[];
  // charges: Charge[];

  constructor() { }

  ngOnInit(): void {

    // this.items = [{ id: 1, name: 'Shoe' }, { id: 2, name: 'Jean' }, { id: 3, name: 'T-Shirt' }, { id: 4, name: 'Belt' }];

    // this.charges = [{items:[{ id: 1, name: 'Shoe' }, { id: 5, name: 'Jean' }]}];
  }

  // compare() {
  //   console.log('Items');
  //   let matched = "No Charges";
  //   this.charges.forEach(charge => {
  //     let count = 0;
  //     charge.items.forEach(itemCh => {
        
  //       this.items.forEach(item => {
  //         if (itemCh.id == item.id)
  //         {
  //           count = count + 1;
  //         }
  //       })
  //     })
  //     if (count == charge.items.length)
  //     {
  //       matched = "True"
        
  //     }
  //     else {
  //       matched = "False";
  //     }
  //     console.log(matched);
      
  //   })
  // }

  // anotherCompare():string {

  //   console.log('Items');
  //   let matched:string = "No Charges";
  //   var result = true;
  //   if (this.charges.length > 0) {

  //     this.charges.forEach(charge => {
  //       var itemsList = charge.items;
  //       if (itemsList != null) {
  //         charge.items.forEach(itemCh => {
  //           matched = "no matched";
        
  //       this.items.forEach(item => {
  //         if (itemCh.id == item.id)
  //         {
  //           matched = "matched ok";
  //           // return matched;
  //           console.log(matched);
  //         }
  //       })
  //     })
  //         if (matched != "matched ok") {
  //           result = false;
  //           // return matched;
  //           console.log(matched);
  //     }
  //     // console.log(matched);
          
  //       }
      
      
  //     })
  //     return matched;
      
  //   }
  //   // return "No Charges";
    
    
  // }






}
