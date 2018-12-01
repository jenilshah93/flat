export default function flatten(arr,depth=Infinity) {
  if(!depth)
    return arr
   return depth_flat(arr,0)

   
  function depth_flat(arr,d){
    var res = []
    for(var item of arr){
      if(Array.isArray(item) && d<depth)
        res.push(...depth_flat(item,d+1))
      else
        res.push(item)
    }
    return res;
  }
 
}

