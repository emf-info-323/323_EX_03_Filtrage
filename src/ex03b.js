// Extraire les données du CSV une seule fois...
const jsonData = convertirCSVEnObjet(DATA);

// Événement 'load' = page complètement chargée, scripts chargés, ...
// ... le navigateur a affiché la page et attend sur l'utilisateur.
window.addEventListener("load", (event) => {

    // Remplir les listes du formulaire
    remplirListesDuFormulaire(jsonData);

    // Refresh screen content
    refreshData();
});

function refreshData() {

    // Filtrage des données à afficher
    const jsonFilteredData = filtrage(jsonData);

    // Afficher le résultat final de notre lecture et transformation
    const container = document.getElementById("output");
    container.innerHTML = JSON.stringify(jsonFilteredData, null, 3);
}

function convertirCSVEnObjet(contenuCSV) {

    // Petite fonction utile pour extraire l'année des données CSV
    const yearOf = (date) => date.startsWith('-')
        ? parseInt(date.split("-")[1]) * -1
        : parseInt(date.split("-")[0]);

    // Constituer une liste de tous les empereurs
    const dynasties = DATA
        // Séparer les lignes CSV entre-elles
        .split("\n")
        // ignorer la première et dernière ligne du tableau (=entête et dernière ligne pourrie)
        .slice(1, -1)
        // Exploser les colonnes, ce qui produira un tableau de tableaux avec toutes les colonnes
        .map(ligne => ligne.split(';'))
        // Transformer chaque tableau en un objet (attention à la parenthèse nécessaire !)
        .map(colonnes => ({
            number: parseInt(colonnes[0]),
            name: colonnes[1],
            deathCause: colonnes[10],
            dynasty: colonnes[12],
            reignDuration: Math.abs(yearOf(colonnes[9]) - yearOf(colonnes[8])),
        }))
        // Trier les empereurs par number
        .sort((empereur1, empereur2) => empereur1.number - empereur2.number)
        // En partant d'un objet vide, progressivement rajouter les dynasties et y mettre un a un les empereurs
        .reduce((accumulateur, empereur) => {
            accumulateur[empereur.dynasty] ? accumulateur[empereur.dynasty].push(empereur) : accumulateur[empereur.dynasty] = [empereur];
            // Supprimer la clé dynasty de chaque empereur
            delete empereur.dynasty;

            return accumulateur;
        }, {});

    return dynasties;
}

function filtrage(jsonData) {

    // Les éléments HTML impliqués
    const dynastyFilter = document.getElementById("dynastyFilter");
    const deathCauseFilter = document.getElementById("deathCauseFilter");

    // -----------------------------------------------------------------------------
    //
    //               )        (                 ) (           (         (
    //            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
    //      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
    //      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
    //     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
    //     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
    //     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
    //      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
    //       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
    //
    // ----------------------------------------------------------------------------
    const jsonFilteredData = jsonData;

    return jsonFilteredData;
}

function remplirListesDuFormulaire(jsonData) {

    // Les éléments HTML impliqués
    const dynastyFilter = document.getElementById("dynastyFilter");
    const deathCauseFilter = document.getElementById("deathCauseFilter");

    // -----------------------------------------------------------------------------
    //
    //               )        (                 ) (           (         (
    //            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
    //      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
    //      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
    //     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
    //     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
    //     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
    //      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
    //       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
    //
    // ----------------------------------------------------------------------------

}
