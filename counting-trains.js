let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]


//Using Multiple Loops to achieve a result START

//Loop through new Inventory Car Types

// let i = 0
// let typeS1Count = 0

// while (i < newInventoryCarModels.length) {

//     console.log(newInventoryCarModels[i]);

//     if (newInventoryCarModels[i] === "S1") {
//         typeS1Count += 1
//     }

//     i++

// }

// console.log('Number of S1 Cars is: ' + typeS1Count)

// //Include T1s in the S1 count

// let x = 0
// let typeS1CountNew = 0

// while (x < newInventoryCarModels.length) {

//     if (newInventoryCarModels[x] === "T1" || newInventoryCarModels[x] === "S1") {

//         typeS1CountNew += 1
//     }

//     x++

// }

// console.log('Using a while Loop Number of S1 Cars including T1 is: ' + typeS1CountNew)

// let forLooptypeS1CountNew = 0

// for (let a = 0; a < newInventoryCarModels.length; a++) {

//     if (newInventoryCarModels[a] === "T1" || newInventoryCarModels[a] === "S1") {

//         forLooptypeS1CountNew += 1
//     }


// }

// console.log('Using a for Loop the Number of S1 Cars including T1 is: ' + forLooptypeS1CountNew)


// //Lorrie Counter

// let lorrieCount = 0

// for (let l = 0; l < newInventoryCarTypes.length; l++) {

//     if (newInventoryCarTypes[l] === "Lorrie") {

//         lorrieCount += 1

//     }


// }

// console.log(lorrieCount)

//Using Multiple Loops to achieve a result START

//Using One Loop to achieve the same result and show all of the cars in our inventory

console.log('Below is a list of cars availble in our inventory: ')
for (let index = 0; index < newInventoryCarModels.length; index++) {

    console.log('Car Model: ' + newInventoryCarModels[index] + ' Car Type: ' + newInventoryCarTypes[index] + ' Year Built: ' + newInventoryYearBuilt[index])


}


