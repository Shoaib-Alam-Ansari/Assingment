function convertToNumber (str){
  try{
    const num = Number (str);
    if(Number.isNaN(num)){
        throw new Error ("Invalid Number")
    }
    return num;
  }catch (error){
    return "Invalid Number"

  }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));