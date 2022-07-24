
var inn = document.getElementById('inp1');
inn.addEventListener("keypress",function(event){
    if (event.key === "3"){
        document.getElementById('sub1').classList.add("xyz");
        document.getElementById('sub2').classList.add("xyz");
        document.getElementById('sub3').classList.add("xyz");
        console.log("sai");

    }
});

var inn = document.getElementById('inp1');
inn.addEventListener("keypress",function(event){
    if (event.key === "4"){
        document.getElementById('sub1').classList.add("xyz");
        document.getElementById('sub2').classList.add("xyz");
        document.getElementById('sub3').classList.add("xyz");
        document.getElementById('sub4').classList.add("xyz");
        console.log("krishna");     
    }
});

var inn = document.getElementById('inp1');
inn.addEventListener("keypress",function(event){
    if (event.key === "5"){
        document.getElementById('sub1').classList.add("xyz");
        document.getElementById('sub2').classList.add("xyz");
        document.getElementById('sub3').classList.add("xyz");
        document.getElementById('sub4').classList.add("xyz");
        document.getElementById('sub5').classList.add("xyz");
        console.log("datt");
    }
});

var inn = document.getElementById('inp1');
inn.addEventListener("keypress",function(event){
    if (event.key === "6"){
        console.log("hai");
        document.getElementById('sub1').classList.add("xyz");
        document.getElementById('sub2').classList.add("xyz");
        document.getElementById('sub3').classList.add("xyz");
        document.getElementById('sub4').classList.add("xyz");
        document.getElementById('sub5').classList.add("xyz");
        document.getElementById('sub6').classList.add("xyz");
    }
});
var inn = document.getElementById('inp1');
inn.addEventListener("keypress",function(event){
    if (event.key === "7"){
        console.log("hai");
        document.getElementById('sub1').classList.add("xyz");
        document.getElementById('sub2').classList.add("xyz");
        document.getElementById('sub3').classList.add("xyz");
        document.getElementById('sub4').classList.add("xyz");
        document.getElementById('sub5').classList.add("xyz");
        document.getElementById('sub6').classList.add("xyz");
        document.getElementById('sub7').classList.add("xyz");
    }
});
var inn1 = document.getElementById('inp2');
inn1.addEventListener("keypress",function(event){
    if (event.key === "1"){
        document.getElementById('lab1').classList.add("xy");
        console.log("krishna");     
    }
});

var inn1 = document.getElementById('inp2');
inn1.addEventListener("keypress",function(event){
    if (event.key === "2"){
        document.getElementById('lab1').classList.add("xy");
        document.getElementById('lab2').classList.add("xy");
        console.log("krishna");     
    }
});
var inn1 = document.getElementById('inp2');
inn1.addEventListener("keypress",function(event){
    if (event.key === "3"){
        document.getElementById('lab1').classList.add("xy");
        document.getElementById('lab2').classList.add("xy");
        document.getElementById('lab3').classList.add("xy");
        console.log("krishna");     
    }
});
var inn1 = document.getElementById('inp2');
inn1.addEventListener("keypress",function(event){
    if (event.key === "4"){
        document.getElementById('lab1').classList.add("xy");
        document.getElementById('lab2').classList.add("xy");
        document.getElementById('lab3').classList.add("xy");
        document.getElementById('lab4').classList.add("xy");
        console.log("krishna");     
    }
});

function sumval(){
    var num1 = Number(document.formcal.txt1.value);
    var num2 = Number(document.formcal.txt2.value);
    var num3 = Number(document.formcal.txt3.value);
    var num4 = Number(document.formcal.txt4.value);
    var num5 = Number(document.formcal.txt5.value);
    var num6 = Number(document.formcal.txt6.value);
    var num7 = Number(document.formcal.txt7.value);
    var num8 = Number(document.formcal.txt8.value);
    var num9 = Number(document.formcal.txt9.value);
    var num10 = Number(document.formcal.txt10.value);
    var num11 = Number(document.formcal.txt11.value);
    var num12 = Number(document.formcal.txt12.value);
    var num13 = Number(document.formcal.txt13.value);
    
    
    var res1 = num1*3;
    var res2 = num2*1.5;
    var res3 = num3+num4+num5+num6+num7+num8+num9;
    var res4 = num10+num11+num12+num13;

    var res5 = res3*3;
    var res6 = res4*1.5;

    var res7 = res5+res6;
    var res8 = res1+res2;

    var res9 = res7/res8;
    document.formcal.res.value = res9; 
}
console.log("sai");
