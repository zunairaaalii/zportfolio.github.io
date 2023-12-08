function showAlert()
{
  alert("Downloaded Successfully")
};
  function showModal() {
    document.getElementById('myModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  function handleInputs() {
    var firstName = document.getElementById('input1').value;
    var lastName = document.getElementById('input2').value;
    var email = document.getElementById('input3').value;

    console.log('Hello ' + firstName + ' ' + lastName + '! Your email is ' + email);

    closeModal();
  };
function openForm() {
  console.log("open form");
  document.querySelector("#myForm").style.display = "block";
}

function closeForm() {
  document.querySelector("#myForm").style.display = "none";
}
