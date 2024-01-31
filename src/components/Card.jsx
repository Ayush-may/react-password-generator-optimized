import React,{useState,useEffect, useCallback,useRef} from 'react'

const Card = () => {

    const [password,setPass] = useState('');
    const [length, setLength] = useState(8);
    const [isNum, setNum] = useState(false);
    const [isChar,setChar] = useState(false);

    const inputField = useRef(null);
    
    const passwordGen = useCallback(()=>{
        var pass = '';
        var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if(isNum){
            string+='1234567890';
        }
        if(isChar) {
            string+='!@#$%^&*(){}[]';
        }

        for(let i=1;i<length;i++){
            let char = Math.floor(Math.random() * string.length);
            pass+=string.charAt(char);
        }

        setPass(pass);
    },[length,isNum,isChar,setPass]);
    
    useEffect(()=>{
        passwordGen();
    },[isChar,isNum,length,setLength]);
    
    return (
        <div className="w-auto h-auto bg-black px-6 py-4 gap-2 flex items-center justify-center flex-col rounded-xl" >
            <div className="text-white w-full flex items-center justify-center" >
                <input type="text" className="p-1 w-10/12 text-black" value={password} />
                <button className="bg-green-500 py-1 px-2 " >Ok</button>
            </div>
            <div className="w-full flex items-center justify-around gap-4 flex-nowrap text-white">
                <div>
                    <input 
                        type="range" 
                        id="range" 
                        min='6' 
                        step="1"  
                        value={length} 
                        onChange={(e)=>setLength(e.target.value)}
                    />
                    <label htmlFor="range" className="text-white" >length {length}</label>
                </div>
                <div>
                    <input type="checkbox" id="number" checked={isNum} onChange={()=>setNum(prev=>!prev)} />
                    <label htmlFor="number">Number</label>
                </div>
                <div>
                    <input type="checkbox" id="char" checked={isChar} onChange={()=>setNum(prev=>!prev)}/>
                    <label htmlFor="char">Character</label>
                </div>
            </div>
        </div>
    )
}

export default Card;