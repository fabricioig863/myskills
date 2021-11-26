import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkilData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkilData[]>([])
  const [greeting, setGreetting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data])
  }

  function handleRemoveSkill(id: string){
      setMySkills(oldState => oldState.filter(
        skill => skill.id !== id
      ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      return setGreetting('Good morning')
    }

    if (currentHour >= 12 && currentHour < 18) {
      return setGreetting('Good afternoon')
    }

    return setGreetting('Good night')


  }, [])


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome, Fabricio
        </Text>

        <Text style={styles.greetings}>
          {greeting}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button 
          onPress={handleAddNewSkill}
          title="Add"
        />

        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <>
              <SkillCard 
                skill={item.name} 
                onPress={() => handleRemoveSkill(item.id)}
              />
            </>
          )}
        />


      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: '#FFF',
    marginVertical: 10,
    fontSize: 16
  }
})
