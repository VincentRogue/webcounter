// set initial count

let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("sub")) {
            count = count - 10;
        } else if (styles.contains("add")) {
            count = count + 10;
        } else if (styles.contains("multiply")) {
            count = count * 2;
        } else if (styles.contains("divide")) {
            count = count / 2;
        } else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count == 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});