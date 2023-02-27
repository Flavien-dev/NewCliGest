// Importation d'Axios sous le nom api
import { api } from 'boot/axios'

// State : données du magasin
const state = {
  // Tableau des clients
  clients: [
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Alexis',
        last: 'Michel'
      },
      location: {
        street: {
          number: 2518,
          name: 'Rue Cyrus-Hugues'
        },
        city: 'Ardon',
        state: 'Aargau',
        country: 'Switzerland',
        postcode: 2454,
        coordinates: {
          latitude: '-33.1605',
          longitude: '-47.1539'
        },
        timezone: {
          offset: '-12:00',
          description: 'Eniwetok, Kwajalein'
        }
      },
      email: 'alexis.michel@example.com',
      login: {
        uuid: '0b047001-87b6-431d-8451-a9b52ca77000',
        username: 'greenbutterfly714',
        password: 'concrete',
        salt: 'HCQymf2t',
        md5: '85d838ae47ca4afcd0a519d105e63ec6',
        sha1: 'bae5027a94727977b33fc73bad6fcf59274f81c6',
        sha256: 'c389bafa1a7960db97660a26d8873d4e88209282a0b9dd917324ff5a46ef5aed'
      },
      dob: {
        date: '1978-03-29T09:16:40.444Z',
        age: 42
      },
      registered: {
        date: '2015-04-07T17:58:18.603Z',
        age: 5
      },
      phone: '078 644 00 03',
      cell: '078 600 40 33',
      id: {
        name: 'AVS',
        value: '756.5941.9550.13'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/33.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/33.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/33.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Jimmy',
        last: 'Bertrand'
      },
      location: {
        street: {
          number: 9911,
          name: 'Rue de L\'Abbé-Rousselot'
        },
        city: 'Konolfingen',
        state: 'Schwyz',
        country: 'Switzerland',
        postcode: 8729,
        coordinates: {
          latitude: '-27.5714',
          longitude: '83.4640'
        },
        timezone: {
          offset: '0:00',
          description: 'Western Europe Time, London, Lisbon, Casablanca'
        }
      },
      email: 'jimmy.bertrand@example.com',
      login: {
        uuid: 'a1070548-f72e-4881-a5e0-717f97af75ad',
        username: 'whitelion617',
        password: 'henry',
        salt: 'DuNYj3EN',
        md5: 'b31ab5db0095b6fd0b9aaba4013c641d',
        sha1: 'dbb5adf585074d034a4b3eea16c72e10d5b60bd3',
        sha256: 'c9e56b01fa070fccee81f63036583345c2493cf88c1f6db3fcd3d62c6ba3ab9d'
      },
      dob: {
        date: '1955-09-01T06:29:56.568Z',
        age: 65
      },
      registered: {
        date: '2006-06-16T01:15:42.256Z',
        age: 14
      },
      phone: '075 867 57 09',
      cell: '079 659 35 20',
      id: {
        name: 'AVS',
        value: '756.9634.0413.03'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/22.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/22.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/22.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Reinhard',
        last: 'Perez'
      },
      location: {
        street: {
          number: 3362,
          name: 'Montée du Chemin-Neuf'
        },
        city: 'Wilchingen',
        state: 'Fribourg',
        country: 'Switzerland',
        postcode: 1433,
        coordinates: {
          latitude: '-63.0065',
          longitude: '133.6753'
        },
        timezone: {
          offset: '0:00',
          description: 'Western Europe Time, London, Lisbon, Casablanca'
        }
      },
      email: 'reinhard.perez@example.com',
      login: {
        uuid: '7a6e8933-3d0c-4ab8-b0ff-b9f6840fa560',
        username: 'lazytiger855',
        password: 'crimson',
        salt: '5obSthD2',
        md5: 'cb2c7c9ccac4f1dd1d489ead8594c15e',
        sha1: 'b91ebe87da3e40618f83c23284809fafef82defe',
        sha256: 'a42bf6a2c675ef02cbef21748660e1c3e67f79d949753c67632adeb253c65285'
      },
      dob: {
        date: '1987-06-25T00:26:45.646Z',
        age: 33
      },
      registered: {
        date: '2019-08-31T05:02:44.920Z',
        age: 1
      },
      phone: '076 226 23 71',
      cell: '075 969 18 13',
      id: {
        name: 'AVS',
        value: '756.3877.2750.38'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/69.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/69.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/69.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Ernesto',
        last: 'Simon'
      },
      location: {
        street: {
          number: 2464,
          name: 'Rue du Bât-D\'Argent'
        },
        city: 'Grandcour',
        state: 'Vaud',
        country: 'Switzerland',
        postcode: 3744,
        coordinates: {
          latitude: '-5.9997',
          longitude: '-110.2370'
        },
        timezone: {
          offset: '+5:30',
          description: 'Bombay, Calcutta, Madras, New Delhi'
        }
      },
      email: 'ernesto.simon@example.com',
      login: {
        uuid: '505a1dc7-52f4-4ee3-8b51-7d47edcfb034',
        username: 'browncat857',
        password: 'racecar',
        salt: 'bWcFh3wd',
        md5: '05c3929ddc7a66831be2bf0abd2b932f',
        sha1: '8efc128d90fae879f8dceb361ca1dd61178320a4',
        sha256: '6f0da1df60456049958d8ef002fb4ee31831e66ec461514237c2836779260833'
      },
      dob: {
        date: '1996-01-03T04:11:34.787Z',
        age: 24
      },
      registered: {
        date: '2014-08-27T13:08:33.762Z',
        age: 6
      },
      phone: '076 870 83 93',
      cell: '075 797 07 22',
      id: {
        name: 'AVS',
        value: '756.6902.1916.86'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/10.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/10.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/10.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Matthias',
        last: 'Rodriguez'
      },
      location: {
        street: {
          number: 1300,
          name: 'Avenue du Fort-Caire'
        },
        city: 'Gurtnellen',
        state: 'Basel-Landschaft',
        country: 'Switzerland',
        postcode: 4465,
        coordinates: {
          latitude: '-36.2614',
          longitude: '54.0454'
        },
        timezone: {
          offset: '-10:00',
          description: 'Hawaii'
        }
      },
      email: 'matthias.rodriguez@example.com',
      login: {
        uuid: '34c22faf-1d26-45eb-84c8-05d164fb3c5e',
        username: 'bigwolf660',
        password: 'jacques',
        salt: 'wEVjYNIx',
        md5: 'f5203a18365332f744a1ce1c9fd65f22',
        sha1: 'ed6725c6b2dadac42bd9c773bba53cb1ddae4723',
        sha256: '40cef69fc7c6ed82171aee5e43283592867c438496c5dbde7c4c35841a517646'
      },
      dob: {
        date: '1986-04-17T19:11:32.984Z',
        age: 34
      },
      registered: {
        date: '2003-11-30T01:01:53.130Z',
        age: 17
      },
      phone: '078 547 25 31',
      cell: '079 617 10 74',
      id: {
        name: 'AVS',
        value: '756.1348.5860.35'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/51.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/51.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/51.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Léonard',
        last: 'Martin'
      },
      location: {
        street: {
          number: 5445,
          name: 'Rue Bony'
        },
        city: 'Wiler (Lötschen)',
        state: 'Neuchâtel',
        country: 'Switzerland',
        postcode: 5412,
        coordinates: {
          latitude: '63.0319',
          longitude: '-171.6015'
        },
        timezone: {
          offset: '+3:30',
          description: 'Tehran'
        }
      },
      email: 'leonard.martin@example.com',
      login: {
        uuid: 'c081e51b-32df-4b14-9dc1-d6e50bfb0c33',
        username: 'goldenwolf992',
        password: 'calgary',
        salt: 'V5YppC6B',
        md5: '51d548b403414f700b98558bc69b4817',
        sha1: '7587c8c9794d78d574cc31982192c3cfd2ab65c1',
        sha256: 'b01ae7e3e6fe2a6c28bc0c513fb06bfbb2e3ee552a41dfc4f69426bede55e7b5'
      },
      dob: {
        date: '1954-01-31T00:43:12.620Z',
        age: 66
      },
      registered: {
        date: '2008-01-26T18:08:23.471Z',
        age: 12
      },
      phone: '076 105 29 60',
      cell: '076 687 77 27',
      id: {
        name: 'AVS',
        value: '756.3063.3348.46'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/69.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/69.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/69.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Fatmir',
        last: 'Da Silva'
      },
      location: {
        street: {
          number: 658,
          name: 'Rue du Cardinal-Gerlier'
        },
        city: 'Rüdtligen-Alchenflüh',
        state: 'Zürich',
        country: 'Switzerland',
        postcode: 4926,
        coordinates: {
          latitude: '35.8920',
          longitude: '163.9439'
        },
        timezone: {
          offset: '+9:30',
          description: 'Adelaide, Darwin'
        }
      },
      email: 'fatmir.dasilva@example.com',
      login: {
        uuid: '031e2ad9-c1ae-4121-92c5-7c2ca8671f9c',
        username: 'redgoose367',
        password: 'oscar1',
        salt: 'G4AVJTrW',
        md5: '5c8eca84a841e19414f0eb35dc60f848',
        sha1: '09529f70872ef6d8022ab73461a9b81eb6bfe036',
        sha256: '88c8d76fa6a506ac1138718f5b8258ddf66f7e0ce3e7862ac8c2ef2de3672316'
      },
      dob: {
        date: '1963-09-22T10:04:53.130Z',
        age: 57
      },
      registered: {
        date: '2003-04-09T20:31:31.062Z',
        age: 17
      },
      phone: '076 868 95 03',
      cell: '078 060 00 31',
      id: {
        name: 'AVS',
        value: '756.7010.8403.55'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/84.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/84.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/84.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'female',
      name: {
        title: 'Mademoiselle',
        first: 'Agatha',
        last: 'Duval'
      },
      location: {
        street: {
          number: 476,
          name: 'Rue Jean-Baldassini'
        },
        city: 'Seewen',
        state: 'Glarus',
        country: 'Switzerland',
        postcode: 2179,
        coordinates: {
          latitude: '-72.5896',
          longitude: '4.9100'
        },
        timezone: {
          offset: '+5:30',
          description: 'Bombay, Calcutta, Madras, New Delhi'
        }
      },
      email: 'agatha.duval@example.com',
      login: {
        uuid: '6c87b486-2fb2-4c10-8715-7c9da049169a',
        username: 'lazyswan521',
        password: 'bigguns',
        salt: 'qkEyBU5L',
        md5: '9d70a4c304e48c9bfd036db84ccd3bd2',
        sha1: '08f324deb6b785a35f5e29a8250c9b14b52284a5',
        sha256: '06b336a2a07108882c64a8bb81f6a90d184a1554a0ea8ad5abfa3292f90e248f'
      },
      dob: {
        date: '1979-11-14T06:48:17.944Z',
        age: 41
      },
      registered: {
        date: '2018-07-26T19:47:57.778Z',
        age: 2
      },
      phone: '078 803 34 91',
      cell: '076 821 98 26',
      id: {
        name: 'AVS',
        value: '756.1703.5769.93'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/58.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/58.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/58.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'female',
      name: {
        title: 'Madame',
        first: 'Esther',
        last: 'Leclerc'
      },
      location: {
        street: {
          number: 630,
          name: 'Rue Louis-Blanqui'
        },
        city: 'Braunau',
        state: 'Obwalden',
        country: 'Switzerland',
        postcode: 2557,
        coordinates: {
          latitude: '12.0022',
          longitude: '16.0045'
        },
        timezone: {
          offset: '-1:00',
          description: 'Azores, Cape Verde Islands'
        }
      },
      email: 'esther.leclerc@example.com',
      login: {
        uuid: '6f7eced4-47e6-435e-b25b-742083fa059d',
        username: 'angrypanda693',
        password: 'gggggggg',
        salt: '0EldZFML',
        md5: '6ebe22fa726bcad328cc3b28512e201f',
        sha1: 'f4be663b6f7ba25aed7519cd837314db30fbf9da',
        sha256: '42f19c51b47bab99b1830e3a6ac9b081b889448d746f3403388f0285178848bb'
      },
      dob: {
        date: '1969-10-25T23:08:24.830Z',
        age: 51
      },
      registered: {
        date: '2011-03-25T15:23:57.931Z',
        age: 9
      },
      phone: '078 470 25 29',
      cell: '076 380 15 87',
      id: {
        name: 'AVS',
        value: '756.5279.3813.13'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/44.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/44.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/44.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'female',
      name: {
        title: 'Mademoiselle',
        first: 'Nelly',
        last: 'Lefevre'
      },
      location: {
        street: {
          number: 6501,
          name: 'Rue André-Gide'
        },
        city: 'Erschwil',
        state: 'Aargau',
        country: 'Switzerland',
        postcode: 5853,
        coordinates: {
          latitude: '43.8982',
          longitude: '105.6504'
        },
        timezone: {
          offset: '+7:00',
          description: 'Bangkok, Hanoi, Jakarta'
        }
      },
      email: 'nelly.lefevre@example.com',
      login: {
        uuid: 'b4c51a55-67c7-4ad7-82e1-cbfb8e6c9b4c',
        username: 'lazymouse898',
        password: 'pencil',
        salt: 'hBe4PeF2',
        md5: '71c14eaf624fb072c543f2016af08334',
        sha1: '6cfb5fda395f16dcf0f3959ec1e4bff063740cfe',
        sha256: '0a97c455bbce92da0a6a889df5f5cf8a9210f3888f99bfb35b25a2c7c8a02503'
      },
      dob: {
        date: '1952-05-02T14:39:47.090Z',
        age: 68
      },
      registered: {
        date: '2008-07-23T14:22:24.801Z',
        age: 12
      },
      phone: '077 151 36 11',
      cell: '078 475 70 79',
      id: {
        name: 'AVS',
        value: '756.4744.7490.96'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/48.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/48.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/48.jpg'
      },
      nat: 'CH'
    }
  ]
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  // Remplace le tableau des clients par le tableau newClients en paramètres
  SET_CLIENTS (state, newClients) {
    state.clients = newClients
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  // Récupère le tableau des clients en appelant l'API et met à jour le magasin
  getClientsApi ({ commit }) {
    // GET
    api.get('https://randomuser.me/api/?results=100&nat=CH')
      // En cas de succès met à jour le tableau des clients du magasin
      .then(function (response) {
        commit('SET_CLIENTS', response.data.results)
      })
      // En cas d'erreur, stoppe le script et affiche le message dans la console
      .catch(function (error) {
        throw error
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  // Retourne le tableau des clients du magasin
  getClients: function (state) {
    return [...state.clients].sort((a, b) => a.name.first.localeCompare(b.name.first, 'fr'))

    /* Tableau trié par nom et prénom
    return state.clients.sort(
      (a, b) => (a.name.last + a.name.first)
        .localeCompare((b.name.last + b.name.first), 'fr')
    )
    */
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
