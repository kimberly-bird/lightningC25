// Challenge 1: Create a function called 'go' that takes 2 arguments: direction (forwards, backwards, etc.) and speed (mph). The function, when invoked, will print out the following in your console (for example): "The car is moving forward, at 25 mph."


// my version of the function
function go(direction, speed) {
    console.log(`The car is moving ${direction} at ${speed} mph`)
}

go("forward", 34)
go("backward", 5)
go("forward", 90)



// Challenge 2: Instead of the function printing to the console, print to the DOM 
function move(direction, speed) {
    const element = document.getElementById("car")
    element.innerHTML += `The car is moving ${direction} at ${speed} mph `
}

move("backward", 7)
move("forward", 75)
