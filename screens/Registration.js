import React ,{useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput,TouchableOpacity,Dimensions, ScrollView ,Text, View, Button} from "react-native";
import {useForm, Controller} from 'react-hook-form'
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { UserRegistraion } from '../redux/Action';

const Registration = ({navigation}) => {
  const dispatch = useDispatch();

    const [checked, setChecked] = useState('male');
    const [checkPassword, setCheckPassword] = useState()
    const { control, handleSubmit, reset, formState: { errors } } = useForm({mode: 'onBlur'});
    

    const onSubmit = (data) =>  {
        const gender = {
            "gender": checked,
        };

        let merged = {...data, ...gender}
        console.log(merged);
        dispatch(UserRegistraion(merged));
        navigation.navigate("login");
        reset()
    }

  return (
    <SafeAreaView>
      <View style={{borderWidth:1,paddingVertical:20,backgroundColor:"#2c731d"}}>
        <View style={{marginTop:30,alignItems:'center',backgroundColor:"#2c731d"}}>
          <Text style={{fontSize:18,color:"#fff",fontWeight:"700"}}>Sign Up</Text></View>
      </View>
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.container}>
    <Text style={styles.inputNames}>Name</Text>

    <Controller
        control={control}        
        name="name"      
        rules={{
            required: true,
            }}
        render={({field: {onChange, value, onBlur}}) => (
           <TextInput
             style={styles.input}
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)} 
             placeholder="Enter your name here"    
            />
        )}  
    />
    {errors.name && <Text style={styles.errorMsg}> Name field is required!</Text>}


    <Text style={styles.inputNames}>Email</Text>
    <Controller
        control={control}        
        name="email" 
        rules={{
          required: {value: true,
            pattern:{
              value:  /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}/,
              message: `It's not a valid email`
           },
          },
        }}     
        

        render={({field: {onChange, value, onBlur}}) => (
           <TextInput
             style={styles.input}
             keyboardType = 'email-address'
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)} 
             placeholder="Enter your Email here"    
            />
        )}  
    />

    {errors.email && <Text style={styles.errorMsg}>Email field is required!</Text>}

    <Text style={styles.inputNames}>Phone</Text>
    <Controller
        control={control}        
        name="phone"      
        rules={{
          required: true,
        }}  
        render={({field: {onChange, value, onBlur}}) => (
           <TextInput
             style={styles.input}
             keyboardType = 'number-pad'
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)} 
             placeholder="Enter your Phone here"    
            />
        )}  
    />

    {errors.phone && <Text style={styles.errorMsg}>Phone Number is required!</Text>}

    <Text style={styles.inputNames}>Password</Text>
    <Controller
        control={control}        
        name="password"      
        rules={{
           required: {
             value: true,
           },
         }}  
        render={({field: {onChange, value, onBlur}}) => (
           <TextInput
             style={styles.input}
             secureTextEntry={true}
             value={value}            
             onBlur={onBlur}            
             onChangeText={(value) => {onChange(value), setCheckPassword(value)}} 
             placeholder="***************"    
            />
        )}  
    />

    {errors.password && <Text style={styles.errorMsg}>Password is required!</Text>}

    <Text style={styles.inputNames}>Confirm Password</Text>
    <Controller
        control={control}        
        name="cpassword"      
        rules={{ validate: (value) => value === checkPassword}}
        render={({field: {onChange, value, onBlur}}) => (
           <TextInput
             style={styles.input}
             secureTextEntry={true}
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)} 
             placeholder="***************"    
            />
        )}  
    />

    {errors.cpassword && <Text style={styles.errorMsg}>The passwords do not match</Text>}



    {errors.dob && <Text style={styles.errorMsg}>The passwords do not match</Text>}


     {/* <Text style={styles.inputNames}>Gender</Text>

            <View style={styles.gender}>

            <RadioButton
                status={ checked === 'male' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('male')}
            />
            <Text style={styles.inputNames}>Male</Text>
            <RadioButton
                status={ checked === 'female' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('female')}
            />
            <Text style={styles.inputNames}>Female</Text>
            </View> */}



    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.subButton}>
      <Text style={styles.submitText}>Submit</Text>
     </TouchableOpacity>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Registration

const styles = StyleSheet.create({
    input: {
      borderColor:'#ccc',
      borderRadius:4,
      borderWidth:1,
      height:50,
      padding:10,
      marginBottom:10,
      marginTop:7
    },
    inputNames:{
        fontSize:16,
        fontWeight:'500'
    },
    errorMsg: {
        color: "red",
        marginBottom:5
    },
    gender: {
        flexDirection:'row',
        alignItems:'center'
    },
    container:{
        flex: 1,
        justifyContent:'center',
        marginTop:50,
        paddingHorizontal:20
      },
      subButton:{
        borderColor:'#ccc',
        borderRadius:4,
        height:50,
        width: Dimensions.get("screen").width / 1.1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2c731d',
        marginTop:20
      },
      submitText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'500'
      }
  
  });