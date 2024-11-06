// add to cart storage
const getStoreAddToCart =()=>{
    const storeListString = localStorage.getItem('cart-list')
    if(storeListString){
        const storeList = JSON.parse(storeListString)
        return storeList
    }else{
        return []
    }
}


const addToStoreCart =(id)=>{
    const getStoreList = getStoreAddToCart()
    if(getStoreList.includes(id)){
        console.log(id,);
    }else{
        getStoreList.push(id)
        const storeListString = JSON.stringify(getStoreList)
        localStorage.setItem('cart-list', storeListString)
    }
}

// wish list 
const getStoreAddWishlist =()=>{
    const storeListString = localStorage.getItem('wishlist-list')
    if(storeListString){
        const storeList = JSON.parse(storeListString)
        return storeList
    }else{
        return []
    }
}

const addToStoreWishlist =(id)=>{
    const getStoreList = getStoreAddWishlist()
    if(getStoreList.includes(id)){
        console.log(id,);
    }else{
        getStoreList.push(id)
        const storeListString = JSON.stringify(getStoreList)
        localStorage.setItem('wishlist-list', storeListString)
    }
}








export {addToStoreCart, addToStoreWishlist, getStoreAddToCart,getStoreAddWishlist }