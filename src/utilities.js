// utilities.js pour mettre les fonctions utiles

// Pour formatter la date
export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Fonction de vérification du nom (superieur a 2 caracteres)
export function isValidName(name) {
    return name.length >= 2;
}

// Fonction pour retourner une chaine de caractere en majuscule
export function majuscule(string) {
    const stringupper = string.toUpperCase();
    return stringupper;
}
  
// Fonction de vérification de l'adresse e-mail avec @ avant et apres
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  