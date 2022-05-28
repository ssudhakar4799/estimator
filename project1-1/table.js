// var selects=document.getElementById('select')
// console.log(selects);

// var button = document.getElementById('btn')
// console.log(btn);

// button.addEventListener('click',clips)
// function clips() {
//     var selectors=selects.value;
//     console.log(selectors);

// }



var button = document.getElementById('btn');
console.log(btn);

button.addEventListener('click', table);
function table() {
    var tables =
        '<tr>' +
        '<th>Accessories</th>' +
        '<th>Unitprice</th>' +
        '<th>Qty</th>' +
        '<th>Price</th>' +
        '<th>Action</th>' +
        '</tr>' +
        '<tr>' +
        '<th>Frame</th>' +
        '<td><input type="number" name="number" id="unitprice"></td>' +
        '<td><input type="number" name="number" id="qty"></td>' +
        '<td><input type="number" name="number" id="total"></td>' +
        '<td><button id="btn2">+</button><button id="btn3">x</button></td>' +
        '</tr>' +
        '</tr>' +
        '<tr>' +
        '<th>Door</th>' +
        '<td><input type="number" class="selctor" name="number" id="unitprice1"></td>' +
        '<td><input type="number" class="selctor" name="number" id="qty1"></td>' +
        '<td><input type="number" name="number" id="total1"></td>' +
        '<td><button>x</button></td>' +
        '</tr>' +
        '</tr>' +
        '<tr>' +
        '<th>storper</th>' +
        '<td><input type="number" class="selctor" name="number" id="unitprice2"></td>' +
        '<td><input type="number" class="selctor" name="number" id="qty2"></td>' +
        '<td><input type="number" name="number" id="total2"></td>' +
        '<td><button>x</button></td>' +
        '</tr>' +
        '</tr>' +
        '<tr>' +
        '<th>Screw</th>' +
        '<td><input type="number" class="selctor" name="number" id="unitprice3"></td>' +
        '<td><input type="number" class="selctor" name="number" id="qty3"></td>' +
        '<td><input type="number" name="number" id="total3"></td>' +
        '<td><button>x</button></td>' +
        '</tr>' +
        '<th colspan="3">TOTAL</th>' +
        '<td><input type="number" name="number" id="alltotal"></td>'


    console.log(tables);
    document.getElementById('tables').innerHTML = tables;

    //button click new row add
    var button2 = document.getElementById('btn2');
    console.log(button2);
    button2.addEventListener('click', addrow);
    function addrow() {
        var emptytable = '<table border="1">' +
            '<tr>' +
            '<th><input type="text" name="text" id=""></th>' +
            '<td><input type="number" name="number" id=""></td>' +
            '<td><input type="number" name="number" id=""></td>' +
            '<td><input type="number" name="number" id="total4"></td>' +
            '<td><button>x</button></td>' +
            '</tr>' +
            '</table>'
        var emptyrow = document.getElementById('tables');
        var emptyrow1 = emptyrow.insertRow(5);
        //var emptyrow1 = emptyrow.deleteRow(3);
        emptyrow1.innerHTML = emptytable;

    }
    //get input box value 
    function inputs() {
        var uprice = document.getElementById('unitprice').value;
        var qrate = document.getElementById('qty').value;
        var total = uprice * qrate;
        document.getElementById('total').value = total;
    }
    var totals = document.getElementById('total');
    totals.addEventListener('mouseenter', inputs);

    //get input box value door

    function doorinput() {
        var uprice1 = document.getElementById('unitprice1').value;
        var qrate1 = document.getElementById('qty1').value;
        var total1 = uprice1 * qrate1;
        document.getElementById('total1').value = total1;
    }
    var totals1 = document.getElementById('total1');
    totals1.addEventListener('mouseenter', doorinput);

    //get input box value storper

    function storperinput() {
        var uprice2 = document.getElementById('unitprice2').value;
        var qrate2 = document.getElementById('qty2').value;
        var total2 = uprice2 * qrate2;
        document.getElementById('total2').value = total2;
    }
    var totals2 = document.getElementById('total2');
    totals2.addEventListener('mouseenter', storperinput);

    //get input box value screw

    function screwinput() {
        var uprice3 = document.getElementById('unitprice3').value;
        var qrate3 = document.getElementById('qty3').value;
        var total3 = uprice3 * qrate3;
        document.getElementById('total3').value = total3;
    }
    var totals3 = document.getElementById('total3');
    totals3.addEventListener('mouseenter', screwinput);

    //clear button click
    var button3 = document.getElementById('btn3');
    button3.addEventListener('click', clear);
    function clear() {
        var qrates = document.getElementById('qty');
        console.log(qrates);
        //var zero = null;
        //var refresh = qrates * zero;
        //qrates.value = refresh;
        qrates.value=null;
    }
    //alltotals

    function alltotalsvalue() {
        var currenttotal  =total+total1+total2+total3;

        console.log(currenttotal);
        document.getElementById('alltotal').value = currenttotal;
    }
    var totals4 = document.getElementById('alltotal')
    totals4.addEventListener('mouseenter',alltotalsvalue)


 }
