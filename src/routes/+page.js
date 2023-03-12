import {is_login} from "$lib/stores/appStore.js";


export async function load({ params }) {

try {
    const token = localStorage.getItem("token");
        if (token == null || token.length == 0) {
            is_login.set(false);
        }else {
            is_login.set(true);
        }
  } catch (error) {
    console.error(error);
  }
}