import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { HeroSection } from '../../src/components/HeroSection';
import { StatsSection } from '../../src/components/StatsSection';
import { FeaturedPrograms } from '../../src/components/FeaturedPrograms';
import { QuickActions } from '../../src/components/QuickActions';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection />
      <StatsSection />
      <FeaturedPrograms />
      <QuickActions />
      
      {/* About Preview */}
      <View style={styles.section}>
        <Text variant="headlineSmall" style={styles.sectionTitle}>
          Về Smile Gift
        </Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium" style={styles.aboutText}>
              CLB Thiện Nguyện Smile Gift ra đời từ tháng 9/2022 với sứ mệnh kết nối nghệ thuật và lòng nhân ái.
            </Text>
            <Text variant="bodyMedium" style={[styles.aboutText, styles.quote]}>
              "Đừng bao giờ từ chối nếu bạn vẫn còn cái để cho!"
            </Text>
            <Button 
              mode="outlined" 
              onPress={() => router.push('/more')}
              style={styles.button}
            >
              Tìm hiểu thêm
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2D6135',
  },
  card: {
    marginBottom: 16,
  },
  aboutText: {
    marginBottom: 12,
    lineHeight: 22,
  },
  quote: {
    fontStyle: 'italic',
    color: '#2D6135',
    fontWeight: '600',
  },
  button: {
    marginTop: 8,
  },
});