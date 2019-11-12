import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Alert,
  Button
} from 'react-native';


class HomeActivity extends React.Component {
 
   static navigationOptions = {
    title: 'Home',
 headerStyle: {
      backgroundColor: '#03A9F4',
    },
 headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
 
  }; 
 constructor(props) {  
        super(props);  
  
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
        this.state = {  
            dataSource: ds.cloneWithRows([  
                "Indira Gandhi Delhi Technical University for Women","IIT Delhi","NSIT",  
                "Delhi Technological University","University of Delhi","IIIT Delhi", "Bharti Vidyapeeth", "Bits Pilani","IIT Bombay", "NIT"   
            ])  
        };  
    }  
    //handling onPress action  
    getListViewItem = (rowData) => {  
        Alert.alert(rowData);  
    }  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText} >List of Colleges</Text>
        <ListView  
                    style={styles.container}  
                    dataSource={this.state.dataSource}  
                    renderRow={(rowData) =>  
                       <Text style={styles.rowViewContainer}  
                             onPress={this.getListViewItem.bind(this, rowData)}>{rowData}  
                       </Text>  
                    }  
                    renderSeparator={(sectionId, rowId) =>  
                        <View key={rowId} style={styles.separator} />}//adding separation  
                />
        <Button
          title="Go"
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
 fontWeight: 'bold'
  },
  
  rowViewContainer: {  
        flex: 1,  
        paddingRight: 15,  
        paddingTop: 13,  
        paddingBottom: 13,  
        borderBottomWidth: 0.5,  
        borderColor: '#c9c9c9',  
        flexDirection: 'row',  
        alignItems: 'center',  
        fontSize: 20,  
        marginLeft: 10,  
    },  
  
});

export default HomeActivity;
