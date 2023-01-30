// arr=[8,[7],[6,5],[[4]],2,3,9];
// output: arr=[8,7,6,5,4,2,3,9]

const arr=[8,[7],[6,5],[[4]],2,3,9];

function flattenArray(arr){
  const result=[];
  arr.forEach(elem => {
      if(Array.isArray(elem)){
        result.push(...flattenArray(elem))
      }else{
        result.push(elem)
      }
  });
  return result;
}

console.log('flatten Array- ',flattenArray(arr))