import React from "react"
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.buttonSkill}
    >
      <Text style={styles.textSkill}>
       {skill}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    marginVertical: 10,
    alignItems: 'center',
    padding: 15,
    borderRadius: 50
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  }
})