class AuthPost {  //Global authentication variable
    
    //Create global auth variable
    constructor() {
      this.authorizePost = false;
    }
  
    //function to return valid authentication
    post() {
      this.authorizePost = true;
    }
  
    //Function to return unauthorized authentication
    noPost() {
      this.authorizePost = false;
    }
  
    //Returns authentication value
    isPostAuthorized() {
      return this.authorizePost;
    }
  }

  export default new AuthPost();
    