export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;
// added as part of should show warning
showWarning: boolean = false;
constructor (name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
    }
// shouldShowWarning () {
//     //NOT SURE IF I DID THIS RIGHT//
//     let warningVar:string = this.type;
//     if (warningVar === 'space debris' || warningVar === 'Space Debris') {
//         return true;
//     }else{
//         return false;
//     }
//     }
shouldShowWarning (): boolean {
return this.type === "Space Debris"
    }

}
