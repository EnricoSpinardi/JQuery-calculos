$("#calcular2").click(function () {
    var nome = ($("#txtnome").val());
    var idade = parseFloat($("#txtidade").val());
    var salariobruto = parseFloat($("#txtsalariobruto").val());
    var dependentes = parseFloat($("#txtdependentes").val());

    if (!nome || isNaN(idade) || isNaN(salariobruto) || isNaN(dependentes)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Bônus por idade
    var bonusidade = idade > 50 ? 300 : 200
    
    var inss = salariobruto * 0.08;
    var valetransporte = salariobruto * 0.05;

    // Salário líquido base
    var salarioliquidoBase = salariobruto - inss - valetransporte;

    // Aumento por dependentes (multiplicação)
    var valorDependentes = 1 + ((50 * dependentes) / salarioliquido);

    var salarioliquido = salarioliquidoBase + valorDependentes + bonusidade;

   
    $("#txtnomeres")
    .text("Nome: " + nome)

    $("#txtdenpendentes")
    .text("Número de Dependentes: " + dependentes);

    $("#txtsalariobrutores")
    .text("Salário Bruto: R$ " + salariobruto.toFixed(2));

    $("#txtinssres")
    .text("INSS: R$ " + inss.toFixed(2));

    $("#txtvaletransporteres")
    .text("Vale Transporte: R$ " + valetransporte.toFixed(2));

    $("#txtsalarioliquidores")
    .text("Salário Líquido: R$ " + salarioliquido.toFixed(2));
});
