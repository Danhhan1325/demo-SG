import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Button, List } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function VolunteerScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.headerTitle}>
          Trở thành Tình nguyện viên
        </Text>
        <Text variant="bodyLarge" style={styles.headerSubtitle}>
          Tham gia cùng Smile Gift để tạo ra những tác động tích cực đến cộng đồng
        </Text>
      </View>

      {/* Benefits */}
      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Bạn sẽ nhận được
        </Text>
        <Card style={styles.card}>
          <Card.Content>
            <List.Item
              title="Cơ hội trải nghiệm thực tế"
              description="Tham gia các hoạt động cộng đồng ý nghĩa"
              left={(props) => <MaterialIcons name="volunteer-activism\" size={24} color="#2D6135" />}
            />
            <List.Item
              title="Phát triển kỹ năng"
              description="Teamwork, tổ chức sự kiện, giao tiếp"
              left={(props) => <MaterialIcons name="trending-up\" size={24} color="#2D6135" />}
            />
            <List.Item
              title="Giấy chứng nhận"
              description="Chứng nhận tham gia các hoạt động"
              left={(props) => <MaterialIcons name="card-membership\" size={24} color="#2D6135" />}
            />
            <List.Item
              title="Gia đình Smile Gift"
              description="Một gia đình đầy tiếng cười và sự tử tế"
              left={(props) => <MaterialIcons name="family-restroom\" size={24} color="#2D6135" />}
            />
          </Card.Content>
        </Card>
      </View>

      {/* Roles */}
      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Các vai trò TNV
        </Text>
        <Card style={styles.card}>
          <Card.Content>
            <List.Item
              title="Ban Văn nghệ"
              description="Ca sĩ, nhạc công, diễn viên"
              left={(props) => <MaterialIcons name="music-note\" size={24} color="#F5A623" />}
            />
            <List.Item
              title="Ban Media"
              description="Nhiếp ảnh, quay phim, thiết kế"
              left={(props) => <MaterialIcons name="camera-alt\" size={24} color="#F5A623" />}
            />
            <List.Item
              title="Ban Tổ chức"
              description="Hỗ trợ tổ chức sự kiện, logistics"
              left={(props) => <MaterialIcons name="event\" size={24} color="#F5A623" />}
            />
            <List.Item
              title="Công quả"
              description="Phát cơm, dọn dẹp, hỗ trợ người già"
              left={(props) => <MaterialIcons name="volunteer-activism\" size={24} color="#F5A623" />}
            />
          </Card.Content>
        </Card>
      </View>

      {/* Requirements */}
      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Yêu cầu
        </Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium" style={styles.requirement}>
              • Có tinh thần trách nhiệm và làm việc nhóm tốt
            </Text>
            <Text variant="bodyMedium" style={styles.requirement}>
              • Có thể tham gia các buổi tập luyện và hoạt động
            </Text>
            <Text variant="bodyMedium" style={styles.requirement}>
              • Yêu thích hoạt động thiện nguyện và nghệ thuật
            </Text>
            <Text variant="bodyMedium" style={styles.requirement}>
              • Không yêu cầu kinh nghiệm, chỉ cần đam mê
            </Text>
          </Card.Content>
        </Card>
      </View>

      {/* CTA */}
      <View style={styles.section}>
        <Button 
          mode="contained" 
          onPress={() => router.push('/volunteer/register')}
          style={styles.registerButton}
          contentStyle={styles.registerButtonContent}
        >
          Đăng ký tình nguyện viên
        </Button>
        
        <Button 
          mode="outlined" 
          onPress={() => {/* Navigate to contact */}}
          style={styles.contactButton}
        >
          Liên hệ tư vấn
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2D6135',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerSubtitle: {
    color: '#E8F0E9',
    lineHeight: 22,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2D6135',
  },
  card: {
    marginBottom: 8,
  },
  requirement: {
    marginBottom: 8,
    lineHeight: 20,
  },
  registerButton: {
    marginBottom: 12,
  },
  registerButtonContent: {
    paddingVertical: 8,
  },
  contactButton: {
    marginBottom: 20,
  },
});