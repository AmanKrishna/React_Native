import React from 'react';
import {View,FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

function Menu(props){
    // each element in the data is supplied here
    // index comes from the key extractor
    const renderMenuItem = ({item,index}) => {
        return(
            <ListItem 
                key={index}
                title={item.name}
                subtitle={item.description}
                // right arrow is inserted before every list
                // item in ios
                hideChevron={true}
                // takes an image
                // require = Specify the particular image
                // cannot change it programatically
                // will change soon
                leftAvatar={{source: require('./images/uthappizza.png')}}
            />
        )
    }

    return(
        // will be maped to listView in android
        // Flatlist needs
        // -data
        // -renderItem
        // -id=ID
        // flatlist will itereate over the data and render them
        // as the view in renderItem
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Menu;