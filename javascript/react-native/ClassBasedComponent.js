import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class ClassBasedComponent extends Component {
    state = {

    }

    render() { 
        return (
            <View stlye={styles.container}>
                <Text>ClassBasedComponent</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
})
 
export default ClassBasedComponent