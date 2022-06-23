const btns = document.querySelectorAll('.btn');
const counter = document.querySelector('#counter');



let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('reset')) {
            count = 0;
        }

        if (count > 0) {
            counter.style.color = 'green'
        } else if (count < 0) {
            counter.style.color = 'red'
        } else if (count === 0) {
            counter.style.color = 'black'
        }

        counter.textContent = count
    })
})