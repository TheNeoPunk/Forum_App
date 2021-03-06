class Auth {  //Global authentication variable
    
    //Create global auth variable
    constructor() {
      this.authenticated = false;
    }
  
    //function to return valid authentication
    login() {
      this.authenticated = true;
    }
  
    //Function to return unauthorized authentication
    logout() {
      this.authenticated = false;
    }
  
    //Returns authentication value
    isAuthenticated() {
      return this.authenticated;
    }
  }

  export default new Auth();
    