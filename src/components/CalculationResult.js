const CalculationResult = ({ title, click, gender, age, height, weight, activity, bmr }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>Gender: {gender}</div>
            <div>Age: {age}</div>
            <div>Height: {height}</div>
            <div>Weight: {weight}</div>
            <div>Activity: {activity}</div>
            <h4>Your BMR is {bmr} kcal</h4>
            <button onClick={click}>New calculation</button>
        </div>
    );
};

export default CalculationResult;