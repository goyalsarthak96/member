import { StatusBar } from 'expo-status-bar';
import React, { useState, PureComponent } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { clockRunning, set } from 'react-native-reanimated';
//import ExpandableScroll from './ExpandableScroll';

export default function MemberHome({navigation}) {

     const [visibility1, setVisibility1] = useState(false);
    const [visibility2, setVisibility2] = useState(false);
    const [visibility3, setVisibility3] = useState(false);
    const [visibility4, setVisibility4] = useState(false);

    const ExpandableScroll1=()=>{

        if(visibility1)
        {
            console.log("scroll is visible")
            return (
                <View style = {{backgroundColor:'black', flex: 1, paddingTop:10, flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style = {styles.textStyle}>Disease           : </Text>
                        <Text style = {styles.textStyle}>Last treatment date        : </Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style = {styles.textStyle}>Hospitalized?        : </Text>  
                        <Text style = {styles.textStyle}>Hospice?        : </Text>     
                    </View>        
                </View>
            );
        }
        else
        {
            console.log("scroll is invisible")
            return (<View></View>);
        }
    
    }

    const ExpandableScroll2=()=>{

        if(visibility2)
        {
            console.log("scroll is visible")
            return (
                <View style = {{backgroundColor:'black', flex: 1, paddingTop:10, flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style = {styles.textStyle}>Claim Number     : {navigation.getParam('claimNum')}</Text>        
                        <Text style = {styles.textStyle}>GPI Number         : {navigation.getParam('gpiNum')}</Text>  
                    </View>
                    <View style={{flex:1}}>
                        <Text style = {styles.textStyle}>Prescriber Name  : {navigation.getParam('gpiNum')}</Text>    
                        <Text style = {styles.textStyle}>Pharmacy Name   : {navigation.getParam('gpiNum')}</Text>  
                    </View>                     
                </View>
            );
        }
        else
        {
            console.log("scroll is invisible")
            return (<View></View>);
        }
    
    }

    const ExpandableScroll3=()=>{

        if(visibility3)
        {
            console.log("scroll is visible")
            return (
                <View style = {{backgroundColor:'black', flex: 1, paddingTop:10, flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style = {styles.textStyle}>Date of contact     : {navigation.getParam('claimNum')}</Text>        
                        <Text style = {styles.textStyle}>Reason for contact         : {navigation.getParam('gpiNum')}</Text>  
                    </View>   
                    <View style={{flex:1}}>
                        <Text style = {styles.textStyle}>Mode of Communication  : {navigation.getParam('gpiNum')}</Text>    
                        <Text style = {styles.textStyle}>Attended By   : {navigation.getParam('gpiNum')}</Text>   
                    </View>                 
                </View>
            );
        }
        else
        {
            console.log("scroll is invisible")
            return (<View></View>);
        }
    
    }


    const ExpandableScroll4=()=>{

        if(visibility4)
        {
            console.log("scroll is visible")
            return (
                <View style = {{backgroundColor:'black', flex: 1, paddingTop:10, flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <Text style = {styles.textStyle}>Medication Name    : {navigation.getParam('claimNum')}</Text>        
                        <Text style = {styles.textStyle}>GPI Number              : {navigation.getParam('gpiNum')}</Text>  
                    </View>  
                    <View style={{flex:1}}>
                        <Text style = {styles.textStyle }>Allergies(if any)  : {navigation.getParam('gpiNum')}</Text>    
                        <Text style = {styles.textStyle}>Adherence           : {navigation.getParam('gpiNum')}</Text>
                    </View>                                      
                </View>
            );
        }
        else
        {
            console.log("scroll is invisible")
            return (<View></View>);
        }
    
    }

     const clickHandler1 = () => {
             setVisibility1(!visibility1);
     }

     const clickHandler2 = () => {
        setVisibility2(!visibility2);
    }

    const clickHandler3 = () => {
        setVisibility3(!visibility3);
    }

    const clickHandler4 = () => {
        setVisibility4(!visibility4);
    }
      

    
    return (
        <View style = {styles.container}>
            <View style = {{flex:2, margin : 30,marginVertical: 50, marginBottom:30, paddingBottom:10, borderWidth : 0, borderBottomWidth : 2, borderColor:'#f57f29'}}>
                <View style = {{flexDirection : 'row'}}>
                    <Text style = {{flex:1, fontWeight:'bold', fontSize:27}}>First Name :</Text> 
                    <Text style = {{flex:1, fontWeight:'bold', fontSize:27}}>Last Name:</Text>
                </View>
                <View style = {{flexDirection : 'row'}}>
                    <Text style = {{flex:1, fontWeight:'bold', fontSize:27}}>Age :</Text>
                    <Text style = {{flex:1, fontWeight:'bold', fontSize:27}}>Gender : </Text>
                </View>
                <View style = {{flexDirection : 'row'}}>
                    <Text style = {{flex:1, fontWeight:'bold', fontSize:27}}>Carrier Id :</Text>
                    <Text style = {{flex:1, fontWeight:'bold', fontSize:27}}>Account Id :</Text>
                </View>
                <View style = {{flexDirection : 'row'}}>
                <Text style = {{flex:1 , fontWeight:'bold', fontSize:27}}>Employer Group Id :</Text>
                    <Text style = {{flex:1,  fontWeight:'bold', fontSize:27}}>Member Id :</Text>
                </View>
            </View>
            <View>
                <Text style = {{fontWeight:'bold', fontSize : 34, paddingLeft:20}}> Latest Data</Text>
            </View>
            <View style = {{flex : 10,  flexDirection : 'column', fontSize:27}}>
                    <View style = {{flex: 1, margin:20,  borderRadius : 20, }}>
                        <View style = {{backgroundColor:'#f57f29'}}>
                            <TouchableOpacity onPress = {clickHandler1}>
                                <Text style = {styles.textHeading}>Treatment</Text>
                            </TouchableOpacity> 
                        </View >
                        {ExpandableScroll1()}
                    </View>
                    <View style = {{flex : 1, margin: 20, borderRadius : 20}}>
                        <View style = {{backgroundColor:'#f57f29'}}>
                            <TouchableOpacity onPress = {clickHandler2}>
                                <Text style = {styles.textHeading}>Latest Claim</Text>   
                            </TouchableOpacity>
                        </View>
                        {ExpandableScroll2()}   
                    </View> 
                    <View style = {{flex : 1, margin : 20, borderRadius : 20}}>
                        <View style = {{backgroundColor:'#f57f29'}}>
                        <TouchableOpacity onPress = {clickHandler3}>
                                <Text style = {styles.textHeading}>Latest Contact</Text>   
                            </TouchableOpacity>     
                        </View>
                        {ExpandableScroll3()}
                    </View>
                    <View style  = {{flex: 1, margin : 20, borderRadius : 20}}>
                        <View style = {{backgroundColor:'#f57f29'}}>
                            <TouchableOpacity onPress = {clickHandler4}>
                                <Text style = {styles.textHeading}>Medication</Text>   
                            </TouchableOpacity>
                        </View>
                   
                    {ExpandableScroll4()}
                    </View>
                </View>         
            </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        flex : 1,
    },
    textStyle : {
        color:'#fff', 
        fontSize : 23, 
        paddingLeft: 30
    },
    textStyleBlack : {
        color:'#fff', 
        fontSize : 23, 
        paddingLeft: 30
    },
    textHeading : {
        color:'#fff', 
        fontSize : 27, 
        padding:30, 
        fontWeight : "bold"
    }

})