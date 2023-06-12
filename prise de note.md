### Introduction a React

Une biblioteque open source qui permet la construction d'interfaces graphique avec HTML, CSS et JAvascrip,C++,Objective-C et Python.
developpé par Facebook en 2015

**JSX** JavaScript Syntax Extension est une extention de react, elle permet de structurer le rendu similaire au HTML
**compossants** est une fonction comme une classe (elle est un ensemble de propriéte)
les imports et les exports
**props** il signifie les proprieter d'un objet tout
le State

Javascrip permet de mnipuler le DOM; c'est la representation 'objet' des elements HTML qui constitue une page web . autrement dit , c'est une interface qui permet d'interagir avec la stucture des pages web.
React utilise un DOM virtuel pour afficher ses composants (virtual DOM, shadow DOM), car manipuler le DON directement peut etre tres couteux.
Le JSX n'est pas directement execute par les navigateurs Wet)

Les imports et les exports en JS :

- Les exports/import nommes
- -l'export
- ecma script ( assos qui a crée et maintien Js )
  le state
  L'etat d'un composant designe une variable speciale qui contient des informations sur le contenue actuel du composant . Par exemple , un composant peut etre en état d'erreur ou de chargement.

prettier eslint-prettier

npm add -D eslint-config-prettier eslint-plugin-prettier
npm i -D prettier
npm instal react-script -save
chmod perition 7777 toutes les permissions

toujours reat dom
composant = fonction qui retourne du jsx
props sont des propriétés utilisées pour passer des données de composant en composant dans une application
les children sont les éléments ou les composants imbriqués à l'intérieur d'un composant parent.
Ne pas abuser de any
types les props
state permet composant sauvegarder des données
react grace a index tsx elemnts liste root
balise alert = composant alert
parametre avec une valeur = composant qui sert a afficher un message
span configurer par heading
gestion event handle
une condition ternaire = if
profiler
un hook et une fonction
le hook UseEffect permet de gerer les effets de bord en React (sideEffects)
Comme vous le savez votre application react est une fonction qui affiche du contenue a un endrois tres précis du DOM (element html DONT ID EST ROOT )
fonction pur retournera toujour le meme resultat
effect de bord sideeffect

la syntaxe du hook use effect est la suivante:

```ts
function unComponent(){
  useEffect()
  useEffect(
   () => }
   console.log('passage sur le hook useEffect');
   return() => {}
   }
   ,[])
   return <>Hello World!</>
```

Le premier parametre est une fonction.
Le second est un tableau de dependance, si ce dernier est vide, la fonction passee en premier parametre du hook useEffect est executer a chaque rendu du composant a l'ecran.

si un element(Une dependense) est present dans ce tableau, on passera dans le hook useEffect a chaque mise a jour de cet element.
les hook peuvent ne peuvent etre appeles qu'au niveau le plus haut d'un composant le corp d'un composant 
-un hook ne peut pas etre appele conditionnellement
LEs hook ne peuvent etre appeles qu'a l'interieur de composant fonction et pas dans un compossant classe 
les hook ne peuvent pas estre appeles au sein d'event handler 
Une Promise est dans un de ces états :

L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.
pending (en attente) : état initial, la promesse n'est ni tenue, ni rompue ;
fulfilled (tenue) : l'opération a réussi ;
rejected (rompue) : l'opération a échoué
then un fonction quand la promesse est resolut un callback 


