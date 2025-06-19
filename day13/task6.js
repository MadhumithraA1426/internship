function bmi(weight,height){
    if (height <= 0 || weight <= 0) {
        return "Invalid input";
    }
    const bmiValue = weight / (height * height);
    if (bmiValue < 18.5) {
        return "Underweight";
    } else if (bmiValue < 24.9) {
        return "Normal weight";
    } else if (bmiValue < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}
console.log(bmi(70,1.75));