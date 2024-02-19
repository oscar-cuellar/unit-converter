/**
 * 
 * @param {Object} conversionObject //Objeto de la conversión
 * @param {String} sourceUnit
 * @param {String} targetUnit 
 * @returns 
 */
export function getConvertionFunction(conversionObject, sourceUnit, targetUnit) {
  if ( !conversionObject[sourceUnit]?.[targetUnit] ) {
    throw new Error('Las unidades de medida no existen');
  }
  return conversionObject[sourceUnit][targetUnit];
}
