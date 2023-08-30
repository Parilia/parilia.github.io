const contentCp = document.getElementById("content-cp");
const copyBtn = document.getElementById("copy");


copyBtn.onclick = copyToClipboard;


function copyToClipboard() {
	navigator.clipboard
		.writeText(contentCp.innerText)
		.then(() => alert("Copied to clipboard"))
		.catch((e) => alert(e.message));
}



function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
