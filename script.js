let  peoplecount = 0

// This is one way of writing function 

/*function btnclicked() {
    peoplecount = peoplecount + 1
    document.getElementById("count-people").innerText = peoplecount;
    console.log(peoplecount)
}*/

//  This is another way of writing function

function btnclicked(){
    let noofpeople = document.getElementById("count-people")
    console.log(noofpeople)
    peoplecount = peoplecount + 1
    console.log(peoplecount)
    noofpeople.innerText = peoplecount
}

function btnsave(){
    console.log(peoplecount)
}

/*let lap1 = 34
let lap2 = 33
let lap3 = 36

function totalracingtime(){
    let totaltime=0
    totaltime = lap1 + lap2 + lap3
    console.log("Total racing time is " + totaltime)
}

totalracingtime()*/

// Youtube - https://youtu.be/jS4aFq5-91M?t=2730


