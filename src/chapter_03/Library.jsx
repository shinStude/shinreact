import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="재민 자서전." numOfPage={300} />
            <Book name="쵸쵸의 역사." numOfPage={400} />
            <Book name="삼계탕 먹고싶다." numOfPage={500} />
        </div>
    )
}


export default Library;