import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.component.style.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

//prevent the default submit actoin from firing
    handleSubmit = async event => {
        event.preventDefault();
// destructure
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.state({email:'', password:''});
        }catch(error){
            console.log(error);
        }


//clear
        // this.setState({email:'',password:''})
    }
//dynamically set the state
    handleChange = event => {
        //desctructure.
        const {value, name} = event.target;
        // console.log("testname",value,name, event);
        this.setState({[name]: value})   
    }

    render(){
        return(
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>



                <form onSubmit = {this.handleSubmit}>
                    
                    <FormInput
                        name = "email" 
                        type = "email" 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label='email'
                        required />
             

                    <FormInput
                       
                        name ="password" 
                        type ="password" 
                        value = {this.state.password} 
                        handleChange={this.handleChange}
                        label ='password'
                        required /> 

                    <div className ='buttons'>
                        <CustomButton type = 'submit'> Sign in </CustomButton>
                        <CustomButton type = 'button' onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>                                    
                </form>
            </div>
        )
    }

}

    export default SignIn;