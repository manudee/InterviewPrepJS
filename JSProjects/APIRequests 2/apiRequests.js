fetch('https://dummyjson.com/carts')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data here

    const allCarts = data.carts;
    // console.log(allCarts)

    const cartWithHighestTotal = allCarts.reduce((maxObj,obj)=> {
        return obj.total > maxObj.total ? obj : maxObj;
    }, allCarts[0])

    console.log(cartWithHighestTotal);

    const cartWithLowestTotal = allCarts.reduce((minObj,obj)=> {
        return obj.total < minObj.total ? obj: minObj;
    }, allCarts[0])


    
    console.log(cartWithLowestTotal);

//   })
//   .catch(error => {
//     // Handle errors
  });

