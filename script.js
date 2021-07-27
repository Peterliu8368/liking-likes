
function add(num) {
    let count = document.querySelector(`.row .num${num}`).innerText;
    count++;
    document.querySelector(`.row .num${num}`).innerText = `${count}`;
}
