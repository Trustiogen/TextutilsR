import React, {useState} from 'react'


export default function Textform(props) {
 
    const handleUpClick = ()=>
    {
       // console.log("Uppercase was Clicked")
        let newText= Text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = ()=>
    {
       // console.log("Uppercase was Clicked")
        let newText1= Text.toLowerCase();
        setText(newText1)
    }

    const handleClearClick = ()=>
    {
       // console.log("Uppercase was Clicked")
        let newText1= "";
        setText(newText1)
    }

    const handleCopyClick = ()=>
    {
       // console.log("Uppercase was Clicked")
       var text4 = document.getElementById("Mytextbox")
       text4.select();
       navigator.clipboard.writeText(text4.value);
        
    }

  const handleOnChange = (event)=>  
    {
        console.log("handleOnChange") 
        setText(event.target.value)   
    }
    const handleextraspaces = ()=>
    {
        let newText1= Text.split(/ +/);
        setText(newText1.join(" "))
        
    }  

    //function wordsLen(Text)
      // {
        //const array = Text.trim().split(/\s+/);
        //return array.length;
      // }

    const [Text, setText] = useState('Enter Text Here');
    //const [Num, setNum] = useState(0);
    //<p> {Text.split(" ").length} words and {Text.length} characters</p>
        

    return (
<>
    <div className ="container" style={{color:props.mode==='dark'?'white':'black'}}> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={Text} onChange ={handleOnChange} 
    style={{backgroundColor:props.mode==='dark'?'#21375d':'white' , color: props.mode==='dark'?'white':'black' }} id="Mytextbox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleextraspaces}>Clear Extra Spaces</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Your Text Summary</h1>
       
        <p> {Text.length>0?Text.trim().split(/\s+/).length:0} words and {Text.length} characters</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter something to preview it here"}</p>
    </div>


    {/* <h2>Multiplication of Values</h2>
    <div className="mb-3">
   <textarea className="form-control" value={Num} onChange ={handleOnChange} id="Mytextbox1" rows="2"></textarea>
    </div>
    <div className="mb-3">
    <textarea className="form-control" value={Num} onChange ={handleOnChange} id="Mytextbox2" rows="2"></textarea>
    </div>
    <button className="btn btn-primary my-3" onClick={Multiply}>
        Multiply 
    < /button> */}
</>
  )
}
