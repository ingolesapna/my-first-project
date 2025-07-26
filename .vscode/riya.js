  const message = document.getElementById("message");
    const resetButton = document.getElementById("reset");

     const moodData = {
      happy: {
        text: "You look happy today!",
        color: "yellow"
      },
      sad: {
        text: "Feeling sad? It's okay to cry!",
        color: "lightblue"
      },
      angry: {
        text: "Take a deep breath, it's going to be fine!",
        color: "tomato"
      },
      sleepy: {
        text: "Feeling sleepy? Take rest!",
        color: "darkblue",
        textColor: "white"
      }
    };


 
 
 document.querySelectorAll(".emoji-btn").forEach(button => {
      button.addEventListener("click", () => {
        const mood = button.dataset.mood;
        const data = moodData[mood];
        message.textContent = data.text;
        document.body.style.backgroundColor = data.color;
        message.style.color = data.textColor || "black";
      });
    });

    resetButton.addEventListener("click", () => {
      document.body.style.backgroundColor = "white";
      message.textContent = "";
    });
