import React, { Component } from 'react';
import DaumPostcode from 'react-daum-postcode';

class Postcode extends Component {

    onCompletePost=(data)=>{
        // console.log( data );
        // console.log( data.zonecode );
        // console.log( data.jibunAddress );
        // console.log( data.jibunAddressEnglish );
        // console.log( data.roadAddress );
        // console.log( data.roadAddressEnglish );
        this.props.onAddressHandle(data.zonecode, data.roadAddress);
    }

    render() {
        const postStyle = {
            position:'fixed',
            zIndex:2,
            width:'400px',
            height:'500px',
            top:'50%',
            left:'50%',
            marginTop:'-250px',
            marginLeft:'-200px',
            border:'1px solid #444',
            background:'#fff',
            borderRadius:'5px',
            overflow:'hidden'
        }        
        return (
            <div>
                <DaumPostcode 
                style={postStyle}
                onComplete= {this.onCompletePost} 
                />
            </div>
        );
    }
}

export default Postcode;