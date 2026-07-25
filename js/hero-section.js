// Dynamic greeting base on current time
export function updateGreeting(){
    const greetingEl = document.getElementById("greeting");
    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
    greeting = "Good Morning!";
    } else if (hour < 18) {
    greeting = "Good Afternoon!";
    } else {
    greeting = "Good Evening!";
    }

    greetingEl.textContent = greeting;
}