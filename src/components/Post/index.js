import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';


const Post = () => {

    const [paused, setPaused] = useState(false);



    const onPlayPausePress = () => {
        setPaused(!paused);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>


                <Video
                    source={require('../../assets/P.mp4')}
                    style={styles.video}
                    onError={(e) => console.log(e)}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>
            <View style={styles.uiContainer}>
                <View style={styles.rightContainer}>
                   
                        <Image style={styles.profilePicture} source={{ uri: 'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg' }} />
                    

                    <View style={styles.iconContainer}>
                    <AntDesign name={"heart"} size={30} color="white" />
                        <Text style={styles.statsLabel}>123</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome name={"commenting"} size={30} color="white" />
                        <Text style={styles.statsLabel}>123</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Fontisto name={"share-a"} size={25} color="white" />
                        <Text style={styles.statsLabel}>123</Text>
                    </View>
            </View>

                <View style={styles.bottomContainer}>
                    
                    <Text style={styles.handle}>@swiftbeard</Text>
                    <Text style={styles.description}>Hahahahaha</Text>


                    <View style={styles.songRow}>
                        <Entypo name={"beamed-note"} size={24} color="white" />
                        <Text style={styles.songName}>NF - The Search</Text>
                    </View>
                </View>
            </View>
        </View>




    );
};

export default Post;