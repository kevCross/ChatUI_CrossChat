//Getting Elements

    const chatArea = document.getElementById("chatArea");
    const messageArea = document.getElementById("messageArea");
    const messageField = document.getElementById("messageField");
    const submit = document.getElementById("send");

    let names = ["Kevin Cross", "John Doe", "Billy Blanks", "Ryu Hyabusa"];
    let imgSrcs = "imgs/profile.png";

    //Outputting Text to screen

    submit.addEventListener("click", myAlert);
    submit.addEventListener("click", ClearText);

    function myAlert () {

    
//Creating and Appending elements
      const UO_List = document.createElement("ul");
      let divText = document.createElement("div");
      const li = document.createElement("li");
      let text = document.createTextNode('');
      let message =text.textContent;
      message  = messageField.value;

      //console.log(text);
      //console.log(message);

      chatArea.append(divText);
      divText.appendChild(li);
      let messages = li.appendChild(text);
      messages.textContent = message.value;
      li.textContent = message;
      divText.className = "colorifyGreen";
      console.log("MyAlert working")

    }

    function ClearText(){

      messageField.value = " ";
      console.log("ClearText working")

    }
