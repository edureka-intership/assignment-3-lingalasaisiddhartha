// Solution-1
let restaurants = [{ name: 'Bawarchi', address: 'Block-A', city: 'Hyderabad },
{ name: 'Gujrati Rasoi', address: 'Block-B', city: 'Gujrat' },
{ name: 'Rajasthani Rasoi', address: 'Block-C', city: 'Rajasthan' },
{ name: 'Bnangalore resturant', address: 'Block-D', city: 'Bnagalore' }]
class restaurantManager {
    constructor() {
    }
    
    restaurantList() {
        for (let i = 0; i <restaurants.length; i++) {
            console.log(restaurants[i].name + ' Address:' + restaurants[i].address + '  City:' + restaurants[i].city);
        }
        return restaurants;
    }
    filter(city) {
        let restaurant = restaurants.filter((name) => {
            return name.city === city;
        })
        return restaurant;
    }
}

const rest = new restaurantManager();
rest.restaurantList();
rest.filter(city);

// Solution 2
    let orderData = {
    'Below 500': 20, '500-1000': 29,
    '1000-1500': 30, '1500-2000': 44,
    'Above 2000': 76
        };
let abc=Object.entries(orderData);
let orderSum=0;
let orderPropotions=0;
const sumorders=()=>{
    abc.forEach((orders)=>{
        orderSum= orderSum+orders[1];
        orderPropotions=abc.length;
        
    })
    return {orderSum,orderPropotions};
}
const orderpercentagearray=[];
const orderPercent=()=>{
    abc.forEach((values)=>{
        console.log(`Order percenent for ${values[0]} is ${(values[1]/orderSum*100).toFixed(2)}%`)
        orderpercentagearray.push((values[1]/orderSum*100).toFixed(2));
    })
}
sumorders();
orderPercent();
const Array=[];
   const last=()=>{ for(i=0;i<abc.length;i++){
        Array.push({
            id:i+1,
            order:abc[i][0],
            orderPercentage:orderpercentagearray[i],
            restaurant:'Punjabi Tadka'
        })
    }
   }
   last();
   Array;