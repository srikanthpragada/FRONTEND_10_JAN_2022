class Student{
    constructor(name,course,fee_paid=0){
        this.name=name
        this.course=course
        this.fee_paid=fee_paid
    }

    print(){
        console.log(this.name)        
    }
    payment(amount){
        this.fee_paid= this.fee_paid + amount  
    }

    getFee() {
        if (this.course == "python")
            return 5000;
        else
            return 10000; // DS 
    }
    getDue(){
        return this.getFee() - this.fee_paid
    }
}

var s;

function setDetails(){
    var name=document.getElementById("sname").value
    var course=document.getElementById("course").value
    var fee_paid=document.getElementById("feespaid").value    
    if(fee_paid){
        s = new Student(name,course,fee_paid)
    } else{
        s = new Student(name,course)
    }
}

function due() {
    var due = s.getDue()
    document.getElementById("dueamt").innerText=due
}