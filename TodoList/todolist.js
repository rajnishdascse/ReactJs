import React,{useState, useEffect} from 'react'
import './style.css';

//get the local storage data back

const getLocalData=()=>{
    const lists = localStorage.getItem('MyTodoList');

    if(lists){
        return JSON.parse(lists);
    }
    else{
        return [];
    }
};

const Todo = ()=>{
    const[inputData,setInputData] = useState("");
    const[items, setItems] = useState(getLocalData());
    const[isEditItems, setIsEditItems] = useState('');
    const[toggleButton, setToggleButton] = useState(false);

    //add the item function
    const addItem=()=>{
        if (!inputData){
            alert('Enter some data')
        }
        else if(inputData && toggleButton){
            setItems(
                items.map((curElem)=>{
                    if (curElem.id=== isEditItems){
                        return{
                            ...curElem, name: inputData
                        };
                    }
                    return curElem;
                })
            );
            setInputData([]);    //this one is for toggle button
            setIsEditItems(null);
            setToggleButton(false);
        }
        else{
            const newInputData={
                id : new Date().getTime().toString(),
                name : inputData,
            };
            setItems([...items, newInputData])
            setInputData("");  //to remove the text from the bar
        }

    };

    //edit the items
    const editItems=(index)=>{
        const edited_items = items.find((curElem)=>{
            return curElem.id === index;

        });

        setInputData(edited_items.name);
        setIsEditItems(index);
        setToggleButton(true);

    }

    //delete items sections
    const deleteItem=(index)=>{
        const updatedItems = items.filter((curElem)=>{
            return curElem.id !== index;
        });

        setItems(updatedItems);

    }

    //remove all the items

    const removeAll=()=>{
        setItems([]);
    };

    //saving data in the local storage using hooks

    useEffect(() => {
        localStorage.setItem('MyTodoList', JSON.stringify(items));
        
    }, [items]);

    return (
        <>
            <div className ='main-div'>
                <div className = 'child-div'>
                    <div className='heading'>Welcome to the Todo App</div>
                    <figure>
                        <img src = './Images/todo.jpg' alt = 'logoTodo'/>
                        <figcaption>Create Your Todo List📝</figcaption>
                    </figure>
                    <div className = 'addItems'>
                        <input type = 'text' placeholder='✍ Add your items ' className = 'form-control'
                        value={inputData} onChange={(event)=>setInputData(event.target.value)}
                        />

                        {toggleButton ? (
                        <i className="fa fa-edit add-btn" onClick={addItem}></i>
                        ): (                   
                        <i className="fa fa-plus-square add-btn" onClick={addItem}></i>
                        )}
                    </div>

                {/*show items*/}

                    <div className='showItems'>
                        {items.map((curElem)=>{
                            return(
                                <div className='eachItem' key ={curElem.id}>
                                <h3>{curElem.name}</h3>
                                <div className='todo-btn'>
                                <i className="far fa-edit add-btn" 
                                onClick={()=>editItems(curElem.id)}></i>
                                <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                                </div>
                            </div>

                            );
                        })}
                    </div>
                    

                {/*remove items*/}

                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text='Remove all' onClick={removeAll}>
                            <span>Clear The List</span></button></div>
                </div>
            </div>
        </>
    );
};

export default Todo;