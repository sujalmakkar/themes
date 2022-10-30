export default function logout() {
    fetch('./logoutuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()).then(location.reload()).catch(err => console.log(err));
}