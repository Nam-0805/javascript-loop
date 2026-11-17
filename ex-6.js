// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// console.log(companyName[companyName.length - 1])
// Start coding here
for( let i = companyName.length - 1; i >= 0; i--){
    reversedCompanyName = reversedCompanyName + companyName[i]
    
}

console.log(reversedCompanyName);
