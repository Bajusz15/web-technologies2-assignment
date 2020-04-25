export function authHeader() {
    // return authorization header with basic auth credentials
    let user = JSON.parse(localStorage.getItem('user'));
    //todo: same thing, user should be from cookie
    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}