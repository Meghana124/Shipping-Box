import React,{useState} from 'react'

function ShippingForm(props) {
    const [title,setTitle]=useState("");
    const[weight,setWeight]=useState("");
    const[color,setColor]=useState("");
    const[place,setPlace]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            Title:title,
            Weight:weight,
            Color:color,
            Place:place
        };
        props.addToListCallback(data)
    };
  return (
    <div><h1>ShippingForm</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
        <label >Item Name</label>
         <input type="text" value={title}placeholder="Enter the title" onChange={(e)=>setTitle(e.target.value)} />
         <label >Item Weight</label>
         <input type="number"value={weight} placeholder="Enter the weight"onChange={(e)=>setWeight(e.target.value)}/>
         <label >Color</label>
         <input type="color"value={color}placeholder="Enter the color"onChange={(e)=>setColor(e.target.value)} /><br/>
         <label >Place</label>
         <input type="text"value={place} placeholder="Enter the place"onChange={(e)=>setPlace(e.target.value)} />
         <button>Submit</button>
         </fieldset>
        </form>
        
    </div>
  )
}

export default ShippingForm