//Fortune array
const fortunes_array = [

    "You will experience a great increase of rain.",

    "Today will be your day of luck.",

    "Beware of pink mice.",

    "Do whats been on your mind, it's time.",

    "Your ivestments will come to profit.",

    "A quest comes your way.",

    "Patience is a vertue.",

    "Out of luck.",

    "Keep an eye out for lucky pennies, luck comes you way.",

];

//Asigning variables
const crackButton = document.getElementById("crackButton");
const fortune = document.getElementById("fortune");
const cookie = document.getElementById("cookie");

//Adding therandomization of fortunes
async function crackCookie()
{
    cookie.classList.add("shaking");

    cookie.addEventListener
    ("animationend", 
        function ()
        {
            cookie.classList.remove("shaking");
        },
        {once:true}
    );
    
    fortune.classList.remove("visible");

    try
    {
        const response = await fetch
        (
            "https://api.adviceslip.com/"
        )
        const data = await response.json();
        fortune.textContent = data.slip.advice;
    } 
    catch (error)
    {
        const index = Math.floor(Math.random() * fortunes_array.length);
        fortune.textContent = fortunes_array[index];
    }

    setTimeout
    (
        function ()
        {
            fortune.classList.add("visible");
        },
        300
    );
}

//Crack button functionality
crackButton.addEventListener("click", crackCookie);