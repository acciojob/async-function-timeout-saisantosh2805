//your JS code here. If required.
document.getElementById("btn").add eventlistener("click",async function(){
	const Textinput =document.getElementById(text).value;
	const Textinput =document.getElementById(delay).value;
	const Textinput =document.getElementById(output);
	
		 const delay = parseInt(delayInput, 10);

  // Reset the output div
  outputDiv.textContent = "";

  // Async function to wait for the specified delay
  const waitForDelay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  // Await the delay and then display the text
  if (textInput && delay) {
    await waitForDelay(delay);
    outputDiv.textContent = textInput;
  } else {
    outputDiv.textContent = "Please enter valid text and delay.";
  }
});
	
	
}