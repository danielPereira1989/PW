let isNew = true;

window.onload = function() {
    const formRegisto = document.getElementById("contact-form");
    formRegisto.addEventListener("submit", async (event) => {
        event.preventDefault()
        const txtNome = document.getElementById("nome").value;
        const txtUsername = document.getElementById("username").value;
        const txtEmail = document.getElementById("email").value;
        const txtPassword = document.getElementById("password").value;
        const txtConfirmPass = document.getElementById("txtConfirmarPassword").value;
        const txtDatanascimeto = document.getElementById("data_nascimento").value;
        const txtNif = document.getElementById("nif").value;
        const txtMorada = document.getElementById("morada").value;
        const txtTelefone = document.getElementById("telefone").value;
    
        if(txtPassword !== txtConfirmPass){ 
            alert("passwords não coincidem! l") 
            txtConfirmPass="" ; 
            txtPassword="" ; }
            else{
                let response = "";
                if(isNew){
                    response = await fetch('http://localhost:3000/spaceManager',{
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    method: 'POST',
                    body: `nome_gestor_espaco=${txtNome}&email=${txtEmail}&morada=${txtMorada}&username=${txtUsername}&password=${txtPassword}&data_nascimento=${txtDatanascimeto}&nif=${txtNif}&telefone=${txtTelefone}`
                    });
                }   

            }
    });
}