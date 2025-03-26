let drop=document.getElementById('drop') //grabs the first dropdown
let drop2=document.getElementById('drop2') //grabs the second dropdown
let plus1=document.getElementById('plus1')
let plus2=document.getElementById('plus2')
let currentDrop='' //used to tell the program which dropdown is selected

let dropFlag={ //dlags used to prevent the text being displayed multiple times
    drop1:false, //mutliple flags used to allow multiple different dropdowns to be displayed at the same time
    drop2:false
}

drop.addEventListener('click',function(){
    currentDrop='drop'
    plus1.setAttribute('src','oj.png')
})
drop.addEventListener('click',dropdown)

drop2.addEventListener('click',function(){
    currentDrop='drop2'
    plus2.setAttribute('src','oj.png')
})
drop2.addEventListener('click',dropdown)



function dropdown(){    //this function is used to create dropdown effect
    if(currentDrop=='drop'){
        drop.setAttribute('style','height:68vh;') //adds inline css to increase its size
        setTimeout(addText,400) //adds a delay before inserting the text
    }else if(currentDrop=='drop2'){
        drop2.setAttribute('style','height:30vh')
        setTimeout(addText,400)
    }
}

function addText(){ //used to insert the text
    let p=document.createElement('ul') //creates the paragraph
    let sportDiv=document.createElement('div')

    let stageDiv=document.createElement('div') //creates the container for the text related to stage
    let stageP=document.createElement('ul') //creates the list for stage info

    let buisDiv=document.createElement('div')
    let buisP=document.createElement('ul')

    if(currentDrop=='drop'){ //checks which dropdown has been recently clicked
        if(!dropFlag.drop1){ //checks if the text is displayed, runs if it isn't
        p.innerHTML+=`
        <h2>Sporting event rate</h2>
        <li>Inital Price: $3000</li>
        <li>$150 per hour every additional hour after 8 hours</li>
        <li>$500 per non-event day</li>
        <li>Equipment provided: mats, floor covers, tables, and chairs</li>
        `
        stageP.innerHTML=`
        <h2>Stage event rate</h2>
        <li>Inital Price: $5000</li>
        <li>$300 per hour every additional hour after 8 hours</li>
        <li>1000 per non-event day</li>
        <li>services provided: stage set-up, sound system set-up, and lighting set-up</li>
        `

        buisP.innerHTML=`
        <h2>Business event rate</h2>
        <li>Inital Price: $600</li>
        <li>$200 per hour every additional hour after 5 hours</li>
        <li>$100 per non-event day</li>
        `

        sportDiv.appendChild(p)
        drop.appendChild(sportDiv)

        stageDiv.appendChild(stageP)
        drop.appendChild(stageDiv)

        buisDiv.appendChild(buisP)
        drop.appendChild(buisDiv)

        dropFlag.drop1=true //checks off that the text for the first/top dropdown is being displayed
        }else{
            drop.removeAttribute('style') //removes the inline css
            for(let i=drop.children.length-1;i>0;i--){
                drop.removeChild(drop.children[i]) //removes the text
            }
            dropFlag.drop1=false //tells the program that the text is not displayed
            plus1.setAttribute('src','png_9bhbq.png')
        }
    }else if(currentDrop=='drop2'){
        if(!dropFlag.drop2){
            let amenityP=document.createElement('ul')
            let amenityDiv=document.createElement('div')
            
            amenityP.innerHTML=`
            <li>PA System</li>
            <li>Restrooms</li>
            <li>Parking</li>
            <li>HVAC</li>
            <li>Accessibility</li>
            `

        amenityDiv.appendChild(amenityP)

        drop2.appendChild(amenityDiv)
        dropFlag.drop2=true
        }else{
            drop2.removeAttribute('style')
            drop2.removeChild(drop2.children[1])
            dropFlag.drop2=false
            plus2.setAttribute('src','png_9bhbq.png')
        }
    }
}