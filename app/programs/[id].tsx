import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams, router } from 'expo-router';

const programsData = {
  1: {
    id: 1,
    title: 'Đêm nhạc "Yêu Là Đủ" gây quỹ phát cơm',
    date: '28/07/2025',
    location: 'Nhà văn hóa Q3',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    description: 'Chương trình âm nhạc đặc biệt với sự tham gia của các nghệ sĩ trẻ, gây quỹ cho hoạt động phát cơm từ thiện.',
    category: 'Gây quỹ',
    status: 'upcoming',
    longDescription: `Đêm nhạc "Yêu Là Đủ" là một chương trình âm nhạc đặc biệt được tổ chức bởi CLB Thiện Nguyện Smile Gift nhằm gây quỹ cho hoạt động phát cơm từ thiện hàng tuần.

Chương trình sẽ có sự tham gia của các nghệ sĩ trẻ tài năng, các thành viên ban văn nghệ của CLB và những người bạn yêu thích âm nhạc. Toàn bộ số tiền thu được từ vé và quyên góp sẽ được sử dụng để mua thực phẩm, nấu cơm và phát miễn phí cho người vô gia cư, người lao động nghèo tại khu vực TP.HCM.

Đây không chỉ là một đêm nhạc giải trí mà còn là cơ hội để cộng đồng cùng nhau lan tỏa yêu thương và sẻ chia với những hoàn cảnh khó khăn.`,
    requirements: [
      'Mua vé tham dự hoặc đóng góp tự nguyện',
      'Tuân thủ quy định về an toàn và trật tự',
      'Có tinh thần chia sẻ và lan tỏa yêu thương',
    ],
    schedule: [
      { time: '18:30', activity: 'Đón khách và check-in' },
      { time: '19:00', activity: 'Khai mạc chương trình' },
      { time: '19:15', activity: 'Phần biểu diễn âm nhạc' },
      { time: '20:30', activity: 'Gây quỹ và tương tác' },
      { time: '21:00', activity: 'Bế mạc chương trình' },
    ],
  },
  2: {
    id: 2,
    title: 'Công quả tại Chùa Phổ Quang',
    date: '10/08/2025',
    location: 'Tân Bình',
    image: 'https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg',
    description: 'Hoạt động công quả tại chùa, hỗ trợ công tác chuẩn bị và phân phát thực phẩm cho người nghèo.',
    category: 'Công quả',
    status: 'upcoming',
    longDescription: `Hoạt động công quả tại Chùa Phổ Quang là một trong những chương trình thường xuyên của CLB Thiện Nguyện Smile Gift, được tổ chức định kỳ hàng tháng.

Các tình nguyện viên sẽ tham gia hỗ trợ Ban Từ thiện của chùa trong việc chuẩn bị thực phẩm, nấu cơm và phân phát cho người nghèo, người vô gia cư, người già neo đơn trong khu vực.

Đây là cơ hội tuyệt vời để các bạn trẻ học hỏi về tinh thần tương thân tương ái, rèn luyện tính kiên nhẫn và cảm nhận được niềm vui khi được giúp đỡ người khác.`,
    requirements: [
      'Có tinh thần tình nguyện và sẵn sàng làm việc',
      'Tuân thủ quy định của chùa',
      'Trang phục lịch sự, phù hợp',
      'Có thể tham gia từ 6:00 sáng đến 11:00 trưa',
    ],
    schedule: [
      { time: '06:00', activity: 'Tập trung tại chùa' },
      { time: '06:30', activity: 'Chuẩn bị nguyên liệu' },
      { time: '07:00', activity: 'Nấu cơm và chuẩn bị thức ăn' },
      { time: '09:00', activity: 'Phân phát thực phẩm' },
      { time: '10:30', activity: 'Dọn dẹp và tổng kết' },
    ],
  },
};

export default function ProgramDetailScreen() {
  const { id } = useLocalSearchParams();
  const program = programsData[id as keyof typeof programsData];

  if (!program) {
    return (
      <View style={styles.errorContainer}>
        <Text variant="headlineSmall">Không tìm thấy chương trình</Text>
        <Button mode="contained" onPress={() => router.back()}>
          Quay lại
        </Button>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Image */}
      <Image source={{ uri: program.image }} style={styles.heroImage} />
      
      {/* Program Info */}
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.chips}>
            <Chip mode="outlined" compact>{program.category}</Chip>
            <Chip mode="flat" compact style={styles.statusChip} textStyle={{ color: 'white' }}>
              Sắp diễn ra
            </Chip>
          </View>
          
          <Text variant="headlineSmall" style={styles.title}>
            {program.title}
          </Text>
          
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <MaterialIcons name="event" size={20} color="#2D6135" />
              <Text variant="bodyLarge" style={styles.infoText}>{program.date}</Text>
            </View>
            <View style={styles.infoRow}>
              <MaterialIcons name="location-on" size={20} color="#2D6135" />
              <Text variant="bodyLarge" style={styles.infoText}>{program.location}</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <Card style={styles.section}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Mô tả chương trình
            </Text>
            <Text variant="bodyMedium" style={styles.description}>
              {program.longDescription}
            </Text>
          </Card.Content>
        </Card>

        {/* Requirements */}
        <Card style={styles.section}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Yêu cầu tham gia
            </Text>
            {program.requirements.map((req, index) => (
              <View key={index} style={styles.requirementItem}>
                <Text variant="bodyMedium">• {req}</Text>
              </View>
            ))}
          </Card.Content>
        </Card>

        {/* Schedule */}
        <Card style={styles.section}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Lịch trình
            </Text>
            {program.schedule.map((item, index) => (
              <View key={index} style={styles.scheduleItem}>
                <Text variant="labelLarge" style={styles.scheduleTime}>
                  {item.time}
                </Text>
                <Text variant="bodyMedium" style={styles.scheduleActivity}>
                  {item.activity}
                </Text>
              </View>
            ))}
          </Card.Content>
        </Card>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <Button 
            mode="contained" 
            style={styles.registerButton}
            contentStyle={styles.buttonContent}
            onPress={() => router.push('/volunteer/register')}
          >
            Đăng ký tham gia
          </Button>
          
          <Button 
            mode="outlined" 
            style={styles.shareButton}
            contentStyle={styles.buttonContent}
          >
            Chia sẻ
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroImage: {
    height: 250,
    width: '100%',
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  chips: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  statusChip: {
    backgroundColor: '#4CAF50',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 28,
  },
  infoSection: {
    gap: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    color: '#2D6135',
    fontWeight: '500',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2D6135',
  },
  description: {
    lineHeight: 22,
  },
  requirementItem: {
    marginBottom: 8,
  },
  scheduleItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  scheduleTime: {
    width: 60,
    color: '#2D6135',
    fontWeight: 'bold',
  },
  scheduleActivity: {
    flex: 1,
    marginLeft: 12,
  },
  actions: {
    gap: 12,
    marginTop: 8,
    marginBottom: 20,
  },
  registerButton: {
    borderRadius: 25,
  },
  shareButton: {
    borderRadius: 25,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});