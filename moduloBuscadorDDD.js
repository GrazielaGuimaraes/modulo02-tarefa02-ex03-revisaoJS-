const estados  = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'
,'Paraná', 'Santa Catarina', 'Rio Grande do Sul']

const buscador = (ddd) => {

   switch(ddd) {

    case 11: return `DDD: ${ddd} - ${estados[0]}` ; break

    case 21: return estados[1] ; break

    case 27: return estados[2] ; break

    case 31: return estados[3] ; break

    case 41: return estados[4] ; break

    case 48: return estados[5] ; break

    case 51: return estados[6] ; break

    default: return 'Estado não listado'

   


}



}

module.exports = {buscador}