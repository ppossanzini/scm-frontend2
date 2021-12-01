import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide, Watch } from 'vue-property-decorator';
import { store, StoreState } from './store';

@Component({
  components: {
  }
})
export default class App extends Vue {

  // @Provide()
  // dati: { id: number, data: Date, temperature: number, precipitations: number }[] | null = [];


  @Provide()
  filter = {
    minvalue: 0,
    maxvalue: 100
  };

  mounted() {
    // if (this.dati) {
    //   this.dati.push(
    //     { id: 1, data: new Date(), temperature: 10, precipitations: 0 },
    //     { id: 2, data: new Date(), temperature: 15, precipitations: 1 },
    //     { id: 3, data: new Date(), temperature: 25, precipitations: 0 });
    // }

    store.actions.addForecast(this.$store,
      { id: 1, data: new Date(), temperature: 10, precipitations: 0 },
      { id: 2, data: new Date(), temperature: 15, precipitations: 1 },
      { id: 3, data: new Date(), temperature: 25, precipitations: 0 });


  }

  get dati(): any {
    return (this.$store.state as StoreState);
  }

  @Watch('dati.dati',{deep: true, immediate: true})
  @Watch('dati.statistiche',{deep: true})
  onDataChanged(n: any, o: any) {
    

  }

}