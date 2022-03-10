export class Users {
    id: number;
    firstName: any;
    lastName:any;
    phno: any;
    location:any;
    
    constructor(id: number,firstName: any,lastName: any,phno:any,location: any){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phno=phno;
        this.location=location;
}
}