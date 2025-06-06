import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';

const featuredPrograms = [
  {
    id: 1,
    title: 'Đêm nhạc "Yêu Là Đủ"',
    date: '28/07/2025',
    location: 'Nhà văn hóa Q3',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    category: 'Gây quỹ',
  },
  {
    id: 2,
    title: 'Công quả tại Chùa Phổ Quang',
    date: '10/08/2025',
    location: 'Tân Bình',
    image: 'https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg',
    category: 'Công quả',
  },
];

export function FeaturedPrograms() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.title}>
          Chương trình sắp diễn ra
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Tham gia cùng Smile Gift trong các hoạt động thiện nguyện sắp tới
        </Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.programsList}
      >
        {featuredPrograms.map((program) => (
          <Card 
            key={program.id} 
            style={styles.programCard}
            onPress={() => router.push(`/programs/${program.id}`)}
          >
            <Image source={{ uri: program.image }} style={styles.programImage} />
            <Card.Content style={styles.cardContent}>
              <Chip mode="outlined" compact style={styles.categoryChip}>
                {program.category}
              </Chip>
              
              <Text variant="titleMedium" style={styles.programTitle}>
                {program.title}
              </Text>
              
              <View style={styles.programInfo}>
                <View style={styles.infoRow}>
                  <MaterialIcons name="event" size={16} color="#7B7B7B" />
                  <Text variant="bodySmall" style={styles.infoText}>
                    {program.date}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <MaterialIcons name="location-on" size={16} color="#7B7B7B" />
                  <Text variant="bodySmall" style={styles.infoText}>
                    {program.location}
                  </Text>
                </View>
              </View>
              
              <Button 
                mode="contained" 
                compact 
                style={styles.registerButton}
                onPress={() => router.push(`/programs/${program.id}`)}
              >
                Xem chi tiết
              </Button>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      
      <View style={styles.footer}>
        <Button 
          mode="outlined" 
          onPress={() => router.push('/programs')}
          style={styles.viewAllButton}
        >
          Xem tất cả chương trình
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    color: '#2D6135',
    marginBottom: 8,
  },
  subtitle: {
    color: '#7B7B7B',
    lineHeight: 20,
  },
  programsList: {
    paddingRight: 16,
  },
  programCard: {
    width: 280,
    marginRight: 16,
  },
  programImage: {
    height: 160,
    width: '100%',
  },
  cardContent: {
    padding: 16,
  },
  categoryChip: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  programTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    lineHeight: 22,
  },
  programInfo: {
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoText: {
    marginLeft: 4,
    color: '#7B7B7B',
  },
  registerButton: {
    marginTop: 4,
  },
  footer: {
    marginTop: 16,
    alignItems: 'center',
  },
  viewAllButton: {
    paddingHorizontal: 16,
  },
});