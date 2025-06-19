function bmi(weight,height){
    const bmiValue = weight / (height * height);
    return Math.round(bmiValue);
}
console.log(bmi(70,1.75));