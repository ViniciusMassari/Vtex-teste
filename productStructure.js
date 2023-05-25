const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]


function validProductStructure(products) {
  const validStructure = {};

  products.forEach((product) => {
   const [key, value] = product.split('-');

   if (!validStructure[key]) {
    validStructure[key] = {};
   }

   if (!validStructure[key][value]) {
    validStructure[key][value] = 1;
   } else{
    validStructure[key][value] =  validStructure[key][value] + 1;
   }
  
  })

  return validStructure
}





module.exports = () => {
	// Seu código vai aqui!
 return validProductStructure(products)
}
