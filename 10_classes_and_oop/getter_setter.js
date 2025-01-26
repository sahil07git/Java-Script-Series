class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }

    get password(){
        return `${this._password}sahil`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const sahil = new User("s@sahil.ai", "acds")
console.log(sahil.password);
