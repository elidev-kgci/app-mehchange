import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer, Text, TouchableRipple} from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function DrawerContent() {
  return (
    <DrawerContentScrollView>
      
      <View style={styles.drawerContent}>
        <View style={{  width: '100%', alignItems: 'center', marginTop: 20, marginBottom: 10 }}>
          <Image source={require('../assets/logo.png')} style={{ width: 200, height: 65 }} />
        </View>

        <TouchableOpacity style={{  margin: 20, marginBottom: 10 }}>
          <Text style={{ backgroundColor: '#270082', color: '#fff', fontSize: 16, padding: 15, textAlign: 'center', borderRadius: 5 }}>
            Faire un nouvel echange
          </Text>
        </TouchableOpacity>
        

        <Drawer.Section title="Menu principal" style={{  fontSize: 10 }}>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.preference}>
              <Text >
                <AntDesign  name="barschart"  size={16}  color="#3b5998" style={{ marginRight: 50 }}  />
                Tableau de bord
              </Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>
                <AntDesign  name="wallet"  size={16}  color="#3b5998"  />
                Nouvel echange
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>
                <AntDesign  name="carryout"  size={16}  color="#3b5998"   />
                Historiques
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Parrainages</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Système de remise</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Mon avis</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Service client</Text>
            </View>
          </TouchableRipple>
        </Drawer.Section>

        <Drawer.Section title="Paramètres">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Mon Profil</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Sécurité</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Vérification</Text>
            </View>
          </TouchableRipple>
        </Drawer.Section>

        <Drawer.Section>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text style={{  color: '#DFDFDE' }}>Résilier mon compte</Text>
            </View>
          </TouchableRipple>
        </Drawer.Section>

        <Drawer.Section>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preferenceLogout}>
              <Text style={{ color: "#fff" }}>Se déconnecter</Text>
            </View>
          </TouchableRipple>
        </Drawer.Section>

      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 10,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: -5,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  preferenceLogout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#D82148",
    padding: 30,
  },
  buttonInside: {
    padding: 20,
    width: 200,
    height: 80,
    color: '#fff'
  }
})
