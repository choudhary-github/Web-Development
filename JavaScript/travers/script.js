let onetwo = document.getElementById("onetwo")

//  how to access the <li>two</li> of <li>three</li>

let twoOfThree = onetwo.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].children[1]
console.log(twoOfThree);

/**
 *      onetwo --> selected li element "id"
 *      onetwo.parentElement --> the ul of "id"
 *      onetwo.parentElement.parentElement --> the li of selected "id"
 *      onetwo.parentElement.parentElement.nextElementSibling --> second child of ul
 *      and so on....
 *      cildren is the li of ul
 * 
 */