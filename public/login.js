let registerUsernameInput, registerPasswordInput, loginUsernameInput, registerLoginInput;
let registerChooseFaction;


function registerData() {
  let userInfo = {
    'username': registerUsernameInput.value(),
    'password': registerPasswordInput.value(),
    'faction': registerChooseFaction.value()
  }
  httpPost('/Register', 'json', userInfo, sucess, error) // send the register credentials to the server
}
