import { View, Text, Image, Button } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


const Skip = ({ ...props }) => (
    <Text style={{ marginLeft: 10, color: '#fff', fontSize: 16 }} { ...props }> Passer </Text>
);

const Next = ({ ...props }) => (
    <Text style={{ marginRight: 10, color: '#fff', fontSize: 16}} { ...props }> Suivant</Text>
);

const OnboardingScreen = ({ navigation }) => {
  return (
      <Onboarding
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          onSkip={() => navigation.navigate("Dashboard")}
          onDone={()=> navigation.navigate("Dashboard")}
          pages={[
            {
                backgroundColor: '#06113C',
                image: <Image source={require('../assets/onboarding/1.png')} style={{ width: 300, height: 300 }} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#06113C',
                image: <Image source={require('../assets/onboarding/1.png')} style={{ width: 300, height: 300 }} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#06113C',
                image: <Image source={require('../assets/onboarding/1.png')} style={{ width: 300, height: 300 }} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
        ]}
    />
  )
}

export default OnboardingScreen
