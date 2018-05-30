import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
console.log("working.......");
var temp = <p>This is my template</p>;
var node = document.getElementById("root");

class Myclass {
    hands = 2;
    constructor(props){
        this.name = "mark";

    }
}

const myClass = new Myclass();
console.log(myClass);
ReactDOM.render(temp, node);
