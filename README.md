<h1><code>Module 323</code> - Programmer de manière fonctionnelle</h1>

# 😅 Exercice 03

## 🕒 Durée

Le temps à disposition est de : **120'**

## 🎯 Objectifs

- Apprendre à filtrer des données.

## ✅ Consigne - Partie A

Vous allez implémenter des filtres sur les données afin que seules celles qui correspondent à la sélection de l'utilisateur ne soient affichées.

1er filtre : **🔍 dynastie**

- Si le filtre est positionné sur «All», ce filtre est ignoré et toutes les dynasties seront affichées.
- Seuls les éléments correspondant à la dynastie sélectionnée seront affichés.

2ème filtre : **🔍 cause de la mort**

- Si le filtre est positionné sur «All», ce filtre est ignoré et tous les empereurs correspondants à la dynastie sélectionnée seront affichés.
- Seuls les empereurs correspondant à la cause de la mort sélectionnée seront affichés.
- Si aucun empereur ne correspondant à la dynastie sélectionnée et à la cause de la mort sélectionnée, on affichera un tableau vide.
- Ce filtre est cumulatif au filtre des dynasties.

Votre programme doit **correctement mettre en œuvre les concepts de programmation fonctionnelle**.

[Inspirez-vous de cette aide pour y trouver les outils adéquats](Javascript-Cheat-Sheet/Javascript-Cheat-Sheet.md) et, encore une fois, créez votre propre "RP" à ce sujet afin de vous en approprier !

## ✅ Consigne - Partie B (pour les avancés)

Ceci est un complément optionnel de la partie A, une sorte de petit défi technique si vous l'avez réussie facilement.

Pour réaliser cette partie B **il est impératif d'avoir d'abord réalisé avec succès la partie A !**

**Remplissage dynamique des filtres**

Ces filtres pour la sélection de la dynastie et de la cause de la mort sont actuellement "hardcodés" dans le formulaire HTML. Ajoutez dynamiquement leur options en fonction des données CSV qui ont été chargées. Ainsi le contenu de ces filtres sera toujours juste, car extrait des données elles-mêmes.

**Filtre sur la durée du règne**

Implémentez un filtrage sur la durée du règne :

- Ajoutez l’attribut `reignDuration` à chaque empereur (= le nombre d’années de règne de l’empereur). Cet attribut doit être calculé en soustrayant l’année de fin de règne à celle de début de règne (sans tenir compte des mois).
- Seuls les empereurs ayant régné dans l'intervalle d’années sélectionné seront affichés (**min étant inclu** et **max étant exclu**).  
     ⇨ avec min=5 et max=7 : un empereur ayant régné 5 ou 6 ans sera affiché, un empereur ayant régné 4 ou 7 ans ne sera pas affiché.
- Si l'un ou l'autre de ces filtres min/max n’ont pas de valeur valide, tous les empereurs seront affichés (0 étant considérée comme une valeur non valide).
- Toutes les dynasties sont toujours affichées.
- Si aucun empereur ne correspond au filtre de durée du règne sélectionné, on affichera un tableau vide.
- Ce filtre est cumulatif aux autres filtres.

---

>[!TIP]
>Actuellement le fichier CSV est lu comme un seul objet dont :
>
>- les clés sont les dynasties.
>- leurs valeurs sont des tableaux des empereurs de cette dynastie.
>
>Comme les fonctions map(), filter(), ... nécessitent des tableaux pour fonctionner, il n'est actuellement pas possible de tout faire d'un seul coup avec une seule chaîne d'appel .map().filter().filter()... pour par exemple filtrer les données.
>
>Pour compacter davantage le code avec une seule chaîne d'appel, il faut modifier la structure des données chargées de manière à retourner un tableau d'objets, chaque objet contenant l'ensemble d'une dynastie.

---

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">
