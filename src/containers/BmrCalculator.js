import React, {Component} from 'react';
import CalculationResult from "../components/CalculationResult";
import CalculatorForm from "../components/CalculatorForm";

class BmrCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalculated: false,
            gender: "male",
            age: 0,
            height: 0,
            weight: 0,
            activity: "low",
            bmr: 1800,
            fields: {},
            errors: {}
        }
    }

    // componentDidMount(){
    //     console.log(this.state.isCalculated);
    // }

    formSubmitted = () => {
        this.setState({isCalculated: true})
    }

    makeNewCalculation = () => {
        this.setState({isCalculated: false, gender:"male"})

    }

    calculateBMR = (event) => {
        event.preventDefault();
        const manBMR = Math.floor(66.4730 + (13.7516 * this.state.weight) + (5.0033 * this.state.height) - (6.7550 * this.state.age));
        const womanBMR = Math.floor(655.0955 + (9.5634 * this.state.weight) + (1.8496 * this.state.height) - (4.6756 * this.state.age));

        if (this.state.gender === "male") {
            this.setState({bmr: manBMR})
        } else {
            this.setState({bmr: womanBMR})
        }
        this.formSubmitted();
    }

    handleAgeChange = (event) => {
        this.setState({age: event.target.value})
    }

    handleHeightChange = (event) => {
        this.setState({height: event.target.value})
    }

    handleWeightChange = (event) => {
        this.setState({weight: event.target.value})
    }

    selectGender = (event) => {
        this.setState({gender: event.target.value})
    }
    render() {
        const resultTitle = "BMR is calculated";
        const calculatorTitle = "Calculate your BMR";

        return (
            <div>
                {this.state.isCalculated ?
                <CalculationResult
                    click={this.makeNewCalculation}
                    title={resultTitle}
                    gender={this.state.gender}
                    age={this.state.age}
                    height={this.state.height}
                    weight={this.state.weight}
                    activity={this.state.activity}
                    bmr={this.state.bmr}
                /> :
                <CalculatorForm
                    click={this.formSubmitted}
                    title={calculatorTitle}
                    submitted={this.calculateBMR}
                    age={this.handleAgeChange}
                    height={this.handleHeightChange}
                    weight={this.handleWeightChange}
                    gender={this.selectGender}
                />}
            </div>
        )
    }
}

export default BmrCalculator;