<template>
  <q-page padding>
    <h3>Liste des clients</h3>

    <q-list
      v-if="clients.length"
      class="rounded-borders"
      bordered
      separator
    >
      <!-- Composant Client.vue avec propriété client -->
      <client
        v-for="client of clients"
        :key="client.id.value"
        :client="client"
      />
    </q-list>

    <p v-else>Pas de clients ...</p>
  </q-page>
</template>

<script>
// Importation du composant Client.vue
import Client from 'components/Client'

// Importation des outils de mappage Vuex
import { mapActions } from 'vuex'

// Application Vue
export default {
  // Nom du composant
  name: 'ListeClients',
  // Importation des composants externes
  components: { Client },
  // Proriétés calculées
  computed: {
    // Donne accès au getter clients() du magasin Clients
    clients () {
      return this.$store.getters['clients/getClients']
    }
  },
  methods: {
    // Donne accès à l'action getClientsApi() du magasin Clients
    ...mapActions('clients', ['getClientsApi'])
  },
  // Après que le composant soit construit
  mounted () {
    // Exécute l'action getClientsApi() du magasin Client
    // qui va récupérer les données de l'API et les ajoute au magasin client
    this.getClientsApi()
  }
}
</script>
