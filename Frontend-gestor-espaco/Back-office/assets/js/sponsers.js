let isNew = true;

window.onload = function() {
    const formPatrocinadores = document.getElementById("formPatrocinadores");
    formPatrocinadores.addEventListener("submit", async (event) => {
        event.preventDefault()
        const txtNome = document.getElementById("nome_patrocinador").value;
        //const txtUsername = document.getElementById("username").value;
        //const txtEmail = document.getElementById("email").value;
        const txtPreco = document.getElementById("preco_patrocinio").value;
        const txtTipoPatrocinio = document.getElementById("tipo_patrocinio").value;
        //const txtDatanascimeto = document.getElementById("data_nascimento").value;
        const txtNif = document.getElementById("NIF").value;
        const txtMorada = document.getElementById("Morada").value;
        const txtContacto = document.getElementById("Contacto").value;
        const txtPessoaContacto = document.getElementById("pessoa_contacto").value;
        const txtNotas = document.getElementById("txtNotas").value;
        const txtValidade = document.getElementById("validade_patrocinio").value;
     
            

                let response = "";
                if(isNew){
                    response = await fetch('http://localhost:3000/sponsers/',{
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    method: 'POST',
                    body: `nome_patrocinador=${txtNome}&preco_patrocinio=${txtPreco}&Morada=${txtMorada}&tipo_patrocinio=${txtTipoPatrocinio}&Contacto=${txtContacto}&pessoa_contacto=${txtPessoaContacto}&NIF=${txtNif}&txtNotas=${txtNotas}&validade_patrocinio=${txtValidade}`
                    });
                }   

            });
        };
    
