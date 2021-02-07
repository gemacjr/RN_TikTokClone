import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: Dimensions.get('window').height - 48,
    },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,

    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end'
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 270,
        justifyContent: 'space-between',
        marginRight: 5
    },
    bottomContainer: {
        padding: 10,
        marginLeft: 10,
    },
    handle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 5,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        

    },
    iconContainer: {
        alignItems: 'center'
    },

    statsLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5

    }



});

export default styles;