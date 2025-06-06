import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const actions = [
  {
    title: 'Đăng ký TNV',
    description: 'Trở thành tình nguyện viên',
    icon: 'people',
    color: '#2D6135',
    onPress: () => router.push('/volunteer'),
  },
  {
    title: 'Quyên góp',
    description: 'Ủng hộ hoạt động',
    icon: 'volunteer-activism',
    color: '#F5A623',
    onPress: () => {/* Navigate to donate */},
  },
  {
    title: 'Tin tức',
    description: 'Cập nhật mới nhất',
    icon: 'article',
    color: '#E63946',
    onPress: () => router.push('/news'),
  },
  {
    title: 'Liên hệ',
    description: 'Kết nối với chúng tôi',
    icon: 'contact-phone',
    color: '#2D6135',
    onPress: () => router.push('/more'),
  },
];

export function QuickActions() {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Hành động nhanh
      </Text>
      
      <View style={styles.actionsGrid}>
        {actions.map((action, index) => (
          <Card 
            key={index} 
            style={styles.actionCard}
            onPress={action.onPress}
          >
            <Card.Content style={styles.cardContent}>
              <View style={[styles.iconContainer, { backgroundColor: `${action.color}15` }]}>
                <MaterialIcons 
                  name={action.icon as any} 
                  size={24} 
                  color={action.color} 
                />
              </View>
              <Text variant="titleSmall" style={styles.actionTitle}>
                {action.title}
              </Text>
              <Text variant="bodySmall" style={styles.actionDescription}>
                {action.description}
              </Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    color: '#2D6135',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    marginBottom: 12,
  },
  cardContent: {
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  actionDescription: {
    color: '#7B7B7B',
    textAlign: 'center',
  },
});