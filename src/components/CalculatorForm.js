import React from 'react';

const CalculatorForm = ({ title, submitted, gender, age, height, weight }) => {
    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={submitted}>
                <div onChange={gender} >
                    Gender:{" "}
                    <input type="radio" value="male" name="gender" defaultChecked/>Male
                    <input type="radio" value="female" name="gender"/>Female
                </div>
                <div>
                    Age:{" "}
                    <input
                        type="number"
                        onChange={age}

                        required
                    />
                </div>
                <div>
                    Height:{" "}
                    <input
                        type="number"
                        onChange={height}
                        required
                    />
                </div>
                <div>
                    Weight:{" "}
                    <input
                        type="number"
                        onChange={weight}
                        required
                    />
                </div>
                <div>
                    Activity Level:{" "}
                    <input type="text"/>
                </div>
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
};

export default CalculatorForm;