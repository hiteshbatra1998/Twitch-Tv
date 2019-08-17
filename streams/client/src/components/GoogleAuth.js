import React from 'react';
class GoogleAuth extends React.Component{
    state={ isSignedIn : null };
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'YOUR KEY',
                scope:'email'
            }).then( ()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.setState( {isSignedIn: this.auth.isSignedIn.get()} );
                this.auth.isSignedIn.listen(this.changeSignIn)
            } )
        })
    }
    changeSignIn=()=>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    renderButton(){
        if(this.state.isSignedIn===null){ 
            return <div>I ont know</div>
        }else if(this.state.isSignedIn){
            return <div>Siged In</div>
        }else{
            return <div>Not Signed In</div>
        }
    }
    render(){
        return (
            <div>
                {this.renderButton()}
            </div>
        )
    }
}
export default GoogleAuth;
