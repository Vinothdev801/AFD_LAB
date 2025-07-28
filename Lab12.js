let order = new Promise((resolve, reject) => {

    const ready = false;

    if(ready){
      setTimeout(resolve, 2000, 'your order is ready ✅');
    }
    else{
        reject("Order failed: Item not found 😞");
    }
});

async function process() {
    console.log('Customer placed an order.');
    try{
      
      console.log(await order);
      console.log('Order served 🥳')
    }
    catch(err){
      console.log(err);
    }
}

process();