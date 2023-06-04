import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';

const HomeScreen = () => {
    
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
        {/*First section */}

        <View className="flex-row px-8 mt-8 items-center space-x-2">
           <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-[#00bcc9] text-xl font-semibold">travla</Text>
           </View>

            <Text className="text-black text-3xl font-semibold">Explore Uganda</Text>
        </View>

        {/*Second Section*/}
        <View className="px-6 mt-8 space-y-3">
            <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
            <Text className="text-[#00bcc9] text-[38px] font-bold">Good Moments</Text>
            <Text className="text-[#3c6072] text-base">
            Travla is a tourism booking app designed for both individual travelers and travel agencies
 intending to explore Uganda. 
       </Text>        
        </View>

        {/*Third Section - Circles */}
        <View className="w-[400px] h-[400px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36"></View>
        <View className="w-[400px] h-[400px] bg-[#e99265] rounded-full absolute -bottom-28 -left-36"></View>
         
         {/*Image Section - Open */}
         <View className="flex-1 relative items-center justify-center">
             <Animatable.Image
             animation="fadeIn"
             easing="ease-in-out"  
             source={HeroImage}
             className="w-full h-full object-cover mt-50"/>
          
           {/*Floating Button */}
          
          <View className="absolute bottom-20 w-24 h-24 border-r-2 border-l-2 border-t-4 border-[#00bcc9] rounded-full items-center justify-center">           
            
           <TouchableOpacity
           onPress={() => navigation.navigate("Discover")}
           >          
           <Animatable.View 
           animation={"pulse"}
           iterationDelay={"100"}
           easing="ease-in-out"
           iterationCount={"infinite"} 
           className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9] ">
                 <Text  className="text-gray-50 text-[40px] font-semibold">Go</Text>
            </Animatable.View>
           </TouchableOpacity>
         </View>
                  {/*Image Section - Close Below */}
         </View>
        
    </SafeAreaView>
  )
}

export default HomeScreen