import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export function HeroSection() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg' }}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['rgba(45, 97, 53, 0.8)', 'rgba(45, 97, 53, 0.6)']}
        style={styles.overlay}
      >
        <View style={styles.content}>
          <View style={styles.badge}>
            <Text variant="labelMedium" style={styles.badgeText}>
              CLB Thiện Nguyện Smile Gift
            </Text>
          </View>
          
          <Text variant="headlineLarge" style={styles.title}>
            Không phải ai cũng có sân khấu để tỏa sáng
          </Text>
          
          <Text variant="bodyLarge" style={styles.subtitle}>
            Smile Gift tạo ra sân khấu cho những trái tim biết cho đi. Cùng nhau lan tỏa yêu thương và chia sẻ tài năng.
          </Text>
          
          <View style={styles.actions}>
            <Button 
              mode="contained" 
              onPress={() => router.push('/volunteer')}
              style={styles.primaryButton}
              contentStyle={styles.buttonContent}
              buttonColor="#F5A623"
            >
              <MaterialIcons name="people" size={18} color="white" />
              <Text style={styles.buttonText}> Đăng ký TNV</Text>
            </Button>
            
            <Button 
              mode="outlined" 
              onPress={() => {/* Navigate to donate */}}
              style={styles.secondaryButton}
              contentStyle={styles.buttonContent}
              textColor="white"
            >
              <MaterialIcons name="volunteer-activism" size={18} color="white" />
              <Text style={styles.buttonText}> Ủng hộ</Text>
            </Button>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    maxWidth: width - 40,
  },
  badge: {
    backgroundColor: 'rgba(45, 97, 53, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  badgeText: {
    color: 'white',
    fontWeight: '600',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryButton: {
    borderRadius: 25,
  },
  secondaryButton: {
    borderRadius: 25,
    borderColor: 'white',
  },
  buttonContent: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});