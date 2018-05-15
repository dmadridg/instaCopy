import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from './config'

class InstaClone extends Component {

    constructor(){
        super();
        this.state = {
            screenWidth: Dimensions.get('window').width,
            liked: false,
        };
    }

    componentDidMount(){
        this.setState({
            screenWidth: Dimensions.get('window').width
        });
    }

    likeToggle(){
        this.setState({
            liked: !this.state.liked
        });
    }

    render(){
        const imageheight = Math.floor(this.state.screenWidth * 1.1);
        const imageUri = "https://lh3.googleusercontent.com/neq7KtwBLDGPn0oCINyFGk0_yTVsFx4zatlG0xy48snPFD8pLkNRps_osHxgMqENfyvEGwj__Cg9ficmqaUIfdEA" + "=s" + imageheight + "-c";
        return(
            <View style={{flex: 1, width:100+"%", height:100+"%"}}>
                <View style={styles.templateNav}>
                    <Text>Instagram</Text>
                </View>
                <View style={styles.userBar}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image style={styles.userPic} source={{uri:
                        "https://lh3.googleusercontent.com/neq7KtwBLDGPn0oCINyFGk0_yTVsFx4zatlG0xy48snPFD8pLkNRps_osHxgMqENfyvEGwj__Cg9ficmqaUIfdEA"}}
                        />
                        <Text style={{marginLeft:10}}>dmadridg</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize: 30}}>...</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=> {
                    this.likeToggle();
                }}>
                <Image
                    style={{width:this.state.screenWidth, height:425}}
                    source={{
                        uri: 
                        imageUri
                    }} 
                />
                </TouchableOpacity>
                
                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {height: 40, width: 40, tintColor: "rgb(252,61,57)"}]} source={config.images.heartIcon}/>
                    <Image style={[styles.icon, {height: 36, width: 36}]} source={config.images.chatIcon}/>
                    <Image style={[styles.icon, {height: 40, width: 40}]} source={config.images.shareIcon}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    templateNav:{
        width: 100 + "%",
        height: 50,
        // marginTop: 20,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: 'center',
    },
    userBar: {
        width: 100+"%",
        height: config.styleConsts.rowHeight,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    iconBar: {
        height: config.styleConsts.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row'
    },
    icon: {
        paddingHorizontal: 5
    }
});

export default InstaClone;