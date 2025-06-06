import React from 'react';
import { ScrollView, View, StyleSheet, Linking } from 'react-native';
import { Text, Card, List, Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function MoreScreen() {
  const handleCall = () => {
    Linking.openURL('tel:0355749581');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:smilegift.vn@gmail.com');
  };

  const handleFacebook = () => {
    Linking.openURL('https://www.facebook.com/smilegift.sg');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* About Section */}
      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
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
          </Card.Content>
        </Card>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Hành động nhanh
        </Text>
        <Card style={styles.card}>
          <List.Item
            title="Quyên góp"
            description="Ủng hộ các hoạt động thiện nguyện"
            left={(props) => <MaterialIcons name="volunteer-activism" size={24} color="#2D6135" />}
            right={(props) => <MaterialIcons name="chevron-right" size={24} color="#7B7B7B" />}
            onPress={() => {/* Navigate to donate */}}
          />
          <Divider />
          <List.Item
            title="Báo cáo tài chính"
            description="Xem báo cáo minh bạch"
            left={(props) => <MaterialIcons name="assessment" size={24} color="#2D6135" />}
            right={(props) => <MaterialIcons name="chevron-right" size={24} color="#7B7B7B" />}
            onPress={() => {/* Navigate to reports */}}
          />
          <Divider />
          <List.Item
            title="Thư viện ảnh"
            description="Xem hình ảnh hoạt động"
            left={(props) => <MaterialIcons name="photo-library" size={24} color="#2D6135" />}
            right={(props) => <MaterialIcons name="chevron-right" size={24} color="#7B7B7B" />}
            onPress={() => {/* Navigate to gallery */}}
          />
        </Card>
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Liên hệ
        </Text>
        <Card style={styles.card}>
          <List.Item
            title="Hotline"
            description="0355.749.581"
            left={(props) => <MaterialIcons name="phone" size={24} color="#2D6135" />}
            onPress={handleCall}
          />
          <Divider />
          <List.Item
            title="Email"
            description="smilegift.vn@gmail.com"
            left={(props) => <MaterialIcons name="email" size={24} color="#2D6135" />}
            onPress={handleEmail}
          />
          <Divider />
          <List.Item
            title="Facebook"
            description="facebook.com/smilegift.sg"
            left={(props) => <MaterialIcons name="facebook" size={24} color="#2D6135" />}
            onPress={handleFacebook}
          />
          <Divider />
          <List.Item
            title="Địa điểm hoạt động"
            description="TP.HCM – An Giang – các tỉnh miền Tây"
            left={(props) => <MaterialIcons name="location-on" size={24} color="#2D6135" />}
          />
        </Card>
      </View>

      {/* Stats */}
      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Thành tựu
        </Text>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text variant="headlineMedium" style={styles.statNumber}>300</Text>
                <Text variant="bodySmall" style={styles.statLabel}>triệu đồng gây quỹ</Text>
              </View>
              <View style={styles.statItem}>
                <Text variant="headlineMedium" style={styles.statNumber}>500+</Text>
                <Text variant="bodySmall" style={styles.statLabel}>người thụ hưởng</Text>
              </View>
              <View style={styles.statItem}>
                <Text variant="headlineMedium" style={styles.statNumber}>30+</Text>
                <Text variant="bodySmall" style={styles.statLabel}>chương trình</Text>
              </View>
              <View style={styles.statItem}>
                <Text variant="headlineMedium" style={styles.statNumber}>100+</Text>
                <Text variant="bodySmall" style={styles.statLabel}>tình nguyện viên</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>

      {/* App Info */}
      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Ứng dụng
        </Text>
        <Card style={styles.card}>
          <List.Item
            title="Phiên bản"
            description="1.0.0"
            left={(props) => <MaterialIcons name="info" size={24} color="#2D6135" />}
          />
          <Divider />
          <List.Item
            title="Điều khoản sử dụng"
            left={(props) => <MaterialIcons name="description" size={24} color="#2D6135" />}
            right={(props) => <MaterialIcons name="chevron-right" size={24} color="#7B7B7B" />}
          />
          <Divider />
          <List.Item
            title="Chính sách bảo mật"
            left={(props) => <MaterialIcons name="privacy-tip" size={24} color="#2D6135" />}
            right={(props) => <MaterialIcons name="chevron-right" size={24} color="#7B7B7B" />}
          />
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
    marginBottom: 12,
    color: '#2D6135',
  },
  card: {
    marginBottom: 8,
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  statNumber: {
    fontWeight: 'bold',
    color: '#2D6135',
  },
  statLabel: {
    textAlign: 'center',
    color: '#7B7B7B',
  },
});