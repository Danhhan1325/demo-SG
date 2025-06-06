import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Button, Chip, Searchbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image } from 'expo-image';

const programs = [
  {
    id: 1,
    title: 'Đêm nhạc "Yêu Là Đủ" gây quỹ phát cơm',
    date: '28/07/2025',
    location: 'Nhà văn hóa Q3',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    description: 'Chương trình âm nhạc đặc biệt với sự tham gia của các nghệ sĩ trẻ, gây quỹ cho hoạt động phát cơm từ thiện.',
    category: 'Gây quỹ',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Công quả tại Chùa Phổ Quang',
    date: '10/08/2025',
    location: 'Tân Bình',
    image: 'https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg',
    description: 'Hoạt động công quả tại chùa, hỗ trợ công tác chuẩn bị và phân phát thực phẩm cho người nghèo.',
    category: 'Công quả',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Chương trình mổ mắt từ thiện',
    date: '25/08/2025',
    location: 'Bệnh viện Mắt Tp.HCM',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
    description: 'Hỗ trợ chi phí phẫu thuật mắt cho các bệnh nhân nghèo tại khu vực nông thôn.',
    category: 'Y tế',
    status: 'upcoming',
  },
];

export default function ProgramsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Gây quỹ', 'Công quả', 'Y tế'];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderProgram = ({ item }: { item: any }) => (
    <Card style={styles.programCard} onPress={() => router.push(`/programs/${item.id}`)}>
      <Image source={{ uri: item.image }} style={styles.programImage} />
      <Card.Content>
        <View style={styles.programHeader}>
          <Chip mode="outlined" compact style={styles.categoryChip}>
            {item.category}
          </Chip>
          <Chip 
            mode="flat" 
            compact 
            style={[styles.statusChip, { backgroundColor: '#4CAF50' }]}
            textStyle={{ color: 'white' }}
          >
            Sắp diễn ra
          </Chip>
        </View>
        
        <Text variant="titleMedium" style={styles.programTitle}>
          {item.title}
        </Text>
        
        <View style={styles.programInfo}>
          <View style={styles.infoRow}>
            <MaterialIcons name="event" size={16} color="#7B7B7B" />
            <Text variant="bodySmall" style={styles.infoText}>{item.date}</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialIcons name="location-on" size={16} color="#7B7B7B" />
            <Text variant="bodySmall" style={styles.infoText}>{item.location}</Text>
          </View>
        </View>
        
        <Text variant="bodyMedium" style={styles.programDescription}>
          {item.description}
        </Text>
        
        <View style={styles.programActions}>
          <Button mode="outlined" compact style={styles.actionButton}>
            Chi tiết
          </Button>
          <Button mode="contained" compact style={styles.actionButton}>
            Đăng ký
          </Button>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Searchbar
          placeholder="Tìm kiếm chương trình..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
        />
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoryFilter}
        >
          {categories.map((category) => (
            <Chip
              key={category}
              mode={selectedCategory === category ? 'flat' : 'outlined'}
              selected={selectedCategory === category}
              onPress={() => setSelectedCategory(category)}
              style={styles.categoryChip}
            >
              {category === 'all' ? 'Tất cả' : category}
            </Chip>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredPrograms}
        renderItem={renderProgram}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.programsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchSection: {
    padding: 16,
    backgroundColor: 'white',
  },
  searchbar: {
    marginBottom: 12,
  },
  categoryFilter: {
    flexDirection: 'row',
  },
  categoryChip: {
    marginRight: 8,
  },
  programsList: {
    padding: 16,
  },
  programCard: {
    marginBottom: 16,
  },
  programImage: {
    height: 200,
    width: '100%',
  },
  programHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusChip: {
    backgroundColor: '#4CAF50',
  },
  programTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  programInfo: {
    marginBottom: 8,
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
  programDescription: {
    marginBottom: 12,
    lineHeight: 20,
  },
  programActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
});