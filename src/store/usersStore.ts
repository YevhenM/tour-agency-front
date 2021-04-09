import {makeAutoObservable, observable, computed} from "mobx"
import {IUser} from "../interfaces/IUser";

class usersStore {
    isInit:boolean = false

    users: IUser[] = []
    isAuth:boolean = false
    userIndex:number = 0
    regisrationToggle:boolean = false

    inputError:boolean = false
    helperText:string = ""
    helperText1:string = ""

    loginInput:string = ""
    passwordInput:string = ""
    passwordConfirm:string = ""

    constructor() {
        makeAutoObservable(this)
    }
    
    initializeApp(){
        if(!this.isInit) {
            this.isInit = true
            this.readLocalStorage()
          } 
    }

    readLocalStorage() {
        
        if (localStorage.getItem('users') == null) { this.saveLocalStorage() }
        let localStorageValue:string|null = localStorage.getItem('users')
        let str1:string = typeof(localStorageValue) == 'string' ? localStorageValue : '{}'       
        this.users = JSON.parse(str1)
        this.isAuth = (localStorage.getItem('isAuth')) === 'false' ? false : true
        this.userIndex = Number(localStorage.getItem('userIndex'))        
    }

    saveLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.users) )
        localStorage.setItem('userIndex', this.userIndex.toString() )
        localStorage.setItem('isAuth', this.isAuth.toString() )
    }

    addUser(){               
        let login:string = this.loginInput
        let password:string = this.passwordInput
        let passwordConfirm:string = this.passwordConfirm
    

        if (typeof(this.checkLogin(login)) == 'number') { 
             this.helperText = "this user already exists"
             this.inputError = true 
             this.loginInput = ""
             return false 
        }

        if(password != passwordConfirm){
            this.helperText1 = "password does not match"
            this.inputError = true
            return false         
        }

        this.users.push({"login": login, "password": password, "cart": [] })
        this.loginInput = ""
        this.passwordInput = ""
        this.passwordConfirm = ""
        this.regisrationToggle = false            
        this.saveLocalStorage()        
    }

    regisrationToggleSwitch() {
      this.regisrationToggle = !this.regisrationToggle
    }
    
    loginTextChange(value:string){
        this.loginInput=value
        this.warningNull()
    }
    passwordTextChange(value:string){
        this.passwordInput=value
        this.warningNull()
    }
    passwordConfirmTextChange(value:string){
        this.passwordConfirm=value        
        this.warningNull()
        
    }

    checkLogin(login:string){
        let result:number|boolean = false
        this.users.forEach((item, index)=>{            
            if (item.login === login) {result = index}
        })
        return result
    }

    logIn(){
        let login:string = this.loginInput
        let password:string = this.passwordInput
        let index = this.checkLogin(login)        
         if (typeof(index) == 'number') {             
             if(this.users[index]['password'] === password ) {
                 this.userIndex = index
                 this.isAuth = true
                 this.saveLocalStorage()                 
                } else { this.inputError = true }  
            } else {  this.inputError = true }
    }
    
    logOff(){
        this.isAuth = false
        this.userIndex = 0
        this.saveLocalStorage()
    }    
    
    warningNull(){
        this.helperText=""
        this.helperText1=""
        this.inputError=false
    }

}

export default new usersStore