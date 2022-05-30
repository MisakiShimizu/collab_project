// calculator app

// import Calculations from './CalculatorCalc.js';

const calculator = () => {
    // const createNum = () => {
    //     const num = [];
    //     let i = 0;

    //     for (let i = 9; i > 0; i --) {
            
    //         num.push(
    //             <button key={i}>{i}</button>
    //             )
    //     }
    //     return num;
    // }
    return(
        <div className="calculator_outer wrapper">
            <div className="calculator">

                <div className="display">
                    <span>(0)</span> 0
                </div>
                <div className="keypad">
                    <div>

                        <div className="operators">

                            <button>÷</button>
                            <button>×</button>
                            <button>+</button>
                            <button>-</button>
                            {/* <button className="equal">=</button> */}
                        </div>
                        <button className="equal">=</button>
                    </div>
                    <div className="calculator_keypad_main">
                         <div className="functions">

                        <button>AC</button>
                        <button>±</button>
                        <button>DEL</button>
                       
                        </div>
                    

                        <div className="numbers">
                            {/* { createNum() } */}
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>0</button>
                            <button>.</button>
                            
                        </div>
                            
                    </div>
                </div>
            </div>
            
        </div>
    )
  
}

export default calculator;

// Create skeleton for calculator
// Event listener for when button is pressed
// Save data 
// Display number on screen
// Compute data