var app = angular.module("ngFun", []);

app.controller("PokemonCtrl", function($scope){
  $scope.pokemon = [
    {
      nDex: 25,
      name: 'Pikachu',
      type: 'Electric'
    },
    {
      nDex: 10,
      name: 'Caterpie',
      type: 'Bug'
    },
    {
      nDex: 39,
      name: 'Jigglypuff',
      type: 'Fairy'
    },
    {
      nDex: 94,
       name: 'Gengar',
      type: 'Ghost'
    },
    {
      nDex: 143,
      name: 'Snorlax',
      type: 'Normal'
    }
  ];
  $scope.catchphrase = "gotta catch 'em all"
  
});

