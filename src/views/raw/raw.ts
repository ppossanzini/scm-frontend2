import { StoreGetters, StoreState } from '@/store';
import Vue from 'vue'
import Component from 'vue-class-component';
import { Inject, Prop } from 'vue-property-decorator';

@Component({})
export default class Raw extends Vue {

  // @Prop()
  // @Inject()
  // dati!:any[];

  @Inject()
  filter! : {
    minvalue: number,
    maxvalue: number
  };

  get dati(): data.forecast[] {
    return (this.$store.getters as StoreGetters)
    .dataInterval(this.filter.minvalue, this.filter.maxvalue);

  }
}