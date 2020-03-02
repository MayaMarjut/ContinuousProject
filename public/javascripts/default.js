       
  $('#title').focus(function() {
    $('#title').siblings().css('font-weight','bold');
    $('#description').prev().children().css('font-weight','lighter');
    $('#source').siblings().css('font-weight','lighter');
    $('#startLearningDate').siblings().css('font-weight','lighter');
    $('#timeSpend').siblings().css('font-weight','lighter');
    $('#timeToMaster').siblings().css('font-weight','lighter');
    $('#inProg').siblings().css('font-weight','lighter');
    $('#completionDate').siblings().css('font-weight','lighter');    
});
$('#description').focus(function() {
    $('#description').prev().children().css('font-weight','bold');
    $('#title').siblings().css('font-weight','lighter');
    $('#source').siblings().css('font-weight','lighter');
    $('#startLearningDate').siblings().css('font-weight','lighter');
    $('#timeSpend').siblings().css('font-weight','lighter');
    $('#timeToMaster').siblings().css('font-weight','lighter');
    $('#inProg').siblings().css('font-weight','lighter');
    $('#completionDate').siblings().css('font-weight','lighter');  
});
$('#source').focus(function() {
    $('#source').siblings().css('font-weight','bold');
    $('#title').siblings().css('font-weight','lighter');
    $('#description').prev().children().css('font-weight','lighter');
    $('#startLearningDate').siblings().css('font-weight','lighter');
    $('#timeSpend').siblings().css('font-weight','lighter');
    $('#timeToMaster').siblings().css('font-weight','lighter');
    $('#inProg').siblings().css('font-weight','lighter');
    $('#completionDate').siblings().css('font-weight','lighter');  
}); 
$('#startLearningDate').focus(function() {
    $('#startLearningDate').siblings().css('font-weight','bold');
    $('#title').siblings().css('font-weight','lighter');
    $('#description').prev().children().css('font-weight','lighter');
    $('#source').siblings().css('font-weight','lighter');
    $('#timeSpend').siblings().css('font-weight','lighter');
    $('#timeToMaster').siblings().css('font-weight','lighter');
    $('#inProg').siblings().css('font-weight','lighter');
    $('#completionDate').siblings().css('font-weight','lighter');  
});
$('#timeSpend').focus(function() {
    $('#timeSpend').siblings().css('font-weight','bold');
    $('#startLearningDate').siblings().css('font-weight','lighter');
    $('#title').siblings().css('font-weight','bold');
    $('#description').prev().children().css('font-weight','lighter');
    $('#source').siblings().css('font-weight','lighter');
    $('#timeToMaster').siblings().css('font-weight','lighter');
    $('#inProg').siblings().css('font-weight','lighter');
    $('#completionDate').siblings().css('font-weight','lighter');  
});
$('#timeToMaster').focus(function() {
    $('#timeToMaster').siblings().css('font-weight','bold');
    $('#startLearningDate').siblings().css('font-weight','lighter');
    $('#title').siblings().css('font-weight','lighter');
    $('#description').prev().children().css('font-weight','lighter');
    $('#source').siblings().css('font-weight','lighter');
    $('#timeSpend').siblings().css('font-weight','lighter');
    $('#inProg').siblings().css('font-weight','lighter');
    $('#completionDate').siblings().css('font-weight','lighter');  
}); 
$('#inProg').focus(function() {
    $('#inProg').siblings().css('font-weight','bold');
    $('#startLearningDate').siblings().css('font-weight','lighter');
    $('#title').siblings().css('font-weight','lighter');
    $('#description').prev().children().css('font-weight','lighter');
    $('#source').siblings().css('font-weight','lighter');
    $('#timeSpend').siblings().css('font-weight','lighter');
    $('#timeToMaster').siblings().css('font-weight','lighter');
    $('#completionDate').siblings().css('font-weight','lighter');  
});
$('#completionDate').focus(function() {
    $('#completionDate').siblings().css('font-weight','bold');
    $('#startLearningDate').siblings().css('font-weight','lighter');
    $('#title').siblings().css('font-weight','lighter');
    $('#description').prev().children().css('font-weight','lighter');
    $('#source').siblings().css('font-weight','lighter');
    $('#timeSpend').siblings().css('font-weight','lighter');
    $('#timeToMaster').siblings().css('font-weight','lighter');
    $('#inProg').siblings().css('font-weight','lighter');
});  



