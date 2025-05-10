document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;
        let display = document.getElementById("display");
        if (value === "C") {
            display.value = "";
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                alert("Invalid Expression");
            }
        } else {
            display.value += value;
        }
    });
});