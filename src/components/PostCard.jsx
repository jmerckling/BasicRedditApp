import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/FontAwesome5"
import Divider from './Divider';

export default function PostCard(props) {
    const { post } = props;
    const navigation = useNavigation();

    const navigateToPost = () => {
        navigation.navigate("Post", { url: post.url, postTitle: post.title });
    }

    return (
        post.thumbnail !== 'nsfw' && (
            <TouchableWithoutFeedback onPress={navigateToPost}>
                <View>
                    <View style={styles.post}>
                        <View style={styles.infoDetails}>
                            <View style={styles.iconText}>
                                <Icon name='user' />
                                <Text style={styles.textElementsInfo}>{post.author_name}</Text>
                            </View>
                            <View style={styles.iconText}>
                                <Icon name='clock' />
                                <Text style={styles.textElementsInfo}>{post.date_created} ago</Text>
                            </View>
                        </View>
                        <View style={styles.titleAndImage}>
                            <Text style={styles.titleOnSide}>{post.title}</Text>
                            <Image source={{ uri: post.thumbnail }} style={styles.image} />
                        </View>
                        <View style={styles.infoDetails}>
                            <View style={styles.infoBubble}>
                                <Icon name='arrow-up' />
                                <Text style={styles.textElementsInfo}>{post.score}</Text>
                                <Icon name='arrow-down' />
                            </View>
                            <View style={styles.infoBubble}>
                                <Icon name='comment' />
                                <Text style={styles.textElementsInfo}>{post.num_comments}</Text>  
                            </View>
                        </View>
                        
                    </View>
                    <Divider />
                </View>
            </TouchableWithoutFeedback>
        )
    );
}

const styles = StyleSheet.create({
    spacing: {
        flex: 1
    },
    post: {
        padding: 15,
    },
    infoBubble: {
        display: 'flex',
        flexDirection:'row',
        gap: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
    },
    iconText: {
        display: 'flex',
        flexDirection:'row',
        gap: 5,
    },
    titleAndImage: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingTop: 5
    },
    title: {
        color: "#000",
        fontWeight: "bold"
    },
    titleOnSide: {
        color: "#000",
        fontWeight: "bold",
        maxWidth: '75%'
    },
    image: {
        position: "relative",
        width: 90,
        height: 90,
        justifyContent: 'flex-end',
        maxWidth: '25%',
        borderRadius: 6
    },
    infoDetails: {
        justifyContent: 'space-between',
        flexDirection: "row",
        paddingTop: 5,
    },
    textElementsInfo: {
        fontSize: 11,
    }
});