class Eleitor{
    constructor(nome, idade, titulo){
        this.nome = nome
        this.idade = idade
        this.titulo = titulo
    }

    verificaVoto(){
        let idade = this.idade


    if(idade<16){
        console.log("Abaixo da idade minima para votar")
        return "Abaixo da idade minima para votar"
    }else if((idade>=16)&&(idade<=18)){
        console.log("Idade onde o voto é facultativo")
        return "Idade onde o voto é facultativo"
    }else if((idade>=18)&&(idade<=70)){
        console.log("Idade de voto obrigatorio")
        return "Idade de voto obrigatorio"
    }else if((idade> 70)){
        console.log("Idade de voto facultativo")
        return "Idade de voto facultativo"
    }
    }
    
}