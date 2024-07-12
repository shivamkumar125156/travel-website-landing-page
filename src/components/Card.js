import { useState } from "react";

function Card({image,price,name,id,info,removeTour}){
    const [readmore,setReadmore]=useState(false);
    const description= readmore? info:info.substring(0,200);//Here we want substring starting from index 0 and end at index 200
    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ?'Show less':'Read More'}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}>Not Intrested</button>
        </div>
    );
}
export default Card;
