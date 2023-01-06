var inp_as=document.getElementById('array_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("generate_array");
var inp_aspeed=document.getElementById("animation_speed");
var butts_used_algorithms=document.querySelectorAll(".used_algorithms button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:rows";
window.onload=update_array_size();

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);


function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 40;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.2;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:black; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}



for(var i=0;i<butts_used_algorithms.length;i++)
{
    butts_used_algorithms[i].addEventListener("click",runalgo);
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble Sort":Bubble();
                        break;
        case "Selection Sort":Selection_sort();
                        break;
        case "Insertion Sort":Insertion();
                        break;
        case "Merge Sort":Merge();
                        break;
        case "Quick Sort" :Quick();
                        break;
        case "Heap Sort":Heap();
                        break;
    }
}
function disable_buttons()
{
    for(var i=0;i<butts_used_algorithms.length;i++)
    {
        butts_used_algorithms[i].classList=[];
        butts_used_algorithms[i].classList.add("butt_locked");
        butts_used_algorithms[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

