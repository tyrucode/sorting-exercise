// BASIC TASKS 1
//query
```
    allFilms(after: $after) {
      films {
        title
      }
    }
```
//response
```
{
    "data": {
      "allFilms": {
        "films": [
          {
            "title": "A New Hope"
          },
          {
            "title": "The Empire Strikes Back"
          },
          {
            "title": "Return of the Jedi"
          },
          {
            "title": "The Phantom Menace"
          },
          {
            "title": "Attack of the Clones"
          },
          {
            "title": "Revenge of the Sith"
          }
        ]
      }
    }
  }
```
// BASIC TASKS 2
//query
```
  person(id: "cGVvcGxlOjE=") {
    name
  }
```
//response
```
{
  "data": {
    "person": {
      "name": "Luke Skywalker"
    }
  }
}
```
// BASIC TASKS 3
//query
```
  allPlanets(first: 5) {
    planets {
      name
    }
  }
```
//response
```
{
  "data": {
    "allPlanets": {
      "planets": [
        {
          "name": "Tatooine"
        },
        {
          "name": "Alderaan"
        },
        {
          "name": "Yavin IV"
        },
        {
          "name": "Hoth"
        },
        {
          "name": "Dagobah"
        }
      ]
    }
  }
}
```
// BASIC TASKS 4
//query
```
  allStarships(first: 3) {
    starships {
      name
      model
    }
  }
```
//response
```
{
  "data": {
    "allStarships": {
      "starships": [
        {
          "name": "CR90 corvette",
          "model": "CR90 corvette"
        },
        {
          "name": "Star Destroyer",
          "model": "Imperial I-class Star Destroyer"
        },
        {
          "name": "Sentinel-class landing craft",
          "model": "Sentinel-class landing craft"
        }
      ]
    }
  }
}
```
// INTERMEDIATE TASKS 1
//query
```
allPeople(first: 5) {
    people {
      name
      starshipConnection {
        starships {
          name
        }
      }
    }
  }  
```
//response
```
{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "starshipConnection": {
            "starships": [
              {
                "name": "X-wing"
              },
              {
                "name": "Imperial shuttle"
              }
            ]
          }
        },
        {
          "name": "C-3PO",
          "starshipConnection": {
            "starships": []
          }
        },
        {
          "name": "R2-D2",
          "starshipConnection": {
            "starships": []
          }
        },
        {
          "name": "Darth Vader",
          "starshipConnection": {
            "starships": [
              {
                "name": "TIE Advanced x1"
              }
            ]
          }
        },
        {
          "name": "Leia Organa",
          "starshipConnection": {
            "starships": []
          }
        }
      ]
    }
  }
}
```
// INTERMEDIATE TASKS 2
//query
```
allSpecies(first: 5) {
    species {
      language
      name
    }
  }
}
```
//response
```
{
  "data": {
    "allSpecies": {
      "species": [
        {
          "language": "Galactic Basic",
          "name": "Human"
        },
        {
          "language": "n/a",
          "name": "Droid"
        },
        {
          "language": "Shyriiwook",
          "name": "Wookie"
        },
        {
          "language": "Galatic Basic",
          "name": "Rodian"
        },
        {
          "language": "Huttese",
          "name": "Hutt"
        }
      ]
    }
  }
}
```
// INTERMEDIATE TASKS 3
//query
```
  allPlanets(first: 5) {
    planets {
      climates
      name
    }
  }
```
//response
```
{
  "data": {
    "allPlanets": {
      "planets": [
        {
          "climates": [
            "arid"
          ],
          "name": "Tatooine"
        },
        {
          "climates": [
            "temperate"
          ],
          "name": "Alderaan"
        },
        {
          "climates": [
            "temperate",
            "tropical"
          ],
          "name": "Yavin IV"
        },
        {
          "climates": [
            "frozen"
          ],
          "name": "Hoth"
        },
        {
          "climates": [
            "murky"
          ],
          "name": "Dagobah"
        }
      ]
    }
  }
}
```
// INTERMEDIATE TASKS 4
//query
```
  allVehicles(first: 3) {
    vehicles {
      name
      costInCredits
    }
  }
```
//response
```
{
  "data": {
    "allVehicles": {
      "vehicles": [
        {
          "name": "Sand Crawler",
          "costInCredits": 150000
        },
        {
          "name": "T-16 skyhopper",
          "costInCredits": 14500
        },
        {
          "name": "X-34 landspeeder",
          "costInCredits": 10550
        }
      ]
    }
  }
}
```
// ADVANCED TASKS 1
//query
```
query AllVehicles($first: Int) { film(id: "ZmlsbXM6NA==") { characterConnection { characters { name } } } } }
```
//response
```
{
  "data": {
    "film": {
      "characterConnection": {
        "characters": [
          {
            "name": "C-3PO"
          },
          {
            "name": "R2-D2"
          },
          {
            "name": "Obi-Wan Kenobi"
          },
          {
            "name": "Anakin Skywalker"
          },
          {
            "name": "Jabba Desilijic Tiure"
          },
          {
            "name": "Yoda"
          },
          {
            "name": "Palpatine"
          },
          {
            "name": "Qui-Gon Jinn"
          },
          {
            "name": "Nute Gunray"
          },
          {
            "name": "Finis Valorum"
          },
          {
            "name": "Padmé Amidala"
          },
          {
            "name": "Jar Jar Binks"
          },
          {
            "name": "Roos Tarpals"
          },
          {
            "name": "Rugor Nass"
          },
          {
            "name": "Ric Olié"
          },
          {
            "name": "Watto"
          },
          {
            "name": "Sebulba"
          },
          {
            "name": "Quarsh Panaka"
          },
          {
            "name": "Shmi Skywalker"
          },
          {
            "name": "Darth Maul"
          },
          {
            "name": "Ayla Secura"
          },
          {
            "name": "Ratts Tyerel"
          },
          {
            "name": "Dud Bolt"
          },
          {
            "name": "Gasgano"
          },
          {
            "name": "Ben Quadinaros"
          },
          {
            "name": "Mace Windu"
          },
          {
            "name": "Ki-Adi-Mundi"
          },
          {
            "name": "Kit Fisto"
          },
          {
            "name": "Eeth Koth"
          },
          {
            "name": "Adi Gallia"
          },
          {
            "name": "Saesee Tiin"
          },
          {
            "name": "Yarael Poof"
          },
          {
            "name": "Plo Koon"
          },
          {
            "name": "Mas Amedda"
          }
        ]
      }
    }
  }
}
```
// ADVANCED TASKS 2
//query
```
  allPeople {
    people {
      name
      filmConnection {
        totalCount
      }
    }
  }
```
//response
```
{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "C-3PO",
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "name": "R2-D2",
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "name": "Darth Vader",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "Leia Organa",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "Owen Lars",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Beru Whitesun lars",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "R5-D4",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Biggs Darklighter",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Obi-Wan Kenobi",
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "name": "Anakin Skywalker",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Wilhuff Tarkin",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Chewbacca",
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "name": "Han Solo",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Greedo",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Jabba Desilijic Tiure",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Wedge Antilles",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Jek Tono Porkins",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Yoda",
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "name": "Palpatine",
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "name": "Boba Fett",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "IG-88",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Bossk",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Lando Calrissian",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Lobot",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ackbar",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Mon Mothma",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Arvel Crynyd",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Wicket Systri Warrick",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Nien Nunb",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Qui-Gon Jinn",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Nute Gunray",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Finis Valorum",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Padmé Amidala",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Jar Jar Binks",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Roos Tarpals",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Rugor Nass",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ric Olié",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Watto",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Sebulba",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Quarsh Panaka",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Shmi Skywalker",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Darth Maul",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Bib Fortuna",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ayla Secura",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Ratts Tyerel",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dud Bolt",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Gasgano",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Ben Quadinaros",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Mace Windu",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Ki-Adi-Mundi",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Kit Fisto",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Eeth Koth",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Adi Gallia",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Saesee Tiin",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Yarael Poof",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Plo Koon",
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "name": "Mas Amedda",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Gregar Typho",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Cordé",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Cliegg Lars",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Poggle the Lesser",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Luminara Unduli",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Barriss Offee",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dormé",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dooku",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Bail Prestor Organa",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Jango Fett",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Zam Wesell",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Dexter Jettster",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Lama Su",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Taun We",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Jocasta Nu",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "R4-P17",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Wat Tambor",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "San Hill",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Shaak Ti",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Grievous",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Tarfful",
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "name": "Raymus Antilles",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Sly Moore",
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "name": "Tion Medon",
          "filmConnection": {
            "totalCount": 1
          }
        }
      ]
    }
  }
}
```
// ADVANCED TASKS 3
//query
```
  allFilms {
    films {
      characterConnection {
        totalCount
      }
    }
  }
```
//response
```
{
  "data": {
    "allFilms": {
      "films": [
        {
          "characterConnection": {
            "totalCount": 18
          }
        },
        {
          "characterConnection": {
            "totalCount": 16
          }
        },
        {
          "characterConnection": {
            "totalCount": 20
          }
        },
        {
          "characterConnection": {
            "totalCount": 34
          }
        },
        {
          "characterConnection": {
            "totalCount": 40
          }
        },
        {
          "characterConnection": {
            "totalCount": 34
          }
        }
      ]
    }
  }
}
```
// COMPLEX TASKS 1
//query
```
  person(id: "cGVvcGxlOjE=") {
    name
    filmConnection {
      films {
        title
      }
    }
    starshipConnection {
      starships {
        name
      }
    }
    homeworld {
      name
    }
  }
```
//response
```
{
  "data": {
    "person": {
      "name": "Luke Skywalker",
      "filmConnection": {
        "films": [
          {
            "title": "A New Hope"
          },
          {
            "title": "The Empire Strikes Back"
          },
          {
            "title": "Return of the Jedi"
          },
          {
            "title": "Revenge of the Sith"
          }
        ]
      },
      "starshipConnection": {
        "starships": [
          {
            "name": "X-wing"
          },
          {
            "name": "Imperial shuttle"
          }
        ]
      },
      "homeworld": {
        "name": "Tatooine"
      }
    }
  }
}
```
// COMPLEX TASKS 2
//query
```
  allPeople(first: 5) {
    people {
      name
      homeworld {
        population
      }
    }
  }
```
//response
```
{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "homeworld": {
            "population": 200000
          }
        },
        {
          "name": "C-3PO",
          "homeworld": {
            "population": 200000
          }
        },
        {
          "name": "R2-D2",
          "homeworld": {
            "population": 4500000000
          }
        },
        {
          "name": "Darth Vader",
          "homeworld": {
            "population": 200000
          }
        },
        {
          "name": "Leia Organa",
          "homeworld": {
            "population": 2000000000
          }
        }
      ]
    }
  }
}
```
// COMPLEX TASKS 3
//query
```
  allVehicles(first: 3) {
    vehicles {
      name
      pilotConnection {
        pilots {
          name
          species {
            name
          }
        }
      }
    }
  } 
```
//response
```
{
  "data": {
    "allVehicles": {
      "vehicles": [
        {
          "name": "Sand Crawler",
          "pilotConnection": {
            "pilots": []
          }
        },
        {
          "name": "T-16 skyhopper",
          "pilotConnection": {
            "pilots": []
          }
        },
        {
          "name": "X-34 landspeeder",
          "pilotConnection": {
            "pilots": []
          }
        }
      ]
    }
  }
}
```
// COMPLEX TASKS 4
//query
```
allFilms(first: 3) {
    films {
      characterConnection {
        characters {
          name
        }
      }
      planetConnection {
        planets {
          name
        }
      }
      starshipConnection {
        starships {
          name
        }
      }
    }
```
//response
```
{
  "data": {
    "allFilms": {
      "films": [
        {
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Owen Lars"
              },
              {
                "name": "Beru Whitesun lars"
              },
              {
                "name": "R5-D4"
              },
              {
                "name": "Biggs Darklighter"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Wilhuff Tarkin"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Greedo"
              },
              {
                "name": "Jabba Desilijic Tiure"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Jek Tono Porkins"
              },
              {
                "name": "Raymus Antilles"
              }
            ]
          },
          "planetConnection": {
            "planets": [
              {
                "name": "Tatooine"
              },
              {
                "name": "Alderaan"
              },
              {
                "name": "Yavin IV"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "CR90 corvette"
              },
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Sentinel-class landing craft"
              },
              {
                "name": "Death Star"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "TIE Advanced x1"
              }
            ]
          }
        },
        {
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Yoda"
              },
              {
                "name": "Palpatine"
              },
              {
                "name": "Boba Fett"
              },
              {
                "name": "IG-88"
              },
              {
                "name": "Bossk"
              },
              {
                "name": "Lando Calrissian"
              },
              {
                "name": "Lobot"
              }
            ]
          },
          "planetConnection": {
            "planets": [
              {
                "name": "Hoth"
              },
              {
                "name": "Dagobah"
              },
              {
                "name": "Bespin"
              },
              {
                "name": "Ord Mantell"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "Executor"
              },
              {
                "name": "Rebel transport"
              },
              {
                "name": "Slave 1"
              },
              {
                "name": "Imperial shuttle"
              },
              {
                "name": "EF76 Nebulon-B escort frigate"
              }
            ]
          }
        },
        {
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Jabba Desilijic Tiure"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Yoda"
              },
              {
                "name": "Palpatine"
              },
              {
                "name": "Boba Fett"
              },
              {
                "name": "Lando Calrissian"
              },
              {
                "name": "Ackbar"
              },
              {
                "name": "Mon Mothma"
              },
              {
                "name": "Arvel Crynyd"
              },
              {
                "name": "Wicket Systri Warrick"
              },
              {
                "name": "Nien Nunb"
              },
              {
                "name": "Bib Fortuna"
              }
            ]
          },
          "planetConnection": {
            "planets": [
              {
                "name": "Tatooine"
              },
              {
                "name": "Dagobah"
              },
              {
                "name": "Endor"
              },
              {
                "name": "Naboo"
              },
              {
                "name": "Coruscant"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "CR90 corvette"
              },
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "Executor"
              },
              {
                "name": "Rebel transport"
              },
              {
                "name": "Imperial shuttle"
              },
              {
                "name": "EF76 Nebulon-B escort frigate"
              },
              {
                "name": "Calamari Cruiser"
              },
              {
                "name": "A-wing"
              },
              {
                "name": "B-wing"
              }
            ]
          }
        }
      ]
    }
  }
}
```
