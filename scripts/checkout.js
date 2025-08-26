import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts,loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){
  try{

    await loadProductsFetch();
    const value = await new Promise((resolve,reject) =>{
      // throw 'error 2'; //creates unexpedcted errors
      loadCart(() =>{
       // reject('error3');//own errors
        resolve('value3');
      });
    });

  }catch(error){
    console.log('Unexpected error.Please try again later.');
  }
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
/*
Promise.all([
    loadProductsFetch(),
      new Promise((resolve) =>{
      loadCart(() =>{
        resolve();
      });
    })
]).then((values) =>{
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
new Promise((resolve) =>{
  
  loadProducts(() =>{
    resolve('value1');//let us go to next step
  });
}).then((value) =>{
    console.log(value);
    return new Promise((resolve) =>{
      loadCart(() =>{
        resolve();
      });
    });
}).then(() =>{
    renderOrderSummary(); 
    renderPaymentSummary();
});
*/
/*
loadProducts(() =>{
  loadCart(() =>{
    renderOrderSummary(); 
    renderPaymentSummary();
  });
});
*/

 