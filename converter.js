// var temperature = null
// var button = document.getElementById("converter");
// var outputEl = document.getElementById("output");

// function toFahrenheit () {
//   return temperature * 1.8 + 32;
// }

// function toCelsius () {
//   return (temperature - 32)/1.8
// }


// // Get a reference to the button element in the DOM


// // This function should determine which conversion should
// // happen based on which radio button is selected.

// function determineConverter (clickEvent) {


//   temperature = document.getElementById("temperature").value

//   // var colorClass = "green";

//   if (document.getElementById("radioCelsius").checked === true) {
//     converted = toFahrenheit (temperature);
//     // if (converted > 90) 
//     // {
//     //   colorClass = "red"
//     // } 
//     // if (converted < 32) 
//     // {
//     //   colorClass = "blue"
//     // }
//   }
//   else {
//     converted = toCelsius (temperature);
//   // if (converted > 32) 
//   //   {
//   //     colorClass = "red"
//   //   } 
//   //   if (converted < 0) 
//   //   {
//   //     colorClass = "blue"
//   //   }
//   }
//   outputEl.innerHTML = `This is equal to <span class=${colorClass}>${converted}</span>.`
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);
// // button.addEventListener("keypress", determineConverter);






var temperature = null
var button = document.getElementById("converter");
var outputEl = document.getElementById("output");

function toFahrenheit () {
  return temperature * 1.8 + 32;
}


function toCelsius () {
  return (temperature - 32)/1.8
}

function determineConverter (clickEvent) {

  var colorClass = "green";

  temperature = document.getElementById("temperature").value


  if (document.getElementById("radioCelsius").checked === true) {
    converted = toFahrenheit (temperature);
    if (converted > 90) 
    {
      colorClass = "red";
    }
    if (converted < 32) 
    {
      colorClass = "blue";
    }
  }
  else {
    converted = toCelsius(temperature);
        if (converted > 32) 
    {
      colorClass = "red";
    }
    if (converted < 0) 
    {
      colorClass = "blue";
    }
  }
  outputEl.innerHTML = `The new temperature is <span class="${colorClass}">${converted}</span>`
}


// // Get a reference to the button element in the DOM

// // This function should determine which conversion should
// // happen based on which radio button is selected.

// // Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);









































