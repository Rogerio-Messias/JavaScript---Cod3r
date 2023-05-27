// o bloco de código é delimitado pelas "{ }" 
{
    console.log('Passo #01');
    console.log("Passo #02");
    console.log('Passo #03')
}

// E pode ter outros blocos dentro dele
{
    console.log('Passo #04');
    console.log("Passo #05");
    console.log('Passo #06')
    {
        {
            console.log('Passo #07');
            console.log("Passo #08");
            console.log('Passo #09')
        }
    }
}

// blocos de código também podem ter sentenças vazias
{
    ;
    ;
    ;
}