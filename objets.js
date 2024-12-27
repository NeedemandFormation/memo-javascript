// OBJETS
// Création et manipulation
let personne = {
  nom: "Jean",
  age: 30,
  direBonjour: function () {
    return `Bonjour, je suis ${this.nom}`;
  },
};

// Accès aux propriétés
personne.nom; // "Jean"
personne["age"]; // 30
