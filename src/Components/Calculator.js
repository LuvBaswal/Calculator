import { useState } from "react";

function Calculator(){

    const[Calc,setCalc] = useState("");
    const[Result,setResult] = useState("");

    const ops = ['/','*','+','-','.'];

    const updatecalc = ((value)=>{

        if(
            ops.includes(value) && Calc === '' ||
            ops.includes(value) && ops.includes(Calc.slice(-1))
        ){
            return;
        }

        setCalc(Calc + value);


        if(!ops.includes(value)){
            setResult(eval(Calc + value).toString());
        }

    })

    const createDigits = (()=>{
        const digits = [];

        for(let i = 1; i<10; i++){
            digits.push( 
                <button onClick={()=>updatecalc(i.toString())}
                 key={i}>
                    {i}
                    </button> 
             )
        }
        return digits;
    })

    const calculate = (()=>{
        setCalc(eval(Calc).toString());
    })

    const DeleteLast = (()=>{
         if(Calc == ' '){
            return;
         }else{
            const value = Calc.slice(0, -1);
            setCalc(value);
         }
    })

    return(
        <> 
          <div className="calculator">
            <div className="display">
              {Result ?  <span>({Result})</span> : '' }&nbsp;{ Calc || "0" }
            </div>
            <div className="operators  ">
                <button onClick={()=>updatecalc('/')}>/</button>
                <button onClick={()=>updatecalc('*')}>*</button>
                <button onClick={()=>updatecalc('+')}>+</button>
                <button onClick={()=>updatecalc('-')}>-</button>


                <button onClick={()=>DeleteLast()}>DEL</button>

            </div>
            <div className="digits">
                {createDigits()}
                <button onClick={()=>updatecalc('0')}>0</button>
                <button onClick={()=>updatecalc('.')}>.</button>

                
                <button onClick={()=>calculate()}>=</button>
            </div>
          </div>
        </>
    )
}

export default Calculator