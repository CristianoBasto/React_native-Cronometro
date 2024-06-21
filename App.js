import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      numero: 0,
      tempo: 0,
      botao: 'CARREGAR'

    

    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
    this.resetar = this.resetar.bind(this);

  }

  vai() {

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'CARREGAR'})

    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100);
      
      this.setState({botao:'PARAR'})
    }
  }
  
  limpar(){

    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer=null;
      this.setState({botao:'CARREGAR'})
      this.setState({tempo: this.state.numero})

  
    }

    this.setState({
      numero:0
    })
     this.setState({tempo: this.state.numero})
  }

  resetar(){

    
      this.setState({tempo: 0})
    
  }



  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}> {this.state.botao} </Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}> LIMPAR </Text>
          </TouchableOpacity>
          
        </View>
                  <Text style={styles.tempo}>Tempo percorrido : {this.state.tempo.toFixed(2)}s</Text>
      
      <View style={styles.btnResete}>
      <TouchableOpacity style={styles.btn} onPress={this.resetar}>
            <Text style={styles.btnTexto}> RESETAR </Text>
          </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

   container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00aeef'
   },

   timer:{
    marginTop:-160,
    color:'#fff',
    fontSize:65,
    fontWeight:'bold'
   },
   btnArea:{
    flexDirection:'row',
    marginTop:70,
    height:40
   },
   btn:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:40,
    margin:20,
    borderRadius:10
   },
    btnTexto:{
      fontSize:20,
      fontWeight:'bold',
      color:'#00aeef'
    },

    tempo:{
      marginTop:80,
      fontSize:25,
     
      color:'black'
    },

    btnResete:{
      flexDirection:'row',
      marginTop:-10,
      height:40
     }
});

export default App;