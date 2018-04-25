# Compte-rendu

### Choix fait

#### Choix techniques

J'ai utilisé *create-react-app* pour générer le projet, bootstrap pour le rendre moins moche et redux-thunk pour les actions paramétrables

#### Choix de design

- J'ai copié le fonctionnement d'une calculatrice de bureau pour ne pas devoir gérer les priorités de calcul.
- Le modèle de données est constitué du résultat (*result*), de nouvel entrée utilisateur (*input*) et de l'opération (*operation*)
  - le resultat est stocké sous forme de nombre js pour faciliter le calcul, sauf s'il y a eu une erreur (dans ce cas il faut *error*).
  - l'input est stocké sous forme de string pour faciliter la construction de nombre pas totalement fini (eg 1. pour écrire 1.02)
  - l'opération est composée d'une fonction et d'une option d'affichage
  - une bonne partie des input est filtrée pour ne pas avoir de mauvais calculs (eg on ne peut pas écrire 1.1.1 ou 9*+/2)
- Le calcul aléatoire se déclenche lorsqu'on est mode dev (ie radio bouton sur developer) et qu'on laisse la touche espace enfoncée
  - La génération d'opérations aléatoires a été simple parce que les règles métiers sont forcées lors de l'input
- Le rôle de user/dev/admin est défini dans un store redux et est modifiable via un radio button dans le header pour faciliter les changements de point de vue
  
  
#### Alternatives

A posteriori, j'ai eu l'idée de laisser un input plus libre et de juste faire un *eval* sur l'expression.
L'avantage de cette approche est qu'il est plus simple de faire des calculs et d'afficher les entrée utilisateurs, cependant la partie génération aléatoire n'est pas une mince affaire. 
Au final, l'énoncé ne donne pas de consigne ni sur l'affichage ni sur comment se fait le calcul donc j'ai continué mon approche de calculatrice de bureau.