const title = document.getElementById('title');
const description = document.getElementById('description');
const source = document.getElementById('source');
const startLD = document.getElementById('startLearningDate');
const timeS = document.getElementById('timeSpend');
const timeM = document.getElementById('timeToMaster');
const inProg = document.getElementsByName('inProg');
// const inProg = document.querySelector('input[name="inProg"]:checked').value;
const cDate = document.getElementById('completionDate');
const table =  document.getElementById('toivelista');
const addButton = document.getElementById('addButton');



// EVENT LISTENERS
addButton.addEventListener('click', addTopic);

function myFunction() {
    table.innerHTML="";
    fetch("./api/topic")
        .then(res => res.json())
        .then(aiheet => {
            for (i = 0; i < aiheet.length; i++) {

                                // TABLE HEAD
                                const thead1 = document.createElement('th');
                                const thead2 = document.createElement('th');
                                const head = document.createElement('thead');
                                const title = aiheet[i].title;
                                const Headtext1 = document.createTextNode(`${title}`);

                                let output = "";
                                output += `<button type="button" id="poistaNappi" onclick="removeTopic(event)"><i class="far fa-trash-alt fa-2x" data-deletoi='${title}'></i></button>`;
                                // output += `<i class="far fa-trash-alt" /><input type="submit" value="  " data-deletoi='${title}' id="poistaNappi" onclick="removeTopic(event)" />`;


                                thead1.appendChild(Headtext1);
                                thead2.innerHTML = output;
                                thead2.classList.add('bSarke');
                                head.appendChild(thead1);
                                head.appendChild(thead2);  

                                // DESCRIPTION
                                const kuvaus = aiheet[i].description;
                                const riviDescription = document.createElement('tr');
                                const div1 = document.createElement('td');
                                const div2 = document.createElement('td');
                                const Destext2 = document.createTextNode(`${kuvaus}`);
                                const Destext1 = document.createTextNode(`Description:`);
                                div1.appendChild(Destext1);
                                div1.classList.add('aSarke');
                                div2.appendChild(Destext2); 
                                div2.classList.add('bSarke');
                                riviDescription.appendChild(div1);
                                riviDescription.appendChild(div2);

                                // TIME TO MASTER
                                const masteri = aiheet[i].timeToMaster;
                                const riviMaster = document.createElement('tr');
                                const div3 = document.createElement('td');
                                const div4 = document.createElement('td');
                                const Mastertext1 = document.createTextNode(`Time to master:`);
                                const Mastertext2 = document.createTextNode(`${masteri}`);
                                div3.appendChild(Mastertext1);
                                div3.classList.add('aSarke');
                                div4.appendChild(Mastertext2); 
                                div4.classList.add('bSarke');
                                riviMaster.appendChild(div3); 
                                riviMaster.appendChild(div4); 

                                // SOURCE
                                const lahde = aiheet[i].source;
                                const riviSource = document.createElement('tr');
                                const div5 = document.createElement('td');
                                const div6 = document.createElement('td');
                                const Sourcetext1 = document.createTextNode(`Source:`);
                                const Sourcetext2 = document.createTextNode(`${lahde}`);
                                div5.appendChild(Sourcetext1);
                                div5.classList.add('aSarke');
                                div6.appendChild(Sourcetext2);
                                div6.classList.add('bSarke'); 
                                riviSource.appendChild(div5);
                                riviSource.appendChild(div6);

                                //START LEARNING DATE
                                const alku = aiheet[i].startLearningDate;
                                const riviStart = document.createElement('tr');
                                const div7 = document.createElement('td');
                                const div8 = document.createElement('td');
                                const StartText1 = document.createTextNode(`Start learning date:`);
                                const StartText2 = document.createTextNode(`${alku}`);
                                div7.appendChild(StartText1);
                                div7.classList.add('aSarke');
                                div8.appendChild(StartText2);
                                div8.classList.add('bSarke');
                                riviStart.appendChild(div7);
                                riviStart.appendChild(div8);

                                //COMPLETION DATE
                                const valmis = aiheet[i].completionDate;
                                const riviCompletion = document.createElement('tr');
                                const div9 = document.createElement('td');
                                const div10 = document.createElement('td');
                                const CompletionText1 = document.createTextNode(`Completion date:`);
                                const CompletionText2 = document.createTextNode(`${valmis}`);
                                div9.appendChild(CompletionText1);
                                div9.classList.add('aSarke');
                                div10.appendChild(CompletionText2);
                                div10.classList.add('bSarke');
                                riviCompletion.appendChild(div9);
                                riviCompletion.appendChild(div10);

                                // TIME SPEND
                                const spend = aiheet[i].timeSpend;
                                const riviSpend = document.createElement('tr');
                                const div11 = document.createElement('td');
                                const div12 = document.createElement('td');
                                const SpendText1 = document.createTextNode(`Time spend:`);
                                const SpendText2 = document.createTextNode(`${spend}`);
                                div11.appendChild(SpendText1);
                                div11.classList.add('aSarke');
                                div12.appendChild(SpendText2);
                                div12.classList.add('bSarke');
                                riviSpend.appendChild(div11);
                                riviSpend.appendChild(div12);

                                // IN PROGRESS
                                // const kuvaus = json[i].inProgress;        
                                // const riviProgress = document.createElement('tr');
                                // const ProgressText = document.createTextNode(`${inProgress}`);
                                // riviProgress.appendChild(ProgressText);   

                                // riviDescription.innerHTML = `${kuvaus}`;
                                // riviMaster.innerHTML = `${masteri}`;
                                // riviSpend.innerHTML = `${spend}`;
                                // riviSource.innerHTML = `${lahde}`;
                                // riviStart.innerHTML = `${alku}`;
                                // // riviProgress.innerHTML = `${inProgress}`;
                                // riviCompletion.innerHTML = `${valmis}`;
                
                                table.appendChild(head);
                                table.appendChild(riviDescription);
                                table.appendChild(riviMaster);
                                table.appendChild(riviSpend);
                                table.appendChild(riviSource);
                                table.appendChild(riviStart);
                                table.appendChild(riviCompletion);

                
            }
        })
}

