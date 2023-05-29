
class Student{
    static count=0; //static variable to call
   constructor(name,age,ph_no,marks){
      //complete this contructor. Variable name should be same as above params
      this.name=______;
      this.age=_____;
      this.ph_no=ph_no;
      this.marks=______;
    //Dont change anyting below this
       Student.increaseStudentCount();
   }

   eligible(){
       if(____________ >=40){
           console.log(`${this.name} age ${this.age} is eligible`);
       }
       else if(_____________<40){
           console.log(`${this.name} age ${this.age} is not eligible`);
       }
   }
    static increaseStudentCount(){
    //increase the count of students by 1 whenever this is called
       _____________
   }

   static printStudentCount(){
        console.log(__________)
   }
}


function createNewStudents(){
    const Riya=new Student('Riya',18,1234,34);
    const Hiya=new Student('Hiya',15,2345,35);
    const Diya=new Student('Diya',16,4567,60);
    Student.printStudentCount();
    Riya.eligible();
    Hiya.eligible();
    Diya.eligible();
}
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            const argumentsArr = inputArr[0].split(',');
            createNewStudents()
            process.exit();
        })
}
readInput();