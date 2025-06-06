import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button, Card, Checkbox } from 'react-native-paper';
import { router } from 'expo-router';

export default function VolunteerRegisterScreen() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
    motivation: '',
    agreeTerms: false,
  });

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    if (!formData.agreeTerms) {
      Alert.alert('Lỗi', 'Vui lòng đồng ý với điều khoản và điều kiện');
      return;
    }

    Alert.alert(
      'Đăng ký thành công!',
      'Cảm ơn bạn đã đăng ký trở thành tình nguyện viên. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.',
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.title}>
          Đăng ký Tình nguyện viên
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Điền thông tin để trở thành một phần của gia đình Smile Gift
        </Text>
      </View>

      <Card style={styles.formCard}>
        <Card.Content>
          <TextInput
            label="Họ và tên *"
            value={formData.fullName}
            onChangeText={(text) => setFormData({ ...formData, fullName: text })}
            mode="outlined"
            style={styles.input}
          />

          <TextInput
            label="Email *"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            label="Số điện thoại *"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
            mode="outlined"
            keyboardType="phone-pad"
            style={styles.input}
          />

          <TextInput
            label="Địa chỉ"
            value={formData.address}
            onChangeText={(text) => setFormData({ ...formData, address: text })}
            mode="outlined"
            style={styles.input}
          />

          <TextInput
            label="Kỹ năng đặc biệt"
            value={formData.skills}
            onChangeText={(text) => setFormData({ ...formData, skills: text })}
            mode="outlined"
            placeholder="VD: Ca hát, nhạc cụ, nhiếp ảnh, thiết kế..."
            style={styles.input}
          />

          <TextInput
            label="Lý do muốn tham gia"
            value={formData.motivation}
            onChangeText={(text) => setFormData({ ...formData, motivation: text })}
            mode="outlined"
            multiline
            numberOfLines={4}
            placeholder="Chia sẻ động lực và mong muốn của bạn..."
            style={styles.input}
          />

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={formData.agreeTerms ? 'checked' : 'unchecked'}
              onPress={() => setFormData({ ...formData, agreeTerms: !formData.agreeTerms })}
            />
            <Text variant="bodyMedium" style={styles.checkboxText}>
              Tôi đồng ý với điều khoản và điều kiện của CLB Thiện Nguyện Smile Gift
            </Text>
          </View>

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.submitButton}
            contentStyle={styles.submitButtonContent}
          >
            Đăng ký tham gia
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.infoTitle}>
            Thông tin liên hệ
          </Text>
          <Text variant="bodyMedium" style={styles.infoText}>
            Nếu có thắc mắc, vui lòng liên hệ:
          </Text>
          <Text variant="bodyMedium" style={styles.contactInfo}>
            📞 Hotline: 0355.749.581
          </Text>
          <Text variant="bodyMedium" style={styles.contactInfo}>
            ✉️ Email: smilegift.vn@gmail.com
          </Text>
        </Card.Content>
      </Card>
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
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#E8F0E9',
    lineHeight: 20,
  },
  formCard: {
    margin: 16,
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  checkboxText: {
    flex: 1,
    marginLeft: 8,
    lineHeight: 20,
  },
  submitButton: {
    borderRadius: 25,
  },
  submitButtonContent: {
    paddingVertical: 8,
  },
  infoCard: {
    margin: 16,
    marginTop: 8,
    marginBottom: 32,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2D6135',
  },
  infoText: {
    marginBottom: 8,
  },
  contactInfo: {
    marginBottom: 4,
    color: '#2D6135',
  },
});