myFunction();


function addTopic() {
    if (title.value == null || title.value == undefined || title.value == "") {
        console.log("Tyhjää ei voi syöttää")
    }

    let jatkuu;
    if (inProg.value === "true"){
       jatkuu = "true";
    } else {
        jatkuu = "false";
    }

    fetch("./api/topic", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({title: title.value, description: description.value, source: source.value, timeSpend: timeS.value, timeToMaster: timeM.value, startLearningDate: startLD.value, inProgress: jatkuu, completionDate: cDate.value })
    })
        .then(res => res.json());
        console.log(aiheet);
 
    myFunction();
}
///// <-----------------TARKISTA TOIMIVUUS! HUOM TÄSSÄ KOODISSA TSEKATAAN ONKO KOHDE JO OLEMASSA
// function addTopic() {
//     if (title.value == null || title.value == undefined || title.value == "") {
//         console.log("Tyhjää ei voi syöttää")
//     } else {
//         const aiheenNimi = title.value;
//     // let jatkuu;
//     // if (inProg.value === "true"){
//     //    jatkuu = "true";
//     // } else {
//     //     jatkuu = "false";
//     // }
//         fetch(`http://localhost:3000/api/aiheet/${aiheenNimi}`)
//         .then(function (res) {
//             return res.json();
//         })
//         .then((json) => {
//         if (kohde == json.title) {
//             console.log(`Kohde on jo olemassa`);
//             title.value = `${aiheenNimi} on jo listalla!!` ///<---Pleissaa tekstin input boksiin
//         } else {
//             // let title = title.value
//             fetch("./api/aiheet", {
//                 method: "POST",
//                 headers: { "Content-Type" : "application/json"},
//                 body: JSON.stringify({title: title.value, description: description.value, source: source.value, timeSpend: timeS.value, timeToMaster: timeM.value, startLearningDate: startLD.value, inProgress: jatkuu, completionDate: cDate.value })
//                 })
//             .then(res => res.json())
//             myFunction();
//             title.value = "";
//         }
//         })
//     }
// } 
// <--------------------------------------------------------

function removeTopic(event){

   
    const kohde = event.target.dataset.deletoi;
    console.log(kohde);

    fetch(`http://localhost:5000/api/topic/${kohde}`, {
        method: 'DELETE',
    })
        .then(function (res) {
            return res.json();
        })
        .then((json) => {
            console.dir(json);
            if (json.message == 'success') {
                console.log(`${kohde} poistettu toivelistalta`);
                myFunction();
            } else {
                console.log(`Fetch ei löydä kohdetta`);
            }
            return;
        })
   

};

