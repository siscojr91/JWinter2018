/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let label = document.querySelector('label');
let textField = document.querySelector('input[name="words"]');
let addTextBtn = document.querySelector('input[name="add"]');
let divToAdd = document.querySelector('div');





function addText() {
      
    if ( textField.value.length >= 5 ) {
        
        label.classList.remove('error');
        let result = `<p> ${textField.value} </p>`;
        divToAdd.innerHTML += result;
        
     } else {
        label.classList.add('error'); 
     }
    
}

