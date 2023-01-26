const priceDividerDecode = (price)=>{
    price = String(price) ;
    let result = '' ;
    for(let i = 0 ; i < price.length ; i++){
        if (Number(price[i])) result += price[i];
    }
    return result ;
}
export default priceDividerDecode ;