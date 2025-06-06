import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Chip, Searchbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image } from 'expo-image';

const news = [
  {
    id: 1,
    title: 'Smile Gift: Nhóm bạn trẻ biến nghệ thuật thành thiện nguyện',
    excerpt: 'Hành trình đặc biệt của những bạn trẻ dùng tài năng nghệ thuật để giúp đỡ cộng đồng và lan tỏa giá trị tốt đẹp trong xã hội.',
    date: '15/06/2025',
    author: 'Minh Anh',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    category: 'Truyền thông',
  },
  {
    id: 2,
    title: 'Họ là những người trẻ, hát để sẻ chia – diễn để lan tỏa',
    excerpt: 'Câu chuyện cảm động về những tình nguyện viên đầy nhiệt huyết, dùng giọng hát và khả năng diễn xuất để mang lại niềm vui cho người khó khăn.',
    date: '02/06/2025',
    author: 'Thanh Tùng',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    category: 'Báo chí',
  },
  {
    id: 3,
    title: 'Tổng kết chương trình "Đêm nhạc vì trẻ em vùng cao"',
    excerpt: 'Đêm nhạc đã quyên góp được hơn 50 triệu đồng để xây dựng thư viện cho trường học vùng cao Tây Bắc.',
    date: '20/05/2025',
    author: 'Hà Linh',
    image: 'https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg',
    category: 'Hoạt động',
  },
];

export default function NewsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderNewsItem = ({ item }: { item: any }) => (
    <Card style={styles.newsCard} onPress={() => router.push(`/news/${item.id}`)}>
      <Image source={{ uri: item.image }} style={styles.newsImage} />
      <Card.Content>
        <View style={styles.newsHeader}>
          <Chip mode="outlined" compact style={styles.categoryChip}>
            {item.category}
          </Chip>
        </View>
        
        <Text variant="titleMedium" style={styles.newsTitle}>
          {item.title}
        </Text>
        
        <View style={styles.newsInfo}>
          <View style={styles.infoRow}>
            <MaterialIcons name="event" size={14} color="#7B7B7B" />
            <Text variant="bodySmall" style={styles.infoText}>{item.date}</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialIcons name="person" size={14} color="#7B7B7B" />
            <Text variant="bodySmall" style={styles.infoText}>{item.author}</Text>
          </View>
        </View>
        
        <Text variant="bodyMedium" style={styles.newsExcerpt}>
          {item.excerpt}
        </Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Searchbar
          placeholder="Tìm kiếm tin tức..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
        />
      </View>

      <FlatList
        data={filteredNews}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.newsList}
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
    marginBottom: 8,
  },
  newsList: {
    padding: 16,
  },
  newsCard: {
    marginBottom: 16,
  },
  newsImage: {
    height: 180,
    width: '100%',
  },
  newsHeader: {
    marginBottom: 8,
  },
  categoryChip: {
    alignSelf: 'flex-start',
  },
  newsTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    lineHeight: 22,
  },
  newsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 4,
    color: '#7B7B7B',
  },
  newsExcerpt: {
    lineHeight: 20,
    color: '#555555',
  },
});