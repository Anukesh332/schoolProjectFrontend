let age = prompt("Enter a value");
age = Number.parseInt(age);

let call = (age) => {
  return age<=18?true:false
}

if (call(age)){
  alert("You cannot drive")
}
else{
  alert("You can drive")
}

