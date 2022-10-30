export default function logout() {
    fetch('./logoutuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()).then(result => {
        if (result.status == 200) {
            location.reload();
        }
    }).catch(err => console.log(err));
}