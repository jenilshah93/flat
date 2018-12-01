export default function flatten(arr) {
    var res = []
    for(var item of arr){
      if(Array.isArray(item))
        res.push(...flatten(item))
      else
        res.push(item)
    }
    return res;
}