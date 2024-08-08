$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome completo'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(form, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Por favor, preencha os ${camposIncorretos} restantes para prosseguir com a compra!`)
            }
        }
    })
})