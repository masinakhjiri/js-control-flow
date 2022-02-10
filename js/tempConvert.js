// let farenheit = 75
// let Celsius = Math.round(((((far -32) /1.8))*100) /100)
// console.log(`${farenheit} degrees Fahrenheit is ${Celsius} degrees Celsius`)


let farenheit = 75
let temp = 'k'

if (temp === "k") {
    cels = (farenheit - 32) * 1.8
    console.log(`${farenheit} degrees Fahrenheit is ${cels} degrees Celsius.`)
}else if (temp === 'c'){
    kelvin = ((farenheit - 32)*1.8 +273.15)
    console.log(`${farenheit} degrees Fahrenheit is ${kelvin} degrees Celsius.`)
    
}
