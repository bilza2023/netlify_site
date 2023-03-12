
export default function isLoggedInFn() {
const token = localStorage.getItem("token");
    if (token == null || token.length == 0) {
    return false;
    }else {
    return true;
    }
}