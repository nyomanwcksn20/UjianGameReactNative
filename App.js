import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Button } from 'react-native'
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'
export default class App extends Component {
  
  constructor(props){
    super(props)

    this.state={
      gameState:[
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
       ],
      player:1,
    }
  }

  componentDidMount(){
    this.initializeGame();
  }

  initializeGame=()=>{
    this.setState({gameState:
    [
     [0,0,0,0,0],
     [0,0,0,0,0],
     [0,0,0,0,0],
     [0,0,0,0,0],
     [0,0,0,0,0],
    ]
    })
  }

  onButtonPress= ()=>{
    
  }


  onBoardPress = (row, col)=>{
    
  }

  renderIcon = (row, col) =>{
    let value = this.state.gameState[row][col];
    if(value == 1){
      return  <Text style={styles.item}/>;
    }else{
      return<View/>;
    }
  }
  
  

  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={()=> this.onBoardPress(0,0)}  style={styles.border}>
          {this.renderIcon(0,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(0,1)} style={styles.border}>
          {this.renderIcon(0,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(0,2)} style={styles.border}>
          {this.renderIcon(0,2)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(0,3)} style={styles.border}>
          {this.renderIcon(0,3)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(0,4)} style={styles.border}>
          {this.renderIcon(0,4)}
        </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={()=> this.onBoardPress(1,0)} style={styles.border}>
          {this.renderIcon(1,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(1,1)} style={styles.border}>
          {this.renderIcon(1,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(1,2)} style={styles.border}>
          {this.renderIcon(1,2)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(1,3)} style={styles.border}>
          {this.renderIcon(1,3)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(1,4)} style={styles.border}>
          {this.renderIcon(1,4)}
        </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={()=> this.onBoardPress(2,0)} style={styles.border}>
          {this.renderIcon(2,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(2,1)} style={styles.border}>
          {this.renderIcon(2,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(2,2)} style={styles.border}>
          {this.renderIcon(2,2)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(2,3)} style={styles.border}>
          {this.renderIcon(2,3)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(2,4)}style={styles.border}>
          {this.renderIcon(2,4)}
        </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={()=> this.onBoardPress(3,0)} style={styles.border}>
          {this.renderIcon(3,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(3,1)} style={styles.border}>
          {this.renderIcon(3,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(3,2)} style={styles.border}>
          {this.renderIcon(3,2)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(3,3)} style={styles.border}>
          {this.renderIcon(3,3)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(3,4)} style={styles.border}>
          {this.renderIcon(3,4)}
        </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={()=> this.onBoardPress(4,0)} style={styles.border}>
          {this.renderIcon(4,0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(4,1)} style={styles.border}>
          {this.renderIcon(4,1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(4,2)} style={styles.border}>
          {this.renderIcon(4,2)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(4,3)} style={styles.border}>
          {this.renderIcon(4,3)}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.onBoardPress(4,4)} style={styles.border}>
          {this.renderIcon(4,4)}
        </TouchableOpacity>
        </View>
        
        <View style={styles.space}>
        <Button onPress={()=> this.onBoardPress(0,0)} title="Mulai" />
        </View>
        
        <View>
        <Button  title="Atas" />
        </View>
      
        <View>
        <Button title="Kiri"/>
        <Button  title="Kanan"/>
        </View>

        <View>
        <Button  title="Bawah"/>
        </View>
        
      </View>

    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#97c79b',
    alignItems: 'center',
    
  },


  border: {
    backgroundColor: 'white',
    borderWidth: 1,
    height:70,
    width:70,
  },

  space:{
    margin:10,
    
  },


  item: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
  },
})

