   
    var value = 0;
    const display = document.querySelector('.para');
    const incrementbtn = document.querySelector('.increament');
    incrementbtn.addEventListener('click', increment);
    
    // Increament Function
    function increment() {
        value = value + 1;
        display.textContent = value;
    }


    const decrementbtn = document.querySelector('.decrement');
    decrementbtn.addEventListener('click', Decrement);
    function Decrement() {
        value = value - 1;
        display.textContent = value;
    }
    
    console.log(window)
    const resetbtn = document.querySelector('.reset');
    resetbtn.addEventListener('click', reset);
    function reset() {
        value = 0;
        display.textContent = value;

    }