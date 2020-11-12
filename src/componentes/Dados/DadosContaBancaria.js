const agencia='0001';
const beneficiado = 'Associação Beata Elena Guerra';
const cnpj = '39.307.224/0001-86'

module.exports = [
    {
        titulo:'Cora SCD',
        data:
            [
                {
                    subtitulo:'Agência: ',
                    conteudo:agencia
                },
                {
                    subtitulo:'Conta: ',
                    conteudo:'1102390-2'
                },
                {
                    subtitulo:'Instituição: ',
                    conteudo:'403 - Cora SCD'
                },
                {
                    subtitulo:'Beneficiado: ',
                    conteudo:beneficiado
                },
                {
                    subtitulo:'CNPJ: ',
                    conteudo: cnpj
                }
            ]
    },
    {
        titulo:'PagBank',
        data:
            [
                {
                    subtitulo:'Agência: ',
                    conteudo:agencia
                },
                {
                    subtitulo:'Conta: ',
                    conteudo:'15356456-2'
                },
                {
                    subtitulo:'Instituição: ',
                    conteudo:'290 - PagSeguro Internet S/A '
                },
                {
                    subtitulo:'Beneficiado: ',
                    conteudo:beneficiado
                },
                {
                    subtitulo:'CNPJ: ',
                    conteudo: cnpj
                }
            ]
    }
]