import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Chip } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams, router } from 'expo-router';

const newsData = {
  1: {
    id: 1,
    title: 'Smile Gift: Nhóm bạn trẻ biến nghệ thuật thành thiện nguyện',
    excerpt: 'Hành trình đặc biệt của những bạn trẻ dùng tài năng nghệ thuật để giúp đỡ cộng đồng và lan tỏa giá trị tốt đẹp trong xã hội.',
    date: '15/06/2025',
    author: 'Minh Anh',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    category: 'Truyền thông',
    content: `Hành trình đặc biệt của những bạn trẻ dùng tài năng nghệ thuật để giúp đỡ cộng đồng và lan tỏa giá trị tốt đẹp trong xã hội bắt đầu từ một ý tưởng đơn giản: "Tại sao không kết hợp đam mê nghệ thuật với hoạt động thiện nguyện?"

Từ ý tưởng đó, CLB Thiện Nguyện Smile Gift đã ra đời vào tháng 9/2022. Ban đầu chỉ với vài thành viên, nhưng sau hơn một năm hoạt động, CLB đã phát triển thành một tổ chức với hơn 100 tình nguyện viên tích cực.

**Nghệ thuật vì cộng đồng**

Điểm đặc biệt của Smile Gift là cách họ kết hợp nghệ thuật với hoạt động thiện nguyện. Thay vì chỉ đơn thuần gây quỹ hoặc phát quà, CLB tổ chức các đêm nhạc, kịch nghệ để vừa tạo sân chơi cho các bạn trẻ đam mê nghệ thuật, vừa quyên góp được nguồn quỹ cho các hoạt động từ thiện.

"Chúng tôi tin rằng nghệ thuật có sức mạnh kết nối con người và lan tỏa những giá trị tốt đẹp. Khi một người xem được truyền cảm hứng bởi một tiết mục, họ sẽ sẵn sàng chung tay giúp đỡ những hoàn cảnh khó khăn hơn", anh Nguyễn Văn Hữu - Chủ nhiệm CLB chia sẻ.

**Những con số ấn tượng**

Sau hơn một năm hoạt động, Smile Gift đã đạt được những kết quả đáng ghi nhận:
• Tổ chức hơn 30 chương trình thiện nguyện
• Gây quỹ được hơn 300 triệu đồng
• Hỗ trợ hơn 500 hoàn cảnh khó khăn
• Kết nối hơn 100 tình nguyện viên

**Hướng đến tương lai**

Với slogan "Đừng bao giờ từ chối nếu bạn vẫn còn cái để cho", Smile Gift đặt mục tiêu mở rộng hoạt động và tạo thêm nhiều sân chơi nghệ thuật ý nghĩa cho cộng đồng. CLB cũng đang xây dựng các chương trình đào tạo để giúp các tình nguyện viên phát triển kỹ năng biểu diễn và tổ chức sự kiện.`,
  },
  2: {
    id: 2,
    title: 'Họ là những người trẻ, hát để sẻ chia – diễn để lan tỏa',
    excerpt: 'Câu chuyện cảm động về những tình nguyện viên đầy nhiệt huyết, dùng giọng hát và khả năng diễn xuất để mang lại niềm vui cho người khó khăn.',
    date: '02/06/2025',
    author: 'Thanh Tùng',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    category: 'Báo chí',
    content: `Trong không gian ấm cúng của một quán cà phê nhỏ ở quận 3, những gương mặt trẻ trung đang say sưa thảo luận về kế hoạch cho chương trình thiện nguyện sắp tới. Đó là các thành viên của CLB Thiện Nguyện Smile Gift - một nhóm bạn trẻ đặc biệt, những người đã chọn cách sử dụng tài năng nghệ thuật của mình để lan tỏa yêu thương.

**Khởi đầu từ đam mê**

"Tất cả bắt đầu từ việc chúng tôi nhận ra rằng mình có thể làm được nhiều hơn chỉ là biểu diễn trên sân khấu", Nguyễn Minh Huy, một thành viên của ban văn nghệ chia sẻ. "Khi thấy những hoàn cảnh khó khăn xung quanh, chúng tôi tự hỏi: Tại sao không dùng những gì mình có để giúp đỡ họ?"

Từ câu hỏi đơn giản đó, Smile Gift đã ra đời với sứ mệnh kết nối nghệ thuật và lòng nhân ái. Không chỉ đơn thuần là một CLB thiện nguyện, Smile Gift còn là nơi các bạn trẻ yêu thích ca hát, nhảy múa, diễn xuất có thể thỏa sức sáng tạo và đồng thời đóng góp cho cộng đồng.

**Nghệ thuật chữa lành**

Trần Thị Mỹ Linh, thành viên ban tổ chức, kể về một chương trình đặc biệt mà cô không thể quên: "Đó là buổi biểu diễn tại một viện dưỡng lão. Khi chúng tôi hát những ca khúc xưa, tôi thấy ánh mắt của các cụ sáng lên, có người còn rơi nước mắt. Lúc đó tôi hiểu rằng âm nhạc không chỉ giải trí mà còn có thể chữa lành tâm hồn."

Những câu chuyện như vậy không hiếm trong hành trình của Smile Gift. Mỗi chương trình đều mang lại những cảm xúc khác nhau, nhưng điểm chung là tất cả đều xuất phát từ tình yêu thương chân thành.

**Tương lai rộng mở**

Với hơn 100 thành viên và đã tổ chức hơn 30 chương trình, Smile Gift đang từng bước khẳng định vị thế của mình trong cộng đồng thiện nguyện. Nhưng quan trọng hơn cả, họ đã chứng minh rằng nghệ thuật có thể là cầu nối mạnh mẽ để lan tỏa yêu thương và tạo ra những thay đổi tích cực trong xã hội.`,
  },
  3: {
    id: 3,
    title: 'Tổng kết chương trình "Đêm nhạc vì trẻ em vùng cao"',
    excerpt: 'Đêm nhạc đã quyên góp được hơn 50 triệu đồng để xây dựng thư viện cho trường học vùng cao Tây Bắc.',
    date: '20/05/2025',
    author: 'Hà Linh',
    image: 'https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg',
    category: 'Hoạt động',
    content: `Chương trình "Đêm nhạc vì trẻ em vùng cao" do CLB Thiện Nguyện Smile Gift tổ chức đã khép lại với những kết quả đáng khích lệ. Sự kiện diễn ra vào tối 15/05/2025 tại Nhà văn hóa Thanh Niên đã thu hút hơn 300 khán giả tham dự và quyên góp được tổng cộng 52.5 triệu đồng.

**Một đêm nhạc ý nghĩa**

Chương trình kéo dài 3 tiếng với sự tham gia của 15 nghệ sĩ trẻ và các thành viên ban văn nghệ của CLB. Các tiết mục đa dạng từ ca khúc dân gian, nhạc trẻ đến những màn trình diễn nhạc cụ dân tộc đã mang đến cho khán giả những phút giây thư giãn và cảm động.

Đặc biệt, chương trình còn có sự tham gia của các em học sinh từ trường tiểu học vùng cao Sapa thông qua video call, tạo nên những khoảnh khắc xúc động khi các em hát những ca khúc dân gian bằng tiếng dân tộc.

**Kết quả vượt mong đợi**

Với số tiền quyên góp được 52.5 triệu đồng, CLB Smile Gift sẽ sử dụng để:
• Xây dựng thư viện cho trường tiểu học Tả Van (Sapa): 35 triệu đồng
• Mua sách và đồ dùng học tập: 15 triệu đồng  
• Chi phí vận chuyển và triển khai: 2.5 triệu đồng

**Lời cảm ơn**

Ban tổ chức xin gửi lời cảm ơn chân thành đến tất cả khán giả, nghệ sĩ, nhà tài trợ và các tình nguyện viên đã đồng hành cùng chương trình. Đặc biệt cảm ơn Nhà văn hóa Thanh Niên đã hỗ trợ địa điểm tổ chức miễn phí.

Dự kiến trong tháng 7/2025, đoàn tình nguyện viên của Smile Gift sẽ lên Sapa để trực tiếp trao tặng thư viện và tổ chức các hoạt động văn nghệ cho các em học sinh tại đây.`,
  },
};

