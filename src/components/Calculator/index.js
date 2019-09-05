import React from 'react';
import CalcNumber from '../CalcNumber';
import '../../assets/styles/_nav.scss';
import '../../assets/styles/_calculator.scss';

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenDisplay: "",
            auxillaryNumber: "",
            baseNumber: ""
        }
    }

    handleCalcButtonClick = (x) => {
        let display = this.state.screenDisplay;
        display += x;
        this.setState({screenDisplay: display})
    }

    clearDisplay() {
        this.setState({
            screenDisplay: ''
        })
    }

    addNumbers() {
        const baseNumber = this.state.screenDisplay;
        this.setState({
            baseNumber:baseNumber,
            screenDisplay: "",
            arithmetic: 'add'
        }, () => {
            console.log(this.state.baseNumber);
        })
    }

    subtractNumbers() {
        const baseNumber = this.state.screenDisplay;
        this.setState({
            baseNumber:baseNumber,
            screenDisplay: "",
            arithmetic: 'subtract'
        }, () => {
            console.log(this.state.baseNmber);
        })
    }

    multiplyNumbers() {
        const baseNumber = this.state.screenDisplay;
        this.setState({
            baseNumber:baseNumber,
            screenDisplay: "",
            arithmetic: 'multiply'
        }, () => {
            console.log(this.state.baseNumber);
        })
    }

    solve() {
        const arithmetic = this.state.arithmetic
        const base = Number(this.state.baseNumber);
        const newNumber = Number(this.state.screenDisplay);
            if (arithmetic === 'add') {
                this.setState({
                    screenDisplay: base + newNumber
                })
            }
    }

    render(){
        const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const numberList = numberArray.map((num) => {
            //console.log(index)
            return (
                <CalcNumber value={ num } key={num} handleButtonClick={this.handleCalcButtonClick}/>

            )})
            return (
                <div className="calculator">
                    <div className="screen">{this.state.screenDisplay}</div>
                    <ul className="number-list">{numberList}</ul>
                    <div className="add calc-button" onClick={() => this.addNumbers()}><p>+</p></div>
                    <div className="subtract calc-button" onClick={() => this.subtractNumbers()}><p>-</p></div>
                    <div className="multiply calc-button"><p>x</p></div>
                    <div className="divide calc-button"><p>/</p></div>
                    <div className="decimal calc-button"><p>.</p></div>
                    <div className="solve" onClick={() => this.solve()}><p>Solve</p></div>
                    <div className="all-clear calc-button" onClick={() => this.clearDisplay()}><p>AC</p></div>
                </div>
                )
            }
        }
    
    export default Calculator