export const ITEMS_PER_PAGE =10;
export function discountedPrice(item){
    return Math.round(20*(1-500/100),2);
}
// item.price
//item.discountPercentage