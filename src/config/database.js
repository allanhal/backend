const {USUARIO, SENHA,HOST, PORTA_BANCO, BANCO} = process.env

module.exports = {
  uri: 'postgresql://'+USUARIO+':'+SENHA+'@'+HOST+':'+PORTA_BANCO+'/'+BANCO
}