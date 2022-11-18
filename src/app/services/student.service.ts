import { Injectable } from '@angular/core';
import { Student } from "../models/student";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor() {
    this.students = [
      {
        controlNumber: "18401080",
        age: 18,
        career: "ISC",
        curp:"AAMA991217HNTLRN05",
        email:"andealvaradoma@ittepic.edu.mx",
        name:"Antonio Alvarado Martínez",
        nip: 224,
        photo:"https://scontent.fgdl9-1.fna.fbcdn.net/v/t1.6435-9/130143609_3482485098508687_6813728547792551116_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE8bEQC6c0I59tlbtVwnebv60chFHeN_W7rRyEUd439bm9GfvWwjNf1fB7xKfCH93f5jNx-JoHER8dj8LC-_Ag5&_nc_ohc=lVdEU0RDnOMAX-QKXIq&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfCGYeX1IqhVYPACwATcKlrRSmqrAu3nVW-URbj9J4POWw&oe=638B32DD"
      },
      {
        controlNumber: "18401090",
        age: 18,
        career: "ISC",
        curp:"CAVD991116HNTLRN04",
        email:"daalcalderonvi@ittepic.edu.mx",
        name:"Daniel Calderón Virgen",
        nip: 226,
        photo:"https://scontent.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/289510643_5513118535385879_4485818529376282548_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF-WhZl9iesWJvZj2mRADLupKYF25gvajGkpgXbmC9qMZQyG-_8G4OkBrKjDn16FB48-Cv2TIRrrYL4ku0SlzJN&_nc_ohc=xvAomuS36_kAX_7RlTL&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfCewhTvlA8fWJmfpZQ--PnU5FtuX1mjV9QGnNUwj16bVw&oe=63687A4C"
      },
      {
        controlNumber: "18401166",
        age: 18,
        career: "ISC",
        curp:"OEOJ000814HNTCRN05",
        email:"joisoceguedaor@ittepic.edu.mx",
        name:"Jonathan Ocegueda Ortiz",
        nip: 225,
        photo:"https://scontent.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/268283011_7019495958091180_1841756730530961390_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH0RoWsLX13ZcrAIbhvgHLyMaqIucW9LNYxqoi5xb0s1p11NYOLqv4gig-O6Hi9UU2AsPlKSykvLCj_7ziFFlbd&_nc_ohc=WtcMEHViY14AX8qdecM&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfDNfp5EcWmeQcYj7EfdYxpDHcL2sa3H-te5YwYWyQpZdw&oe=6367F500"
      }
    ];
   }

   public getStudents(): Student[]{
    return this.students;
   }

   public getStudentByControlNumber(cn:string): Student{
    let item : Student;
    item = this.students.find(
      (student)=>{
        return student.controlNumber==cn;
      }
    );
    return item;
   }

   public removeStudent(pos:number){
    this.students.splice(pos,1);
   }

   public newStudent(student:Student):void{
    this.students.push(student);
   }
}
