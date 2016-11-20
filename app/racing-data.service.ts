import { CARPARTS } from './mocks';
import {Injectable} from '@angular/core'
import {CarPart} from './car-parts'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {

    constructor(private http: Http){}
    getCarParts(){
        //return CARPARTS;
        return this.http.get('app/car-parts.json')
                .map(response => <CarPart[]>response.json().data);
    }
}
