let addBtn=document.getElementById('addBtn')
let addTxt=document.getElementById('addTxt')
let addTtl=document.getElementById('addTtl')
let addBtn1=document.getElementById('addBtn1')


showdata()
addBtn.addEventListener('click',function(e){
    let notes=localStorage.getItem("notes")

    console.log(notes)
    if(!notes)
    {
        notesObj=[]
        // console.log(notesObj)
    }
    else
    {
        notesObj=JSON.parse(notes)

        // console.log(notesObj)

    }
    // let myObj={
    //     title:addTtl.value,
    //     text:addTxt.value
    // }
    // console.log(myObj)
 notesObj.push(addTxt.value)
localStorage.setItem("notes",JSON.stringify(notesObj))
addTxt.value=""
// addTtl.value=""
showdata()
});


addBtn1.addEventListener('click',function(e){
    let notes=localStorage.getItem("notes")
    console.log(notes)
    if(!notes)
    {
        notesObj=[]
        console.log(notesObj)
    }
    else
    {
        notesObj=JSON.parse(notes)
        console.log(notesObj)

    }
 notesObj.push(addTtl.value)
localStorage.setItem("notes",JSON.stringify(notesObj))
addTtl.value=""
});
function showdata()
{
    let notes=localStorage.getItem("notes")
    console.log(notes)
    if(!notes)
    {
        notesObj=[]
        console.log(notesObj)
    }
    else
    {
        notesObj=JSON.parse(notes)
        console.log(notesObj)

    }
    let html=""
    notesObj.forEach(function(e,i){
        console.log(e)

        html +=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Notes${i+1}</h5>
        
        <p class="card-text">${e}</p>
            <button class="btn btn-primary" id="${i}" onclick="deleteNote(this.id)">Delete Note</button>
        </div>
    </div>`
    });
  let notesElm=document.getElementById('notes')
  if(notesObj.length!=0)
  {
      notesElm.innerHTML=html
  }
  else
  {
      notesElm.innerHTML=`Noting to show! Use the "Add Note" for add notes`
  }
}


function deleteNote(i)
{
    let notes=localStorage.getItem("notes")
    console.log(notes)
    if(!notes)
    {
        notesObj=[]
        console.log(notesObj)
    }
    else
    {
        notesObj=JSON.parse(notes)
        console.log(notesObj)

    }
    notesObj.splice(i,1)
    localStorage.setItem("notes",JSON.stringify(notesObj))

    showdata()
}
let search=document.getElementById('searchTxt')
search.addEventListener("input",function(){
    console.log('input event fired')
    let inpVl=search.value
    let card=document.getElementsByClassName('noteCard');
    Array.from(card).forEach(function(e){
        let cardTxt=e.getElementsByTagName("p")[0].innerText
        if(cardTxt.includes(inpVl))
        {
            e.style.display="block"
        }
        else
        {
            e.style.display="none"

        }
    })
})
