const usermsg = document.getElementById("display");
const chatbox = document.getElementById("chat");
function createChatLi(message,classname){
    let result;
    let li = document.createElement("li");
    li.classList.add("chat",classname);
    if (classname === "outgoing"){
        result = "<p>"+message+"</p>";
    }else{
        result = "<span class='fa fa-simplybuilt'></span><p>"+message+"</p>";
    }
    li.innerHTML = result;
    return li;
}

function genReponse(input){
    let result;
    if (input.includes("price")){
        result = "The prices of the cars insured range are priced at R3 000.00 a month."
    }else if(input.includes("duration")){
        result = "We insure cars over a peroid of 3 years or 36 months."
    }else if(input.includes("which") && input.includes("cars")){
        result = "We insure Mercedes G-Wagons only at this time."        
    }else{
        result = "I'm sorry, I didn't understand that question. Could you be more clear?"
    }
    return result;
}

function createMessage(){
    let waiting;
    chatbox.appendChild(createChatLi(usermsg.value,"outgoing"));
    chatbox.scrollTop = chatbox.scrollHeight;
    input = usermsg.value.toLowerCase();
    usermsg.value = "";
    waiting = document.createElement("li");
    waiting.classList.add("chat","incoming");
    waiting.innerHTML = "<span class = 'fa fa-simplybuilt'></span><span class='fa fa-spinner fa-spin' id='spin' style='color:#000;'></span>";  
    waiting.id = "loading";
    chatbox.appendChild(waiting,"incoming");
    chatbox.scrollTop = chatbox.scrollHeight;
    setTimeout(function(){
        chatbox.removeChild(document.getElementById("loading"),"incoming")
      chatbox.appendChild(createChatLi(genReponse(input),"incoming"));  
      chatbox.scrollTop = chatbox.scrollHeight;
    }, 2500 );
    
}