export default function NewsDetailScreen() {
  const { id } = useLocalSearchParams();
  const article = newsData[id as keyof typeof newsData];

  if (!article) {
    return (
      <View style={styles.errorContainer}>
        <Text variant="headlineSmall">Không tìm thấy bài viết</Text>
        <Button mode="contained" onPress={() => router.back()}>
          Quay lại
        </Button>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Image */}
      <Image source={{ uri: article.image }} style={styles.heroImage} />
      
      {/* Article Content */}
      <View style={styles.content}>
        <View style={styles.header}>
          <Chip mode="outlined" compact style={styles.categoryChip}>
            {article.category}
          </Chip>
          
          <Text variant="headlineSmall" style={styles.title}>
            {article.title}
          </Text>
          
          <View style={styles.meta}>
            <View style={styles.metaRow}>
              <MaterialIcons name="event" size={16} color="#7B7B7B" />
              <Text variant="bodySmall" style={styles.metaText}>{article.date}</Text>
            </View>
            <View style={styles.metaRow}>
              <MaterialIcons name="person" size={16} color="#7B7B7B" />
              <Text variant="bodySmall" style={styles.metaText}>{article.author}</Text>
            </View>
          </View>
          
          <Text variant="bodyLarge" style={styles.excerpt}>
            {article.excerpt}
          </Text>
        </View>

        <Card style={styles.contentCard}>
          <Card.Content>
            <Text variant="bodyMedium" style={styles.articleContent}>
              {article.content}
            </Text>
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
  categoryChip: {
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 28,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: '#7B7B7B',
  },
  excerpt: {
    fontStyle: 'italic',
    color: '#555555',
    lineHeight: 24,
  },
  contentCard: {
    marginBottom: 20,
  },
  articleContent: {
    lineHeight: 24,
  },
});