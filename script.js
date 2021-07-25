var count = 3;

function addOne() {
    count += 1;
    document.querySelector(".row span").innerText = `${count} like(s)`;
}