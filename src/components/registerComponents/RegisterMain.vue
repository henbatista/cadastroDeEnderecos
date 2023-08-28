<template>
  <v-container>
    <v-row justify="space-around">
      <v-col v-for="rounded in [true]" :key="rounded">
        <v-sheet id="sheet-main" :rounded="rounded" class="mx-auto">
          <div class="loading" v-if="loading">
            <img
              src="../../assets/loading-gif-transparent-10.gif"
              alt="loading"
            />
          </div>
          <div v-else>
            <v-form v-model="form" @submit.prevent="onSubmit">
              <v-row class="itemSelect">
                <template>
                  <div>
                    <!-- Title card -->
                    <h1 class="textTitle">Cadastro de Endereço</h1>
                    <v-spacer></v-spacer>

                    <v-row class="addressField">
                      <v-col>
                        <v-text-field
                          v-model="editedItem.zipCode"
                          label="Digite aqui o CEP que iremos cadastrar"
                          :readonly="loading"
                          @input="fetchData"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <div class="buttonContainer">
                      <v-btn id="buttonStyle" @click="addNew"
                        >Novo Cadastro</v-btn
                      >
                    </div>

                    <!-- Dialog Form to New/Edit Register -->
                    <v-dialog v-model="dialog" max-width="700px">
                      <v-card>
                        <v-card-title>
                          <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <!-- Address Field -->
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.locationTitle"
                                  label="Título do Endereço"
                                  :rules="[required]"
                                  :readonly="loading"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="4">
                                <v-text-field
                                  v-model="editedItem.publicPlace"
                                  label="Logradouro"
                                  :rules="[required]"
                                  readonly
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-text-field
                                  v-model="editedItem.complement"
                                  label="Complemento"
                                  :rules="[required]"
                                  :readonly="loading"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-text-field
                                  v-model="editedItem.neighborhood"
                                  label="Bairro"
                                  :rules="[required]"
                                  readonly
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="4">
                                <v-text-field
                                  v-model="editedItem.location"
                                  label="Localidade"
                                  :rules="[required]"
                                  readonly
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="4">
                                <v-text-field
                                  v-model="editedItem.fu"
                                  label="UF"
                                  :rules="[required]"
                                  readonly
                                ></v-text-field>
                              </v-col>
                            </v-row>

                            <v-row>
                              <v-col cols="12">
                                <v-text-field
                                  label="Data de Criação"
                                  v-model="editedItem.createdDate"
                                  readonly
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  label="Data de criação"
                                  v-model="editedItem.updateDate"
                                  readonly
                                ></v-text-field>
                              </v-col>
                              <!-- Outros campos do formulário aqui -->
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <!-- Cancel BTN  -->
                          <v-btn color="blue darken-1" text @click="close"
                            >Cancel</v-btn
                          >
                          <!-- Save BTN -->
                          <v-btn
                            color="blue darken-1"
                            type="submit"
                            :disabled="!form"
                            :loading="loading"
                            text
                            @click="save"
                          >
                            Save
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <v-container>
                      <v-data-table
                        :headers="headers"
                        :items="items"
                        :search="search"
                        :loading="loading"
                        class="elevation-1"
                        :item-class="itemColor"
                      >
                        <template v-slot:[`item.actions`]="{ item }">
                          <!-- Edit  -->
                          <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                          </v-icon>
                          <!-- Delete -->
                          <v-alert
                            border="top"
                            color="secondary"
                            dark
                            v-if="showAlert"
                            :type="alertType"
                          >
                            {{ alertMessage }}
                          </v-alert>
                          <v-icon small @click="deleteItem(item)">
                            mdi-delete
                          </v-icon>
                        </template>
                      </v-data-table>
                    </v-container>
                  </div>
                </template>
              </v-row>
            </v-form>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      sequence: "",
      zipCode: "",
      locationTitle: "",
      publicPlace: "",
      complement: "",
      neighborhood: "",
      location: "",
      fu: "",
      createdDate: "",
      updateDate: "",

      form: false,
      components: {},

      headers: [
        { text: "", value: "sequence", sortable: false },
        { text: "Título do endereço:", value: "locationTitle" },
        { text: "Logradoro", value: "publicPlace" },
        { text: "Complemento", value: "complement" },
        { text: "Bairro", value: "neighborhood" },
        { text: "Localidade", value: "location" },
        { text: "UF", value: "fu" },
        { text: "Data de Criação", value: "createdDate" },
        { text: "Data de Atualização", value: "updateDate" },
        { text: "Actions", value: "actions", sortable: false },
      ],

      editedIndex: -1,

      editedItem: {
        sequence: "",
        zipCode: "",
        locationTitle: "",
        publicPlace: "",
        complement: "",
        neighborhood: "",
        location: "",
        fu: "",
        createdDate: "",
        updateDate: "",
      },

      defaultItem: {
        sequence: "",
        zipCode: "",
        locationTitle: "",
        publicPlace: "",
        complement: "",
        neighborhood: "",
        location: "",
        fu: "",
        createdDate: "",
        updateDate: "",
      },

      search: "",
      loading: false,
      dialog: false,
    };
  },

  mounted() {
    this.getDate();
    this.updateNewDate();
  },

  computed: {
    items() {
      return this.$store.state.items;
    },
    loadingSubmit() {
      return this.$store.state.loading;
    },

    formTitle() {
      return this.editedIndex === -1 ? "Novo Cadastro" : "Editar Cadastro";
    },
    formItems() {
      // Add the selected item to the form list
      if (this.select) {
        return [...this.colorItems, this.select];
      } else {
        return this.colorItems;
      }
    },
  },

  created() {
    this.searchCep();
  },

  methods: {
    async fetchData() {
      if (/^\d{8}$/.test(this.editedItem.zipCode)) {
        this.loading = true;
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${this.editedItem.zipCode}/json/`
          );
          Object.assign(this.editedItem, response.data);
        } catch (error) {
          console.error("Erro ao fazer a requisição:", error);
        } finally {
          this.loading = false;
        }
      } else {
        console.error("CEP inválido");
      }
    },
    getDate() {
      const dateToday = new Date();
      // Formate a data como desejar
      const options = { year: "numeric", month: "long", day: "numeric" };
      this.editedItem.createdDate = dateToday.toLocaleDateString(
        "pt-BR",
        options
      );
    },

    updateNewDate() {
      const updateDateToday = new Date();
      // Formate a data como desejar
      const options = { year: "numeric", month: "long", day: "numeric" };
      this.editedItem.updateDate = updateDateToday.toLocaleDateString(
        "pt-BR",
        options
      );
    },

    ordenarTabela() {
      this.items.sort((a, b) => {
        return b.dataInsercao - a.dataInsercao;
      });
    },

    itemColor(colorItems) {
      switch (colorItems.fu) {
        case "AC":
          return "clearBlue";
        case "AL":
          return "clematisMagenta";
        case "AM":
          return "wildCaribbeanPink";
        case "AP":
          return "chineseGoldfish";
        case "BA":
          return "WinterSea";
        case "CE":
          return "clearBlue";
        case "DF":
          return "clematisMagenta";
        case "ES":
          return "wildCaribbeanPink";
        case "GO":
          return "chineseGoldfish";
        case "MA":
          return "WinterSea";
        case "MG":
          return "clearBlue";
        case "MS":
          return "clematisMagenta";
        case "MT":
          return "wildCaribbeanPink";
        case "PA":
          return "chineseGoldfish";
        case "PB":
          return "WinterSea";
        case "PE":
          return "clearBlue";
        case "PI":
          return "clematisMagenta";
        case "PR":
          return "wildCaribbeanPink";
        case "RJ":
          return "chineseGoldfish";
        case "RN":
          return "WinterSea";
        case "RO":
          return "clematisMagenta";
        case "RR":
          return "wildCaribbeanPink";
        case "RS":
          return "chineseGoldfish";
        case "SC":
          return "WinterSea";
        case "SE":
          return "WinterSea";
        case "SP":
          return "WinterSea";
        case "TO":
          return "WinterSea";
        default:
          return "black";
      }
    },

    onSubmit() {
      this.$store.dispatch("onSubmit");
    },

    required(v) {
      return !!v || "Campo Obrigatório";
    },

    addNew() {
      this.editedItem = Object.assign({}, this.editedItem);
      this.dialog = true;
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    ...mapMutations(["addProduct"]),

    save() {
      this.addProduct(this.editedItem);
      this.editedItem.sequence++;
      this.dialog = false;
      this.editedItem.createdDate = new Date();
    },

    deleteItem(item) {
      const index = this.items.indexOf(item);
      if (
        confirm(
          `Você tem certeza que quer deletar o itém "${item.locationTitle}" do cadastro?`
        )
      ) {
        this.loading = true;
        setTimeout(() => {
          this.items.splice(index, 1);
          this.loading = false;
        }, 1000);
      }
    },

    close() {
      this.dialog = false;
    },

    initialize() {
      this.items = [];
      this.items.forEach((item) => {
        this.adicionarItem(item.date);
      });
    },
  },
};
</script>

<style>
#sheet-main {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100%;
  margin: 1rem;
}

.addressField {
  display: grid;
  grid-template-columns: 50%;
  grid-template-rows: 4rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.loading {
  font-size: 5rem;
  display: grid;
  padding-top: 5rem;
  grid-template-columns: auto;
  grid-template-rows: 30rem;
  justify-content: center;
}

.list-content {
  display: grid;
  grid-auto-flow: column;
  margin-left: 10rem;
  grid-gap: 10rem;
  justify-content: start;
}

.itemSelect {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10rem, 200rem;
  grid-gap: 0.2rem;
}
.buttonContainer {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content: center;
}
#buttonStyle {
  margin-bottom: 1.5rem;
  color: #314156;
  background-color: #b8fc3c;
}

.textTitle {
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  margin-top: 2rem;
}

.v-data-table > .v-data-table__wrapper > table {
  border-spacing: 0.7rem !important;
}

td.text-start:first-child {
  margin-bottom: 10px;
}

#gridid .x-grid3-hd-row {
  display: none;
}

.text-start:first-child {
  font-weight: bold;
  border-radius: 10px;
  width: 3rem;
  height: 1rem;
}

.text-start:nth-child(2) {
  font-weight: bold;
  margin-left: 26rem;
}

.clearBlue .text-start:nth-child(2) {
  color: #217efd;
}

.clearBlue .text-start:first-child {
  color: #217efd;
  background: #bae0f5;
}

.clematisMagenta .text-start:nth-child(2) {
  color: #db5aee;
}

.clematisMagenta .text-start:first-child {
  color: #db5aee;
  background: #edb8fa;
}

.wildCaribbeanPink .text-start:nth-child(2) {
  color: #c999af;
}

.wildCaribbeanPink .text-start:first-child {
  color: #c999af;
  background: #ffe5f0;
}

.chineseGoldfish .text-start:nth-child(2) {
  color: #f24822;
}

.chineseGoldfish .text-start:first-child {
  color: #f24822;
  background: #ff9688;
}

.WinterSea .text-start:nth-child(2) {
  color: #77dd77;
}

.WinterSea .text-start:first-child {
  color: #77dd77;
  background: #cfffca;
}

.title {
  background: #314156;
  color: #fff;
}

.card-text {
  color: #314156;
  font-size: 1.5rem;
  margin-top: 1rem;
  justify-items: center;
}

#show-message {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  padding-left: 1rem;
  padding-top: 2rem;
  color: #314156;
}
</style>
