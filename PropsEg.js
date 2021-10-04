/*import react from 'react';*/
import {useState} from 'react';



const PropsEg=(props)=>{
    let [title,setTitle] = useState('JavaScript');
    let box;


    /*
    function dosomething(){
        console.log('Hello world!');

    }
    */

   /*using arrow function */  
   /*
    const dosomething=()=> console.log('Hello World!');*/



    /*passing parameter*/
    const dosomething=(data)=>{
        console.log('Hello ' +data)

    };

    /*working of state */
   /* const changeTitle=()=>{
        setTitle('Python')
       
    }*/
    
const readValue=(value)=>{
    setTitle(value);
   /* box = value;   when we want to take the input and then change the text after click */
}

 


    return(
        <div>
            <h3>{title}</h3>
            {/*<button onClick={dosomething}>Click</button>*/}

           {/* <button onClick={dosomething.bind(this,'Rajnish')}>Click</button>  */}
           
            {/* or we can use another technique instead of using bind */}

            <button onClick={()=>{
                dosomething('Rajnish');
            }}>Click</button>
            <button onClick={()=>{
                setTitle('Python');
                /* setTitle(box) */  

            }
            }>changeTitle</button>
            <br/>
            <input type='text' placeholder='Enter title' onChange={(event)=>{
                readValue(event.target.value); 
            }}/> 
        </div>
    )
}

export default PropsEg;