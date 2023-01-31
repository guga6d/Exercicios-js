function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log( 'Aprovado com, ' +  nota )
    }
};
soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('E verdade ... ' + valor)
    }
};

seForVerdadeEuFalo();
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({})