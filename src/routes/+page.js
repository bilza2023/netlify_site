
// export  async function load({ fetch,params}) {

//   const item = await fetch('https://dummyjson.com/products/1');
//     // const item = 
    
//     return {item}
// }
export async function load({ params }) {
// const { dynamic } = params;
 const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const item = await res.json();
            console.log("item : ",item);
            console.log("dynamic : ",params);
  return {item};
}