import { useState } from "react";
function TodoList(){
    const[activity,setActivity]=useState("");
    const[listData,setlistData]=useState([]);
    function addactivity(){
        setlistData(()=>{
            const updatedlist=[...listData,activity];
            // console.log(updatedlist);
            setActivity("");
            return updatedlist;
        })
    }
    function removeactivity(i){
        const updatedlist=listData.filter((ele,id)=>{
            // console.log(ele,id);
            return i!=id;
        })
        setlistData(updatedlist);
    }
    function remove(){
        setlistData([]);
    }
    return(
        <div className="todolist">
            <h1>todo</h1>
            <input type="text" placeholder="add item" className="input" value={activity} onChange={((e)=>setActivity(e.target.value))}/>
            <button className="inputbuttons" onClick={addactivity}>Add</button>
            <h1>Here is your list </h1>
            {listData?listData.map((data,i)=>{
                return(
                    <div key={i} className="listmain">
                        <div className="listdata">{data}</div>
                        <button onClick={()=>removeactivity(i)} className="inputbuttons">remove</button>
                    </div>
                )
            }):""}
            <br />
            {listData.length>1?<button className="buttons" onClick={remove}>remove all</button>:""}
        </div>
    )
}
export default TodoList;