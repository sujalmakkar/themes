export default function ripple() {
        var ripple_elements = [...document.getElementsByClassName('ripple-effect')];
        ripple_elements.forEach(a => a.addEventListener('click', function (e) {
                const ripple = document.createElement("span");

                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';

                ripple.classList.add('ripple');

                e.target.appendChild(ripple);

                setTimeout(() => {
                        ripple.remove();
                }, 800);
        }));
}