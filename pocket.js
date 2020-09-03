const btnAdd = document.querySelector('#btnAdd');      //Add Customer Button Id
const custList = document.querySelector('#cust_list'); //Select Box
const cname = document.querySelector('#cname');        //Customer Text Box 
//const btnPrice = document.querySelector('#btnPrice');  //Price Button
const btnAmt = document.querySelector('#btnAmt');      //Amount Button
const amt = document.getElementById('txtprice');       //Amount TextBox

let name = [];
let price = [];
let Person = {};
let Per = new Map();

btnAdd.onclick = (e) => {
    //e.preventDefault();
    if(cname.value == '' ){
        alert("Please Enter The Name :");
        return;
    }
    const option = new Option(cname.value);
    custList.add(option);
    name.push(cname.value);
    cname.value='';
    //cname.focus();
    
    
}
/*
btnPrice.onclick = (e) => {
    e.preventDefault();
    
    //document.getElementById('tblprice').innerHTML ="<tr rowspan='3'> <td> Price: </td> <td> <input type='text' id='txtprice'> </td> <td> <button id='btnAmt'> Add Amount </td> </tr>";
}*/

btnAmt.onclick = (e) => {
    
    e.preventDefault();
    if(custList.value=='')
    {
        alert("Please Select Value in List Box ");
        return;
    }
    else{
        if(amt.value==''){
            alert("Please Enter The Amount");
            return;
        }
        else{
                    
            //data="<tr rowspan='3'> <td> Name </td> <td> "+ custList.value;
            //document.getElementById('Display').innerHTML = data;
            
            price.push(parseInt(amt.value));
            Person[custList.value] = price;

            Per[custList.value] = price
            console.log(name);
            console.log(price);
            console.log(Per);
            console.log(Person);
        
        }
    }
}
