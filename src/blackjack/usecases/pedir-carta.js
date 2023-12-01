

/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = ( deck ) => {

    const largo = deck.length;

    if ( !deck || largo === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}