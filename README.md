<h1><code>Module 323</code> - Programmer de manière fonctionnelle</h1>

# 😅 Exercice 03 - Comprendre filter()

## Objectifs

- Découvrir et bien comprendre cette incontournable méthode de programmation `filter()`.

## Données

Les trois fichiers de données ci-dessous sont déjà chargés par le fichier HTML. Ces fichiers fournissent beaucoup d'informations sur :

- [ex03-data-motos.js](/src/ex03-data-motos.js) ➜ des marques de motos et des modèles de moto
- [ex03-data-villes.js](/src/ex03-data-villes.js) ➜ des villes, leur canton et nombre d'habitants
- [ex03-data-evaluations.js](/src/ex03-data-evaluations.js) ➜ des résultats d'évaluation de branches matu pour les apprentis de l'EMF

Ces informations sont directement utilisables via ces 3 constantes (`dataMotos`, `dataVilles` et `dataEvaluations`).

## Rapports à produire

Les rapports à produire :

- [F1 - Les marques de moto dont le nom de la marque débute par un H](#f1---les-marques-de-moto-dont-le-nom-de-la-marque-débute-par-un-h)
- [F2 - Les villes dont le canton est 'FR' et dont les habitants sont dans l'intervalle \[10000;25000\[](#f2---les-villes-dont-le-canton-est-fr-et-dont-les-habitants-sont-dans-lintervalle-1000025000)
- [F3 - Les marques ayant sorti un modèle de moto en 2021](#f3---les-marques-ayant-sorti-un-modèle-de-moto-en-2021)
- [F4 - Les évaluations de 'Maths' de 'Mac HARONI' avec une note de 5.0 ou plus](#f4---les-évaluations-de-maths-de-mac-haroni-avec-une-note-de-50-ou-plus)
- [F5 - Les évaluations du mois d'avril avec une note inférieure à 3.0](#f5---les-évaluations-du-mois-davril-avec-une-note-inférieure-à-30)

## F1 - Les marques de moto dont le nom de la marque débute par un H

À partir des données disponibles (`dataMotos`), vous devez obtenir ceci en utilisant la fonction `filter()`:

```json
[
   {
      "marque": "Honda",
      "modeles": [
         {
            "nom": "CB750 Four",
            "annee": 1969,
            "prix": 12000,
            "puissance": 67,
            "couple": 60
         },
         {
            "nom": "Africa Twin CRF1100L",
            "annee": 2020,
            "prix": 15000,
            "puissance": 102,
            "couple": 105
         },
         {
            "nom": "CBR1000RR Fireblade",
            "annee": 2024,
            "prix": 23000,
            "puissance": 218,
            "couple": 113
         },
         {
            "nom": "Gold Wing",
            "annee": 2024,
            "prix": 33000,
            "puissance": 126,
            "couple": 170
         }
      ]
   },
   {
      "marque": "Harley-Davidson",
      "modeles": [
         {
            "nom": "Sportster 883",
            "annee": 2020,
            "prix": 11000,
            "puissance": 52,
            "couple": 73
         },
         {
            "nom": "Fat Boy 114",
            "annee": 2024,
            "prix": 25000,
            "puissance": 95,
            "couple": 155
         },
         {
            "nom": "Electra Glide",
            "annee": 2024,
            "prix": 31000,
            "puissance": 89,
            "couple": 164
         },
         {
            "nom": "Street Glide Special",
            "annee": 2024,
            "prix": 29500,
            "puissance": 95,
            "couple": 164
         }
      ]
   }
]
```

## F2 - Les villes dont le canton est 'FR' et dont les habitants sont dans l'intervalle [10000;25000[

À partir des données disponibles (`dataVilles`), vous devez obtenir ceci :

```json
[
   {
      "ville": "Bulle",
      "canton": "FR",
      "habitants": 24400
   },
   {
      "ville": "Villars-sur-Glâne",
      "canton": "FR",
      "habitants": 12500
   }
]
```

## F3 - Les marques ayant sorti un modèle de moto en 2021

À partir des données disponibles (`dataMotos`), vous devez obtenir ceci en utilisant la fonction `filter()`:

```json
[
   {
      "marque": "Ducati",
      "modeles": [
         {
            "nom": "Panigale V4",
            "annee": 2024,
            "prix": 26000,
            "puissance": 215,
            "couple": 124
         },
         {
            "nom": "Monster 1200",
            "annee": 2021,
            "prix": 15500,
            "puissance": 147,
            "couple": 124
         },
         {
            "nom": "Scrambler Icon",
            "annee": 2024,
            "prix": 10000,
            "puissance": 73,
            "couple": 65
         },
         {
            "nom": "916",
            "annee": 1994,
            "prix": 25000,
            "puissance": 114,
            "couple": 91
         }
      ]
   }
]
```

## F4 - Les évaluations de 'Maths' de 'Mac HARONI' avec une note de 5.0 ou plus

À partir des données  disponibles (`dataEvaluations`), vous devez obtenir ceci :

```json
[
   {
      "date": "18.03.2025",
      "nom": "HARONI",
      "prenom": "Mac",
      "branche": "Maths",
      "note": 5.1
   },
   {
      "date": "21.06.2025",
      "nom": "HARONI",
      "prenom": "Mac",
      "branche": "Maths",
      "note": 5.3
   },
   {
      "date": "03.10.2024",
      "nom": "HARONI",
      "prenom": "Mac",
      "branche": "Maths",
      "note": 6
   }
]
```

## F5 - Les évaluations du mois d'avril avec une note inférieure à 3.0

À partir des données disponibles (`dataEvaluations`), vous devez obtenir ceci :

```json
[
   {
      "date": "08.04.2025",
      "nom": "TERNET",
      "prenom": "Alain",
      "branche": "Chimie",
      "note": 2.7
   },
   {
      "date": "01.04.2025",
      "nom": "NISSENS",
      "prenom": "Remy",
      "branche": "Histoire",
      "note": 2.7
   },
   {
      "date": "02.04.2025",
      "nom": "D'ŒUF",
      "prenom": "John",
      "branche": "Maths",
      "note": 2.8
   },
   {
      "date": "03.04.2025",
      "nom": "HARONI",
      "prenom": "Mac",
      "branche": "Histoire",
      "note": 2.9
   }
]
```

---

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">
