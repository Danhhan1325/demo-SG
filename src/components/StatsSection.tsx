import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const stats = [
  {
    icon: 'volunteer-activism',
    value: '300',
    unit: 'triệu',
    description: 'gây quỹ từ thiện',
    color: '#F5A623',
  },
  {
    icon: 'sentiment-satisfied-alt',
    value: '500+',
    unit: '',
    description: 'người thụ hưởng',
    color: '#E63946',
  },
  {
    icon: 'theater-comedy',
    value: '50+',
    unit: '',
    description: 'buổi biểu diễn',
    color: '#2D6135',
  },
  {
    icon: 'people',
    value: '100+',
    unit: '',
    description: 'tình nguyện viên',
    color: '#F5A623',
  },
];

export function StatsSection() {
  return (
    <LinearGradient
      colors={['#2D6135', '#194923']}
      style={styles.container}
    >
      <Text variant="headlineSmall" style={styles.title}>
        Tác động của chúng tôi
      </Text>
      
      <View style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statItem}>
            <View style={[styles.iconContainer, { backgroundColor: `${stat.color}20` }]}>
              <MaterialIcons 
                name={stat.icon as any} 
                size={24} 
                color={stat.color} 
              />
            </View>
            
            <View style={styles.statContent}>
              <View style={styles.valueContainer}>
                <Text variant="headlineMedium" style={styles.statValue}>
                  {stat.value}
                </Text>
                {stat.unit && (
                  <Text variant="titleMedium" style={styles.statUnit}>
                    {stat.unit}
                  </Text>
                )}
              </View>
              <Text variant="bodySmall" style={styles.statDescription}>
                {stat.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statContent: {
    alignItems: 'center',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  statValue: {
    color: 'white',
    fontWeight: 'bold',
  },
  statUnit: {
    color: 'white',
    marginLeft: 4,
  },
  statDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
});