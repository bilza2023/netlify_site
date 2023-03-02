

export async function load({ params }) {

try{
const response = await fetch("https://skillzaa.cyclic.app/api/get_cities")
const cities = await response.json();
  return {cities};
}catch(e){
  return {cities:{}};
}
}