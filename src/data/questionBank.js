// Ngân hàng 50 câu hỏi - Sinh Tồn Thời Sinh Viên
// Nguyên tắc: Độ dài đáp án đúng HOÀN TOÀN NGẪU NHIÊN
// - ~1/3 câu: đáp án đúng NGẮN
// - ~1/3 câu: đáp án đúng TRUNG BÌNH
// - ~1/3 câu: đáp án đúng DÀI
// Vị trí đáp án đúng cũng xáo trộn (A, B, C)

export const questionBank = {
  // ==================== POOL DỄ (20 câu) ====================
  easy: [
    // 1 — Cái riêng & Cái chung — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Chọn môn tự chọn',
      description: 'Nhóm bạn rủ đăng ký cùng 1 môn tự chọn "cho vui". Nhưng môn đó không liên quan chuyên ngành bạn.',
      options: [
        { text: 'Đăng ký theo nhóm cho có bạn.', effect: { tuDuyToanDien: -15 }, tone: 'error', msg: 'Hy sinh Cái riêng (định hướng nghề) để chạy theo Cái chung (đám đông). Lợi ích ngắn hạn che mờ thiệt hại dài hạn.' },
        { text: 'Chọn môn phù hợp chuyên ngành — mỗi người có một lộ trình riêng, và quyết định học tập nên dựa trên mục tiêu cá nhân chứ không phải áp lực bạn bè.', effect: { tuDuyToanDien: 20 }, tone: 'success', msg: 'Cái riêng (mục tiêu cá nhân) cần được tôn trọng trong Cái chung. Bạn bè có thể vui ở nhiều chỗ khác.' },
        { text: 'Bỏ qua, kỳ sau tính.', effect: { tuDuyToanDien: -10 }, tone: 'warn', msg: 'Trốn tránh quyết định không phải là giải pháp biện chứng.' },
      ]
    },
    // 2 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Tiết kiệm hay sĩ diện',
      description: 'Bạn bè hay đi cafe sang chảnh 80k/ly. Bạn chỉ đủ tiền uống trà đá 5k.',
      options: [
        { text: 'Gọi trà đá, tập trung vào cuộc trò chuyện.', effect: { nhinBanChat: 20 }, tone: 'success', msg: 'Bản chất (tình bạn, giao lưu) không nằm ở ly nước. Hiện tượng (đồ uống đắt) không quyết định giá trị con người.' },
        { text: 'Vay tiền gọi ly đắt nhất — ấn tượng đầu tiên rất quan trọng, và bạn không muốn bị nhìn là "kẻ nghèo" trong nhóm bạn mới quen, sĩ diện đôi khi cũng cần thiết.', effect: { nhinBanChat: -20 }, tone: 'error', msg: 'Phông bạt! Đánh đổi Bản chất (tài chính thực) lấy Hiện tượng (sĩ diện hão).' },
        { text: 'Từ chối đi, ở nhà tự học.', effect: { nhinBanChat: -10 }, tone: 'warn', msg: 'Tự cô lập vì sợ Hiện tượng — mất luôn Bản chất (mối quan hệ).' },
      ]
    },
    // 3 — Nguyên nhân & Kết quả — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Xe bus trễ giờ học',
      description: 'Bạn đi xe bus kẹt xe 40 phút, bị trễ tiết.',
      options: [
        { text: 'Kẹt xe là chuyện bình thường ở thành phố lớn, không ai có thể kiểm soát giao thông — đây rõ ràng là lỗi khách quan và bạn hoàn toàn vô tội.', effect: { phanTichNguyenNhan: -20 }, tone: 'error', msg: 'Kẹt xe là Ngẫu nhiên, nhưng không đi sớm hơn là Nguyên nhân chủ quan mà bạn đang trốn tránh.' },
        { text: 'Lần sau đi sớm hơn 30 phút.', effect: { phanTichNguyenNhan: 20 }, tone: 'success', msg: 'Nhận ra Nguyên nhân chủ quan (không dự phòng) thay vì đổ lỗi Nguyên nhân khách quan.' },
        { text: 'Chuyển sang đi Grab.', effect: { phanTichNguyenNhan: -5 }, tone: 'warn', msg: 'Giải quyết Hiện tượng (phương tiện) mà không nhận ra Nguyên nhân gốc (quản lý thời gian).' },
      ]
    },
    // 4 — Tất nhiên & Ngẫu nhiên — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Phòng trọ bị ngập',
      description: 'Mưa lớn, phòng trọ tầng trệt bị ngập. Laptop và sách vở ướt hết.',
      options: [
        { text: 'Trách ông trời bất công.', effect: { nhanThucQuyLuat: -20 }, tone: 'error', msg: 'Mưa là Ngẫu nhiên, nhưng thuê phòng tầng trệt vùng ngập là bỏ qua quy luật Tất nhiên.' },
        { text: 'Kiện chủ trọ vì không xây tường ngăn nước, yêu cầu bồi thường toàn bộ thiệt hại.', effect: { nhanThucQuyLuat: -15 }, tone: 'warn', msg: 'Đổ hết trách nhiệm lên người khác mà quên phần trách nhiệm của mình khi không kiểm tra kỹ trước thuê.' },
        { text: 'Rút kinh nghiệm: lần sau để đồ quan trọng lên cao, mua bảo hiểm tài sản — vì Ngẫu nhiên (thiên tai) luôn có thể xảy ra bất cứ lúc nào, cần chuẩn bị trước.', effect: { nhanThucQuyLuat: 25 }, tone: 'success', msg: 'Hiểu rằng Ngẫu nhiên (mưa) luôn tồn tại, nên cần tạo lớp phòng vệ Tất nhiên (backup, dự phòng).' },
      ]
    },
    // 5 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'CV xịn hay năng lực thật?',
      description: 'Một bạn đăng LinkedIn đầy chứng chỉ, giải thưởng và portfolio đẹp. Nhưng khi phỏng vấn thực hành lại không làm được bài cơ bản.',

      options: [
        {
          text: 'Học cách làm CV thật đẹp trước — nhà tuyển dụng nhìn hồ sơ ấn tượng mới có cơ hội.',
          effect: { nhinBanChat: -25 },
          tone: 'error',
          msg: 'Hiện tượng (CV đẹp) không thay thế được Bản chất (năng lực thực). Vẻ ngoài mở cửa, nhưng năng lực mới giữ được vị trí.'
        },

        {
          text: 'Đầu tư kỹ năng thật trước, rồi mới thể hiện bằng CV và portfolio.',
          effect: { nhinBanChat: 25 },
          tone: 'success',
          msg: 'Nhìn vào Bản chất! Năng lực thực quyết định giá trị lâu dài, còn hồ sơ chỉ là sự biểu hiện ra bên ngoài.'
        },

        {
          text: 'Xem thêm đánh giá từ người từng làm việc với bạn đó.',
          effect: { nhinBanChat: 5 },
          tone: 'warn',
          msg: 'Không sai, vì cần thêm thông tin để phân biệt Bản chất và Hiện tượng.'
        }
      ]
    },
    // 6 — Khả năng & Hiện thực — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Cơ hội học trao đổi nước ngoài',
      description: 'Trường mở chương trình trao đổi sinh viên ở nước ngoài. Bạn rất muốn đi nhưng tiếng Anh còn yếu.',

      options: [
        {
          text: 'Đăng ký ngay — cứ liều thử, biết đâu may mắn sẽ được chọn.',
          effect: { khaNangPhatTrien: -20 },
          tone: 'error',
          msg:
            'Mong muốn chưa đủ biến Khả năng thành Hiện thực. Thiếu điều kiện cần sẽ làm cơ hội khó thành công.'
        },

        {
          text: 'Bỏ luôn ý định vì tiếng Anh chưa tốt.',
          effect: { khaNangPhatTrien: -15 },
          tone: 'error',
          msg:
            'Từ bỏ quá sớm khiến Khả năng không bao giờ có cơ hội trở thành Hiện thực.'
        },

        {
          text: 'Lập kế hoạch học tiếng Anh và chuẩn bị hồ sơ từ sớm để đủ điều kiện ứng tuyển.',
          effect: { khaNangPhatTrien: 20 },
          tone: 'success',
          msg:
            'Khả năng chỉ trở thành Hiện thực khi có điều kiện phù hợp và sự chuẩn bị chủ động.'
        }
      ]
    },
    // 7 — Cái riêng & Cái chung — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Làm việc nhóm trước hạn nộp',
      description: 'Chỉ còn 1 ngày trước deadline, bạn muốn làm theo ý tưởng riêng vì nghĩ sẽ đạt điểm cao hơn, nhưng cả nhóm đã thống nhất phương án khác.',
      options: [
        {
          text: 'Làm theo ý mình rồi gửi nhóm sau, miễn kết quả tốt là được.',
          effect: { tuDuyToanDien: -15 },
          tone: 'error',
          msg: 'Ưu tiên Cái riêng (ý tưởng cá nhân) nhưng bỏ qua Cái chung (thống nhất và trách nhiệm của nhóm).'
        },
        {
          text: 'Trao đổi lại với nhóm, đưa lập luận để thuyết phục hoặc cùng điều chỉnh phương án hợp lý hơn.',
          effect: { tuDuyToanDien: 20 },
          tone: 'success',
          msg: 'Đúng! Tôn trọng ý kiến cá nhân nhưng vẫn đặt trong lợi ích chung của tập thể.'
        },
        {
          text: 'Bỏ qua ý tưởng của mình để tránh tranh luận, làm theo nhóm hoàn toàn.',
          effect: { tuDuyToanDien: 5 },
          tone: 'warn',
          msg: 'Tôn trọng Cái chung nhưng có thể làm mất đi giá trị tích cực từ Cái riêng.'
        },
      ]
    },
    // 8 — Nguyên nhân & Kết quả — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Liên tục đi học muộn',
      description: 'Gần đây bạn thường xuyên đến lớp trễ và bị trừ điểm chuyên cần.',
      options: [
        {
          text: 'Xin giảng viên thông cảm vì chỉ đến muộn vài phút.',
          effect: { phanTichNguyenNhan: -15 },
          tone: 'error',
          msg: 'Chỉ xử lý Kết quả (bị trừ điểm) mà chưa xem Nguyên nhân khiến việc đi muộn lặp lại.'
        },
        {
          text: 'Xem lại lịch sinh hoạt, thời gian di chuyển hoặc thói quen ngủ muộn để điều chỉnh.',
          effect: { phanTichNguyenNhan: 20 },
          tone: 'success',
          msg: 'Đúng! Muốn thay đổi Kết quả phải tác động vào Nguyên nhân gốc.'
        },
        {
          text: 'Chấp nhận bị trừ điểm chuyên cần và cố gắng bù bằng điểm thi.',
          effect: { phanTichNguyenNhan: -10 },
          tone: 'warn',
          msg: 'Thích nghi với Kết quả nhưng chưa giải quyết Nguyên nhân tạo ra vấn đề.'
        },
      ]
    },
    // 9 — Nội dung & Hình thức — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'WiFi ký túc xá lag',
      description: 'WiFi KTX chậm kinh khủng. Không thể học online.',
      options: [
        { text: 'Bỏ học online, chờ WiFi tốt hơn.', effect: { nhinBanChat: -20 }, tone: 'error', msg: 'Ngồi chờ Ngẫu nhiên (WiFi tự khỏi) thay vì chủ động tạo Tất nhiên cho mình.' },
        { text: 'Ra quán cafe có WiFi mạnh để học — giải quyết Bản chất vấn đề trước mắt thay vì than phiền.', effect: { nhinBanChat: 15 }, tone: 'success', msg: 'Nội dung (việc học) cần được ưu tiên trước Hình thức (địa điểm). Chủ động và thực tế!' },
        { text: 'Viết đơn kiến nghị lên Ban quản lý KTX kèm đơn ký tên 200 sinh viên.', effect: { nhinBanChat: -5 }, tone: 'warn', msg: 'Tốt về lâu dài nhưng trước mắt bạn vẫn không học được. Hình thức (đơn kiến nghị) chưa cứu được Nội dung (bài vở).' },
      ]
    },
    // 10 — Tất nhiên & Ngẫu nhiên — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Ôn thi sát ngày',
      description: 'Còn 1 ngày nữa thi cuối kỳ nhưng bạn mới bắt đầu học vì hy vọng đề sẽ trúng phần dễ.',
      options: [
        {
          text: 'Cứ học đại vài chương hay ra đề, biết đâu may mắn trúng đúng phần ôn.',
          effect: { nhanThucQuyLuat: -20 },
          tone: 'error',
          msg: 'Phụ thuộc vào Ngẫu nhiên (may mắn trúng đề) thay vì tạo ra Tất nhiên (kiến thức và sự chuẩn bị).'
        },
        {
          text: 'Chấp nhận điểm thấp vì thời gian không đủ nữa.',
          effect: { nhanThucQuyLuat: -5 },
          tone: 'warn',
          msg: 'Nhìn thấy khó khăn nhưng từ bỏ việc tác động vào những yếu tố còn có thể cải thiện.'
        },
        {
          text: 'Lập kế hoạch ôn tập phần trọng tâm, ưu tiên nội dung chính và tận dụng thời gian còn lại để tăng xác suất làm bài tốt.',
          effect: { nhanThucQuyLuat: 25 },
          tone: 'success',
          msg: 'Đúng! Chủ động tạo điều kiện Tất nhiên (chuẩn bị, hệ thống kiến thức) thay vì đặt cược vào Ngẫu nhiên.'
        },
      ]
    },
    // 11 — Nội dung & Hình thức — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Làm slide thuyết trình nhóm',
      description: 'Nhóm bạn chuẩn bị thuyết trình. Một thành viên muốn dành phần lớn thời gian để làm slide đẹp thay vì đầu tư nghiên cứu nội dung.',
      options: [
        {
          text: 'Ưu tiên thiết kế thật bắt mắt vì trình bày đẹp sẽ gây ấn tượng với giảng viên.',
          effect: { khaNangPhatTrien: -20 },
          tone: 'error',
          msg: 'Chú trọng Hình thức (slide đẹp) nhưng xem nhẹ Nội dung (kiến thức, lập luận).'
        },
        {
          text: 'Đầu tư xây dựng nội dung chắc chắn trước, sau đó trình bày rõ ràng và dễ hiểu.',
          effect: { khaNangPhatTrien: 20 },
          tone: 'success',
          msg: 'Đúng! Nội dung giữ vai trò quyết định, Hình thức nên hỗ trợ làm nổi bật Nội dung.'
        },
        {
          text: 'Chia đều thời gian cho cả thiết kế và nội dung mà không xác định ưu tiên.',
          effect: { khaNangPhatTrien: -5 },
          tone: 'warn',
          msg: 'Cân bằng là tốt nhưng cần xác định Nội dung là yếu tố quyết định trước.'
        },
      ]
    },
    // 12 — Khả năng & Hiện thực — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Được mời đi phượt',
      description: 'Nhóm bạn rủ phượt Đà Lạt cuối tuần. Thứ Hai thi giữa kỳ.',
      options: [
        { text: 'Đi nhưng lên kế hoạch chi tiết: sáng ôn 2 tiếng, chiều đi chơi, tối ôn tiếp — cân bằng học và chơi vì cuộc sống cần hài hòa, và du lịch giúp thư giãn đầu óc thi tốt hơn.', effect: { khaNangPhatTrien: -15 }, tone: 'error', msg: 'Kế hoạch đẹp trên giấy nhưng Hiện thực phượt sẽ phá tan mọi lịch trình. Bạn đang tự lừa mình.' },
        { text: 'Từ chối. Thi xong đi.', effect: { khaNangPhatTrien: 20 }, tone: 'success', msg: 'Hiện thực (kỳ thi) được ưu tiên trước Khả năng (đi chơi lúc khác vẫn được).' },
        { text: 'Đi. Ôn trên xe cũng được mà.', effect: { khaNangPhatTrien: -20 }, tone: 'error', msg: 'Ôn trên xe khó có khả năng, vì các yếu tố ảnh hưởng như Say xe + mệt + không WiFi khó có chữ vào đầu.' },
      ]
    },
    // 13 — Nguyên nhân & Kết quả — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Điểm môn giảm mạnh',
      description: 'Kết quả giữa kỳ thấp hơn mong đợi dù bạn nghĩ mình đã học khá nhiều.',
      options: [
        {
          text: 'Cho rằng đề thi quá khó nên điểm thấp là điều không tránh khỏi.',
          effect: { phanTichNguyenNhan: -20 },
          tone: 'error',
          msg: 'Chỉ nhìn vào yếu tố bên ngoài mà chưa phân tích Nguyên nhân thực sự từ cách học hoặc quá trình ôn tập.'
        },
        {
          text: 'Xem lại phương pháp học, nội dung ôn tập và những phần làm sai để tìm nguyên nhân.',
          effect: { phanTichNguyenNhan: 20 },
          tone: 'success',
          msg: 'Đúng! Muốn thay đổi Kết quả cần xác định và tác động vào Nguyên nhân.'
        },
        {
          text: 'Chấp nhận điểm số hiện tại rồi cố gắng kéo điểm bằng bài cuối kỳ.',
          effect: { phanTichNguyenNhan: -10 },
          tone: 'warn',
          msg: 'Tập trung vào Kết quả trước mắt nhưng chưa xử lý Nguyên nhân khiến vấn đề lặp lại.'
        },
      ]
    },
    // 14 — Cái riêng & Cái chung — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Đăng ký tình nguyện',
      description: 'CLB kêu gọi tình nguyện vùng cao 1 tuần. Bạn muốn đi nhưng đang có bài tập lớn nhóm.',
      options: [
        { text: 'Đi tình nguyện, bài tập nhờ nhóm gánh — hoạt động xã hội quan trọng hơn điểm số, mình đang cống hiến cho cộng đồng, các bạn trong nhóm chắc sẽ hiểu và thông cảm.', effect: { tuDuyToanDien: -20 }, tone: 'error', msg: 'Dùng Cái chung lớn (xã hội) để bỏ rơi Cái chung nhỏ (nhóm bài tập). Không ai phải gánh hộ bạn.' },
        { text: 'Hoàn thành bài tập trước, đợt sau đi.', effect: { tuDuyToanDien: 20 }, tone: 'success', msg: 'Cân bằng! Hoàn thành trách nhiệm Cái chung (nhóm) trước khi mở rộng Cái riêng (tình nguyện).' },
        { text: 'Bỏ cả hai, nghỉ ngơi ở nhà.', effect: { tuDuyToanDien: -15 }, tone: 'error', msg: 'Không Cái riêng, không Cái chung. Lãng phí hoàn toàn.' },
      ]
    },
    // 15 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Chạy đua chứng chỉ',
      description: 'Bạn bè khoe chứng chỉ Google, AWS, Coursera trên LinkedIn. Bạn chưa có cái nào.',
      options: [
        { text: 'Đăng ký 5 khóa cùng lúc cho bắt kịp bạn bè.', effect: { nhinBanChat: -20 }, tone: 'error', msg: 'Chạy theo Hiện tượng (số lượng) mà bỏ qua Bản chất (kiến thức thực sự nắm được).' },
        { text: 'Chọn 1 chứng chỉ đúng chuyên ngành và đầu tư học kỹ từ đầu đến cuối.', effect: { nhinBanChat: 25 }, tone: 'success', msg: 'Bản chất (năng lực thực) được xây dựng qua chiều sâu, không phải chiều rộng hời hợt.' },
        { text: 'Không quan tâm, không cần chứng chỉ.', effect: { nhinBanChat: -10 }, tone: 'warn', msg: 'Cực đoan! Phủ nhận hoàn toàn giá trị của Hình thức cũng là sai lầm.' },
      ]
    },
    // 16 — Tất nhiên & Ngẫu nhiên — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Mất xe trong trường',
      description: 'Bạn để xe ở bãi giữ xe trường, ra thì mất. Bảo vệ nói "không chịu trách nhiệm".',
      options: [
        { text: 'Chấp nhận rủi ro và mua xe mới.', effect: { nhanThucQuyLuat: -15 }, tone: 'warn', msg: 'Cam chịu Ngẫu nhiên mà không truy cứu Nguyên nhân. Sẽ mất tiếp.' },
        { text: 'Đăng bài lên mạng xã hội bóc phốt trường, viết bài chi tiết kèm hashtag viral — gây áp lực dư luận buộc trường phải bồi thường.', effect: { nhanThucQuyLuat: -20 }, tone: 'error', msg: 'Bỏ qua Nguyên nhân pháp lý (trình báo CA) để chạy theo Hiện tượng (drama mạng). Không giải quyết gốc.' },
        { text: 'Trình báo công an và yêu cầu trường xem lại camera an ninh.', effect: { nhanThucQuyLuat: 20 }, tone: 'success', msg: 'Dùng quy trình Tất nhiên (pháp luật) để xử lý sự cố Ngẫu nhiên. Đúng cách!' },
      ]
    },
    // 17 — Nội dung & Hình thức — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Thuyết trình nhóm',
      description: 'Team bạn đang chuẩn bị cho bài thuyết trinh. Bốn bạn khác trong nhóm làm slide siêu đẹp nhưng thuyết trình không tự tin. Bạn làm slide ssown giản nhưng diễn đạt khá tốt.',
      options: [
        { text: 'Chỉnh slide cho đẹp cùng bạn bè — Hình thức cũng quan trọng, thầy cô đánh giá cả hai yếu tố nên cần hoàn thiện.', effect: { khaNangPhatTrien: -5 }, tone: 'warn', msg: 'Không sai nhưng đang tốn sức vào chỗ kém quan trọng hơn lúc này.' },
        { text: 'Giữ nguyên. Nội dung tốt quan trọng hơn.', effect: { khaNangPhatTrien: 20 }, tone: 'success', msg: 'Nội dung (hiểu bài, trình bày trôi chảy) quyết định chất lượng. Hình thức đẹp mà ấp úng vẫn tệ.' },
        { text: 'Nhờ AI làm lại toàn bộ slide vì công cụ AI hiện đại có thể tạo slide chuyên nghiệp trong vài phút.', effect: { khaNangPhatTrien: -15 }, tone: 'error', msg: 'Phụ thuộc công cụ bên ngoài mà quên rằng Bản chất (sự thông hiểu) mới tạo ra trình bày tốt.' },
      ]
    },
    // 18 — Nguyên nhân & Kết quả — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Bị phạt đi muộn',
      description: 'Thầy phạt cả nhóm 10 người trễ 5 phút. Bạn trễ vì thang máy hỏng.',
      options: [
        { text: 'Tranh cãi với thầy ngay vì mình có lý do chính đáng.', effect: { phanTichNguyenNhan: -20 }, tone: 'error', msg: 'Cãi thầy trước lớp là sai Hình thức, dù Nội dung bạn có đúng. Kết quả: mất điểm.' },
        { text: 'Lần sau chuyển sang đi cầu thang bộ.', effect: { phanTichNguyenNhan: 5 }, tone: 'warn', msg: 'Giải quyết được phần nào, nhưng chưa đối mặt Kết quả hiện tại (điểm bị trừ).' },
        { text: 'Chấp nhận lúc này, sau giờ học gặp riêng thầy trình bày lý do — chọn đúng thời điểm Hình thức để truyền đạt Nội dung sẽ tạo Kết quả tốt hơn nhiều.', effect: { phanTichNguyenNhan: 20 }, tone: 'success', msg: 'Chọn đúng thời điểm (Hình thức) để truyền đạt Nội dung. Nguyên nhân hợp lý sẽ dẫn đến Kết quả tốt.' },
      ]
    },
    // 19 — Khả năng & Hiện thực — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Mẹ gọi điện',
      description: 'Mẹ bạn quan tâm bạn và gọi điện hỏi ăn uống thế nào. Thực tế bạn đã ăn mì tôm 2 tuần vì hết tiền.',
      options: [
        { text: '"Con ổn mẹ ạ." Rồi âm thầm tìm việc — con cái không nên làm bố mẹ lo, đặc biệt khi gia đình cũng không dư dả, tự lo được là trưởng thành.', effect: { khaNangPhatTrien: -10 }, tone: 'warn', msg: 'Tốt bụng nhưng che giấu Hiện thực sẽ khiến vấn đề trầm trọng hơn.' },
        { text: 'Nói thật với mẹ.', effect: { khaNangPhatTrien: 20 }, tone: 'success', msg: 'Trung thực với Hiện thực! Bản chất vấn đề được phơi bày thì mới có Khả năng giải quyết.' },
        { text: 'Vay bạn bè xoay sở qua tháng này.', effect: { khaNangPhatTrien: -15 }, tone: 'error', msg: 'Giải quyết Hiện tượng (hết tiền hôm nay) nhưng tạo thêm Nguyên nhân mới (nợ nần).' },
      ]
    },
    // 20 — Cái riêng & Cái chung — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Đồ ăn trong tủ lạnh chung',
      description: 'Bạn và bạn cùng phòng mua đồ ăn để tủ lạnh chung ký túc xá. Sáng hôm sau đồ ăn biến mất sạch.',
      options: [
        { text: 'Ăn vụng đồ người khác để trả thù — "ai cũng làm thì mình cũng làm", cách duy nhất để mọi người hiểu cảm giác bị mất đồ.', effect: { tuDuyToanDien: -25 }, tone: 'error', msg: 'Dùng cái sai trả thù cái sai chỉ làm Cái chung thối nát thêm.' },
        { text: 'Mua tủ lạnh mini riêng.', effect: { tuDuyToanDien: -5 }, tone: 'warn', msg: 'Giải quyết Cái riêng nhưng bỏ mặc Cái chung. Vấn đề vẫn tồn tại cho mọi người.' },
        { text: 'Dán tên lên đồ ăn, họp phòng đặt quy tắc chung rõ ràng — xây dựng Cái chung (nội quy) để bảo vệ Cái riêng (tài sản) cho tất cả mọi người.', effect: { tuDuyToanDien: 20 }, tone: 'success', msg: 'Xây dựng Cái chung (quy tắc) để bảo vệ Cái riêng (đồ ăn). Biện chứng!' },
      ]
    },
  ],

  // ==================== POOL VỪA (20 câu) ====================
  medium: [
    // 1 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Crush đổi thái độ',
      description: 'Crush bạn là một người trước giờ khá ít nói với bạn bỗng gần đây hay chủ động bắt chuyện, nhắn tin và rủ đi ăn sau giờ học.',
      options: [
        { text: 'Hỏi khéo để hiểu rõ đối phương nghĩ gì về mình.', effect: { nhinBanChat: 25 }, tone: 'success', msg: 'Không chỉ nhìn Hiện tượng (sự quan tâm bên ngoài) mà cố gắng hiểu Bản chất của mối quan hệ.' },
        { text: 'Tự suy diễn rằng chắc chắn người ta thích mình.', effect: { nhinBanChat: -20 }, tone: 'error', msg: 'Dễ nhầm lẫn giữa Hiện tượng và Bản chất khi chưa có đủ cơ sở.' },
        { text: 'Tránh mặt luôn vì ngại.', effect: { nhinBanChat: -10 }, tone: 'warn', msg: 'Né tránh khiến bạn không có cơ hội hiểu rõ bản chất của tình huống.' },
      ]
    },
    // 2 — Nguyên nhân & Kết quả — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Bị đồn gian lận thi',
      description: 'Tin đồn bạn gian lận thi cử lan khắp khoa. Thực tế bạn ngồi gần bạn khác đang chép phao.',
      options: [
        { text: 'Lờ đi, thời gian sẽ chứng minh.', effect: { phanTichNguyenNhan: -15 }, tone: 'error', msg: 'Im lặng trước tin đồn = xác nhận Hiện tượng là Bản chất. Sai lầm.' },
        { text: 'Gặp trực tiếp giảng viên phụ trách để làm rõ sự thật với người có thẩm quyền.', effect: { phanTichNguyenNhan: 25 }, tone: 'success', msg: 'Giải quyết đúng Nguyên nhân (người có thẩm quyền) để triệt tiêu Kết quả (tin đồn).' },
        { text: 'Đăng bài trên mạng kể rõ mọi chuyện, tag cả giảng viên — sự thật cần được công khai rộng rãi cho mọi người biết bạn bị oan.', effect: { phanTichNguyenNhan: -20 }, tone: 'error', msg: 'Quá mức! Đưa Nguyên nhân nhỏ lên mạng tạo Kết quả khổng lồ không kiểm soát được.' },
      ]
    },
    // 3 — Cái riêng & Cái chung — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'CLB mời làm phó chủ tịch',
      description: 'CLB mời bạn làm phó chủ tịch với mức lương 0đ và đi kèm nhiều quyền hạn.',
      options: [
        { text: 'Nhận ngay vì được trải nghiệm lãnh đạo.', effect: { tuDuyToanDien: -5 }, tone: 'warn', msg: 'Chưa cân nhắc kỹ! Cái riêng (thời gian học tập) có chịu nổi không?' },
        { text: 'Từ chối, tập trung học cho xong — bằng cấp và GPA mới theo mình cả đời.', effect: { tuDuyToanDien: -10 }, tone: 'warn', msg: 'Quá cứng nhắc! Tuyệt đối hóa Cái riêng (điểm) mà bỏ qua Cái chung (kỹ năng mềm).' },
        { text: 'Nhận nhưng đặt điều kiện rõ ràng về thời gian và trách nhiệm cụ thể — vì Cái riêng (học tập) và Cái chung (CLB) đều quan trọng, cần hài hòa chứ không hy sinh bên nào.', effect: { tuDuyToanDien: 25 }, tone: 'success', msg: 'Hài hòa Cái riêng và Cái chung! Tham gia có nguyên tắc, không hy sinh một phía.' },
      ]
    },
    // 4 — Nội dung & Hình thức — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Phát hiện bạn đạo văn',
      description: 'Bạn đọc bài tập lớn của bạn cùng lớp, bạn nhận ra 70% nội dung được copy từ internet.',
      options: [
        { text: 'Mặc kệ bạn đó, chuyện ai nấy lo.', effect: { khaNangPhatTrien: -15 }, tone: 'error', msg: 'Thờ ơ trước cái sai là gián tiếp cổ xúy Hiện tượng trở thành Bản chất.' },
        { text: 'Nhắc nhở khéo léo để bạn ấy viết lại.', effect: { khaNangPhatTrien: 25 }, tone: 'success', msg: 'Bảo vệ Nội dung (kiến thức thật) của bạn mình. Ngắn gọn mà hiệu quả.' },
        { text: 'Báo giáo viên ngay — đạo văn vi phạm nghiêm trọng quy chế và nếu không xử lý sẽ tạo tiền lệ xấu, trách nhiệm của mỗi SV là giữ gìn liêm chính.', effect: { khaNangPhatTrien: -10 }, tone: 'warn', msg: 'Nghe đúng nhưng thiếu tình! Giải quyết Cái chung mà đạp lên Cái riêng (tình bạn). Nhắc bạn trước đã.' },
      ]
    },
    // 5 — Khả năng & Hiện thực — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Thực tập không lương',
      description: 'Công ty lớn nhận bạn vào thực tập với mức lương 0đ/6 tháng. Mặt khác, có một Startup nhỏ trả bạn 5 triệu nhưng công việc chỉ là chạy bàn cafe.',
      options: [
        {
          text: 'Chọn công ty lớn để tích lũy kinh nghiệm và mở rộng cơ hội nghề nghiệp sau này.',
          effect: { khaNangPhatTrien: -10 },
          tone: 'warn',
          msg: 'Có tiềm năng phát triển tốt, nhưng cần cân nhắc Hiện thực tài chính trước mắt để duy trì lâu dài.'
        },
        {
          text: 'Chọn công việc có thu nhập ổn định để giảm áp lực chi phí sinh hoạt.',
          effect: { khaNangPhatTrien: -15 },
          tone: 'error',
          msg: 'Giải quyết được nhu cầu hiện tại nhưng chưa tạo nhiều điều kiện cho Khả năng phát triển chuyên môn.'
        },
        {
          text: 'Thực tập ở công ty lớn và sắp xếp thêm công việc phù hợp ngoài giờ để cân bằng tài chính.',
          effect: { khaNangPhatTrien: 25 },
          tone: 'success',
          msg: 'Kết hợp Hiện thực trước mắt với Khả năng phát triển lâu dài để tạo hướng đi bền vững hơn.'
        },]
    },
    // 6 — Tất nhiên & Ngẫu nhiên — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Laptop hỏng giữa kỳ',
      description: 'Đúng tuần làm bài tập lớn, laptop của bạn bất ngờ hỏng và phải gửi sửa khoảng 10 ngày.',
      options: [
        {
          text: 'Mượn tạm laptop bạn bè hoặc ra thư viện dùng máy công cộng để tiếp tục làm bài.',
          effect: { nhanThucQuyLuat: 25 },
          tone: 'success',
          msg: 'Chủ động thích nghi với tình huống Ngẫu nhiên để duy trì tiến độ học tập một cách ổn định.'
        },
        {
          text: 'Chờ laptop sửa xong rồi làm tiếp.',
          effect: { nhanThucQuyLuat: -20 },
          tone: 'error',
          msg: 'Phụ thuộc hoàn toàn vào yếu tố Ngẫu nhiên sẽ khiến công việc dễ bị gián đoạn.'
        },
        {
          text: 'Xin rút khỏi bài tập nhóm vì không có thiết bị làm việc.',
          effect: { nhanThucQuyLuat: -5 },
          tone: 'warn',
          msg: 'Khó khăn là thật, nhưng rút lui ngay chưa phải cách tối ưu để giải quyết vấn đề.'
        },
      ]
    },
    // 7 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Bị vu oan trong nhóm',
      description: 'Nhóm bạn nộp bài muộn so với deadline của giáo viên. Trưởng nhóm đổ lỗi cho bạn dù bạn đã nộp bài đúng hạn.',
      options: [
        { text: 'Im lặng chịu trận để giữ hòa khí nhóm.', effect: { nhinBanChat: -20 }, tone: 'error', msg: 'Im lặng = đồng ý với lời vu khống. Bản chất (sự thật) bị chôn vùi vĩnh viễn.' },
        { text: 'Mở chat group ra cho thầy xem timestamp — bằng chứng đơn giản phá tan Hiện tượng giả mạo.', effect: { nhinBanChat: 25 }, tone: 'success', msg: 'Bằng chứng là vũ khí bảo vệ Bản chất sự thật.' },
        { text: 'Viết email dài gửi thầy giải trình, kèm screenshot, biên bản họp nhóm, và nhờ các thành viên khác làm chứng.', effect: { nhinBanChat: -5 }, tone: 'warn', msg: 'Quá phức tạp! Đôi khi một screenshot đơn giản có sức mạnh hơn 10 trang giải trình.' },
      ]
    },
    // 8 — Nguyên nhân & Kết quả — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Đề thi bị lộ',
      description: 'Trước ngày thi 2 hôm, bạn nhận được file "đề thi thật" từ group kín.',
      options: [
        { text: 'Học theo đề — ai cũng có thì mình không học mới là thiệt, đằng nào cũng phải thi, biết trước đề thì ôn trọng tâm tiết kiệm thời gian.', effect: { phanTichNguyenNhan: -25 }, tone: 'error', msg: '"Ai cũng làm" không biến cái sai thành đúng. Bản chất vẫn là gian lận.' },
        { text: 'Bỏ qua, tự ôn theo giáo trình.', effect: { phanTichNguyenNhan: 25 }, tone: 'success', msg: 'Bản lĩnh! Tôn trọng Tất nhiên (nỗ lực thực) thay vì dựa vào Ngẫu nhiên (đề lộ).' },
        { text: 'Báo cáo với giảng viên.', effect: { phanTichNguyenNhan: 10 }, tone: 'warn', msg: 'Đúng nhưng cần cân nhắc Kết quả cho nhiều người.' },
      ]
    },
    // 9 — Cái riêng & Cái chung — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Roommate ồn ào',
      description: 'Bạn cùng phòng liên tục dẫn bạn bè về KTX ồn đến 2h sáng. Bạn không ngủ được.',
      options: [
        { text: 'Mua nút bịt tai, thích nghi — không phải lúc nào cũng ép được người khác thay đổi theo ý mình, kỹ năng thích nghi rất quan trọng.', effect: { tuDuyToanDien: -15 }, tone: 'error', msg: 'Cam chịu Cái riêng (quyền ngủ) bị xâm phạm. Thích nghi ≠ chịu nhục.' },
        { text: 'Báo Ban quản lý KTX.', effect: { tuDuyToanDien: -5 }, tone: 'warn', msg: 'Nhảy cóc! Chưa thử giải quyết trực tiếp đã leo thang lên cấp trên.' },
        { text: 'Nói chuyện thẳng thắn với bạn cùng phòng, cùng nhau lập nội quy phòng rõ ràng — xây dựng Cái chung (quy tắc) để bảo vệ Cái riêng (giấc ngủ) cho cả hai bên.', effect: { tuDuyToanDien: 25 }, tone: 'success', msg: 'Xây dựng Cái chung (nội quy phòng) để bảo vệ Cái riêng cho cả hai bên.' },
      ]
    },
    // 10 — Khả năng & Hiện thực — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Thầy rủ nghiên cứu',
      description: 'Thầy mời bạn tham gia đề tài nghiên cứu. Rất hay nhưng bạn đang học kém 2 môn.',
      options: [
        { text: 'Nhận — nghiên cứu giúp vượt trội so với triệu SV khác, điểm bao giờ cũng cải thiện được sau.', effect: { khaNangPhatTrien: -15 }, tone: 'error', msg: 'Ảo tưởng Khả năng! Hiện thực (2 môn kém) nếu không giải quyết sẽ kéo sụp mọi thứ.' },
        { text: 'Xin thầy cho tham gia từ kỳ sau khi học tập ổn định hơn.', effect: { khaNangPhatTrien: 25 }, tone: 'success', msg: 'Ưu tiên Hiện thực trước mắt để tạo nền tảng cho Khả năng tương lai.' },
        { text: 'Từ chối hẳn, không tham gia nghiên cứu.', effect: { khaNangPhatTrien: -10 }, tone: 'warn', msg: 'Đóng sập Khả năng phát triển chỉ vì khó khăn nhất thời.' },
      ]
    },
    // 11 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Bạn thân nói xấu sau lưng',
      description: 'Phát hiện đứa bạn thân lâu năm nói xấu bạn trong nhóm chat khác.',
      options: [
        { text: 'Gửi ảnh chụp màn hình cho bạn và hỏi thẳng sự việc.', effect: { nhinBanChat: 25 }, tone: 'success', msg: 'Đối mặt Bản chất! Một hành động ngắn gọn phá vỡ mọi Hiện tượng giả tạo.' },
        { text: 'Chắc bạn chỉ đùa, tình bạn lâu năm không thể dễ dàng tan vỡ — ai cũng có lúc lỡ lời, không nên vì một lần mà phá vỡ tình bạn đẹp đẽ.', effect: { nhinBanChat: -20 }, tone: 'error', msg: 'Tự bao biện! Dùng Hiện tượng (3 năm quen) để phủ nhận Bản chất (nói xấu).' },
        { text: 'Cũng nói xấu lại cho hả.', effect: { nhinBanChat: -15 }, tone: 'error', msg: 'Lấy cái sai trả cái sai. Nguyên nhân mới sinh Kết quả tệ hơn.' },
      ]
    },
    // 12 — Tất nhiên & Ngẫu nhiên — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Tiền học bổng bị chậm',
      description: 'Trường chậm chuyển học bổng 2 tháng. Bạn cạn tiền.',
      options: [
        { text: 'Chờ đợi, trường chắc sẽ chuyển — quy trình hành chính bình thường, mọi năm đều chậm.', effect: { nhanThucQuyLuat: -20 }, tone: 'error', msg: 'Ngồi chờ Ngẫu nhiên (trường chuyển lúc nào) trong khi Hiện thực (hết tiền) đang bóp cổ bạn.' },
        { text: 'Vay ngân hàng.', effect: { nhanThucQuyLuat: -10 }, tone: 'warn', msg: 'Dùng giải pháp lớn cho vấn đề nhỏ. Nợ ngân hàng ≠ giải pháp cho 2 tháng chậm lương.' },
        { text: 'Gửi đơn hỏi phòng tài vụ xác nhận thời gian chuyển, đồng thời tìm job tạm thời để có thu nhập — vừa truy Nguyên nhân vừa chủ động tạo Tất nhiên.', effect: { nhanThucQuyLuat: 25 }, tone: 'success', msg: 'Vừa truy Nguyên nhân (hỏi tài vụ) vừa tạo Tất nhiên (thu nhập tạm). Chủ động hoàn toàn.' },
      ]
    },
    // 13 — Nguyên nhân & Kết quả — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Bị cyberbully',
      description: 'Ai đó tạo page ẩn danh đăng ảnh chế giễu bạn cùng với hàng nghìn lượt share trên khắp các nền tảng.',
      options: [
        { text: 'Lập page phản công cho kẻ bắt nạt biết hậu quả và không ai được phép bắt nạt mà không trả giá.', effect: { phanTichNguyenNhan: -25 }, tone: 'error', msg: 'Trở thành chính thứ mình ghét! Nguyên nhân (bạo lực mạng) nhân đôi, Kết quả tệ gấp bội.' },
        { text: 'Báo cáo trang, thu thập bằng chứng và thông báo cho nhà trường để xử lý theo quy trình.', effect: { phanTichNguyenNhan: 25 }, tone: 'success', msg: 'Xử lý đúng quy trình pháp lý để triệt tiêu Nguyên nhân gốc rễ.' },
        { text: 'Tắt mọi tài khoản MXH, biến mất khỏi internet để tránh mọi rắc rối.', effect: { phanTichNguyenNhan: -15 }, tone: 'error', msg: 'Nạn nhân không nên là người phải chạy trốn. Cái sai thuộc về kẻ bắt nạt.' },
      ]
    },
    // 14 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: ' Quỵt lương tháng',
      description: 'Bạn làm cho một quán ăn part-time 1 tháng, quản lý hứa trả lương 3 triệu. Đến ngày chỉ đưa 2 triệu, nói "trừ đồ vỡ".',
      options: [
        { text: 'Chấp nhận — mình chỉ là SV làm thêm không có hợp đồng, không đòi hỏi được, 2 triệu vẫn hơn không.', effect: { nhinBanChat: -20 }, tone: 'error', msg: 'Hiện tượng (không có hợp đồng) không xóa bỏ Bản chất (quyền lao động). Bạn vẫn có quyền đòi.' },
        { text: 'Yêu cầu bằng chứng đồ vỡ và thỏa thuận trừ lương ban đầu. Truy Bản chất vấn đề.', effect: { nhinBanChat: 25 }, tone: 'success', msg: 'Truy Nguyên nhân bằng bằng chứng! Bản chất (quỵt lương) cần được phơi bày.' },
        { text: 'Đập quán rồi nghỉ để trả đũa.', effect: { nhinBanChat: -25 }, tone: 'error', msg: 'Bạo lực biến mình từ nạn nhân thành tội phạm.' },
      ]
    },
    // 15 — Khả năng & Hiện thực — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Nhặt được của rơi',
      description: 'Bạn nhặt được ví 5 triệu + CMND trong sân trường và đang rất cần tiền.',
      options: [
        { text: 'Giữ lấy — sinh viên khó khăn, 5 triệu giúp qua tháng, nếu người mất cẩn thận hơn thì đâu bị mất.', effect: { nhinBanChat: -30 }, tone: 'error', msg: 'Biện minh tinh vi nhưng Bản chất là trộm cắp! "Cần tiền" không biến cái sai thành đúng.' },
        { text: 'Trả lại phòng bảo vệ.', effect: { nhinBanChat: 25 }, tone: 'success', msg: 'Bản chất đạo đức không thay đổi theo hoàn cảnh. Nghèo là hoàn cảnh nhưng không vì thế mà có quyền lấy đồ người khác.' },
        { text: 'Lấy tiền, để lại ví + CMND.', effect: { nhinBanChat: -20 }, tone: 'error', msg: 'Nửa vời! Bản chất vẫn là lấy của người khác, dù Hình thức "nhẹ nhàng" hơn.' },
      ]
    },
    // 16 — Cái riêng & Cái chung — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Admin group chat lạm quyền',
      description: 'Admin group lớp kick bất cứ ai nói trái ý. Bạn vừa bị kick vì góp ý lịch học.',
      options: [
        { text: 'Lập group mới kéo hết mọi người sang — tạo không gian dân chủ nơi ai cũng có quyền phát biểu bình đẳng.', effect: { tuDuyToanDien: -15 }, tone: 'error', msg: 'Chia rẽ Cái chung (lớp) vì Cái riêng (bị kick). Tạo thêm mâu thuẫn.' },
        { text: 'Nhờ cố vấn học tập can thiệp — dùng thẩm quyền Cái chung để điều chỉnh Cái riêng lạm quyền.', effect: { tuDuyToanDien: 25 }, tone: 'success', msg: 'Dùng thẩm quyền Cái chung (cố vấn) để điều chỉnh Cái riêng (admin). Đúng quy trình!' },
        { text: 'Mặc kệ, dùng Zalo riêng.', effect: { tuDuyToanDien: -5 }, tone: 'warn', msg: 'Giải quyết cho mình nhưng bỏ mặc vấn đề chung.' },
      ]
    },
    // 17 — Tất nhiên & Ngẫu nhiên — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'Tranh cãi chính trị trên MXH',
      description: 'Post ý kiến trung lập về vấn đề xã hội. Bị cả 2 phe tấn công.',
      options: [
        { text: 'Cãi lại cả 2 phe bằng lập luận chi tiết — sự thật chỉ có một và người có lý lẽ vững chắc nhất sẽ thắng mọi cuộc tranh luận.', effect: { nhanThucQuyLuat: -20 }, tone: 'error', msg: 'Ảo tưởng! Tranh luận MXH là Ngẫu nhiên hỗn loạn, không có ai thắng. Bạn chỉ tự kiệt sức.' },
        { text: 'Xóa bài và rút kinh nghiệm.', effect: { nhanThucQuyLuat: 20 }, tone: 'success', msg: 'Nhận ra quy luật Tất nhiên: MXH không phải nơi tranh luận lý tính. Rút lui là thắng.' },
        { text: 'Để bài đó, mặc kệ comment.', effect: { nhanThucQuyLuat: -5 }, tone: 'warn', msg: 'Thụ động. Bài viết tiếp tục gây Kết quả tiêu cực không kiểm soát.' },
      ]
    },
    // 18 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Kết quả khác kỳ vọng',
      description: 'Nỗ lực cực kỳ cho bài thi nhưng chỉ được 8. Một bạn khác không học gì nhưng lại được 10.',
      options: [
        { text: 'Chắc chắn thầy chấm sai hoặc thiên vị — không có lý do gì người học chăm lại thua người không học.', effect: { nhinBanChat: -20 }, tone: 'error', msg: 'Đổ lỗi Nguyên nhân khách quan mà không xem lại Bản chất (phương pháp). Nỗ lực ≠ hiệu quả.' },
        { text: 'Bỏ qua, 8 điểm cũng tốt rồi.', effect: { nhinBanChat: -10 }, tone: 'warn', msg: 'Không sai nhưng bỏ lỡ cơ hội nhìn ra Nguyên nhân để cải thiện.' },
        { text: 'Xin xem lại bài thi của mình, tìm lỗi sai cụ thể — vì Bản chất vấn đề có thể nằm ở phương pháp học chứ không phải sự nỗ lực.', effect: { nhinBanChat: 25 }, tone: 'success', msg: 'Tìm Bản chất (lỗ hổng kiến thức) ẩn sau Hiện tượng (điểm thấp). Trưởng thành!' },
      ]
    },
    // 19 — Nguyên nhân & Kết quả — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Ghen tị bạn bè',
      description: 'Bạn và Minh cùng ôn thi, Minh được 10đ, còn bạn được 6đ.',
      options: [
        { text: 'Nghĩ Minh giấu tài liệu không chia sẻ — cùng ôn mà điểm chênh lệch lớn thế là bất thường.', effect: { phanTichNguyenNhan: -20 }, tone: 'error', msg: 'Bịa đặt Nguyên nhân (tài liệu mật) để che giấu Bản chất (phương pháp kém). Đổ lỗi vu vơ.' },
        { text: 'Nghỉ chơi với Minh, thấy Minh học không bằng mình mà được điểm cao chắc chắn là gian lận.', effect: { phanTichNguyenNhan: -15 }, tone: 'error', msg: 'Phá Cái riêng (tình bạn) chỉ vì tự ái. Kết quả: cô đơn.' },
        { text: 'Xin xem bài của Minh, so sánh cách làm rồi phân tích xem mình sai ở đâu — biến ghen tị thành động lực bằng cách tìm đúng Nguyên nhân thực sự.', effect: { phanTichNguyenNhan: 25 }, tone: 'success', msg: 'Tìm Nguyên nhân thực sự (phương pháp) để thay đổi Kết quả. Biến ghen tị thành động lực.' },
      ]
    },
    // 20 — Nội dung & Hình thức — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Sáng tạo hay an toàn',
      description: 'Thầy yêu cầu làm video bài tập. Bạn muốn làm phim ngắn, nhóm muốn quay PowerPoint.',
      options: [
        { text: 'Nghe theo nhóm — đa số đã đồng ý PowerPoint thì tôn trọng ý kiến tập thể, dân chủ là nguyên tắc làm việc nhóm.', effect: { khaNangPhatTrien: -15 }, tone: 'error', msg: 'Nhầm giữa dân chủ và sợ hãi! Cái chung (ý nhóm) không phải lúc nào cũng đúng nếu bóp chết Khả năng sáng tạo.' },
        { text: 'Thuyết phục nhóm bằng demo nhanh ý tưởng phim ngắn, dùng Nội dung cụ thể để thay đổi Hình thức quyết định.', effect: { khaNangPhatTrien: 25 }, tone: 'success', msg: 'Dùng Nội dung (demo) để thay đổi Hình thức (quyết định nhóm). Thuyết phục bằng hành động!' },
        { text: 'Tự làm video riêng, không theo nhóm nữa.', effect: { khaNangPhatTrien: -10 }, tone: 'warn', msg: 'Hy sinh Cái chung vì Cái riêng. Solo không phải lúc nào cũng tốt.' },
      ]
    },
  ],

  // ==================== POOL KHÓ (10 câu) ====================
  hard: [
    // 1 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Nhóm trưởng “siêu nhiệt tình”',
      description: 'Một bạn trong nhóm luôn nhắn tin rất năng nổ, họp đầy đủ và nói ý tưởng cực hay. Nhưng đến gần deadline thì phần việc của bạn ấy vẫn chưa hoàn thành.',
      options: [
        {
          text: '“Bạn ấy nhiệt tình mà, chắc đang bận thôi”, rồi tiếp tục chờ mà không trao đổi rõ ràng.',
          effect: { nhinBanChat: -20, tuDuyToanDien: -10 },
          tone: 'error',
          msg: 'Bị cuốn theo Hiện tượng (bề ngoài năng nổ) mà chưa nhìn vào Bản chất: công việc thực tế chưa được xử lý.'
        },
        {
          text: 'Khó chịu rồi công khai trách móc bạn ấy ngay trong group.',
          effect: { nhinBanChat: -10, tuDuyToanDien: -15 },
          tone: 'warn',
          msg: 'Phản ứng cảm tính quá nhanh. Chưa tìm hiểu rõ nguyên nhân đã kết luận.'
        },
        {
          text: 'Trao đổi riêng, xem bạn ấy đang gặp khó khăn gì và cùng kiểm tra tiến độ thực tế để hỗ trợ hoặc phân chia lại công việc.',
          effect: { nhinBanChat: 30, tuDuyToanDien: 20 },
          tone: 'success',
          msg: 'Nhìn vào Bản chất vấn đề: hiệu quả công việc quan trọng hơn vẻ ngoài “bận rộn”. Vừa công bằng vừa giữ tinh thần nhóm.'
        },
      ]
    },
    // 2 — Cái riêng & Cái chung — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Bị ép buộc trong nhóm',
      description: 'Trưởng nhóm giao bạn phần việc khó nhất, deadline sớm nhất, bản thân bạn cũng không làm gì. Ai phản đối bị "ghim".',
      options: [
        { text: 'Cắn răng làm hết — chịu thiệt một chút cũng không sao, quan trọng là kết quả tốt đẹp và mình tích lũy kinh nghiệm.', effect: { tuDuyToanDien: -20, khaNangPhatTrien: -15 }, tone: 'error', msg: 'Nghe "trưởng thành" nhưng đang nuôi bất công thành Tất nhiên. Cả đời bị bóc lột.' },
        { text: 'Ghi chép phân công, đề xuất họp nhóm chia lại công bằng bằng bằng chứng cụ thể.', effect: { tuDuyToanDien: 30, khaNangPhatTrien: 20 }, tone: 'success', msg: 'Dùng bằng chứng (Nguyên nhân) để thay đổi cơ cấu (Cái chung). Bảo vệ Cái riêng bằng lý lẽ.' },
        { text: 'Report thầy ngay lập tức.', effect: { tuDuyToanDien: -5, khaNangPhatTrien: -10 }, tone: 'warn', msg: 'Nhảy cóc! Chưa thử giải quyết nội bộ đã leo thang.' },
      ]
    },
    // 3 — Nguyên nhân & Kết quả — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'File thuyết trình “biến mất”',
      description: 'Ngay trước buổi thuyết trình, file nhóm trên drive bị chỉnh sửa lung tung và mất gần hết nội dung. Cả nhóm bắt đầu nghi ngờ lẫn nhau.',
      options: [
        {
          text: 'Kiểm tra lịch sử chỉnh sửa và phân quyền file để tìm nguyên nhân trước khi kết luận.',
          effect: { phanTichNguyenNhan: 35, nhinBanChat: 20 },
          tone: 'success',
          msg: 'Tập trung vào Nguyên nhân thực tế thay vì suy đoán cảm tính. Dữ liệu giúp làm rõ Bản chất vấn đề.'
        },
        {
          text: 'Tin rằng chắc chỉ là lỗi hệ thống nên bỏ qua và mọi người tự ngồi sửa lại toàn bộ file.',
          effect: { phanTichNguyenNhan: -20, khaNangPhatTrien: -10 },
          tone: 'warn',
          msg: 'Chỉ xử lý phần ngọn mà không tìm Nguyên nhân thật sự. Sự cố có thể lặp lại.'
        },
        {
          text: 'Đăng ngay trong group rằng “chắc chắn có người phá”, dù chưa kiểm tra gì.',
          effect: { phanTichNguyenNhan: -30, nhinBanChat: -20 },
          tone: 'error',
          msg: 'Kết luận vội vàng từ Hiện tượng dễ làm mất niềm tin và khiến mâu thuẫn lớn hơn.'
        },
      ]
    },
    // 4 — Tất nhiên & Ngẫu nhiên — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Gia đình khủng hoảng',
      description: 'Bố mẹ ly hôn vào đúng thời kỳ bạn đang học kỳ cuối. Tinh thần suy sụp, không muốn đi học.',
      options: [
        { text: 'Nghỉ 1 kỳ chữa lành — sức khỏe tâm thần quan trọng hơn tất cả, không nên ép bản thân mạnh mẽ khi đang đau khổ.', effect: { nhanThucQuyLuat: -15, khaNangPhatTrien: -10 }, tone: 'warn', msg: 'Nghe đúng nhưng 1 kỳ = 6 tháng chậm. Nghỉ xong chưa chắc quay lại. Ngẫu nhiên kéo dài thành Tất nhiên.' },
        { text: 'Đi học bình thường, đặt lịch tư vấn tâm lý ở trường để được hỗ trợ chuyên nghiệp.', effect: { nhanThucQuyLuat: 30, khaNangPhatTrien: 25 }, tone: 'success', msg: 'Duy trì Tất nhiên (đi học) trong khi xử lý Ngẫu nhiên (khủng hoảng). Kiên cường và chuyên nghiệp.' },
        { text: 'Trốn và chơi game 16 tiếng/ngày.', effect: { nhanThucQuyLuat: -30, khaNangPhatTrien: -25 }, tone: 'error', msg: 'Trốn tránh Hiện thực bằng thế giới ảo. Nguyên nhân (đau khổ) không biến mất.' },
      ]
    },
    // 5 — Cái riêng & Cái chung — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Quyết định gap year',
      description: 'Bạn là sinh viên năm 3, muốn gap year 1 năm để đi Nhật làm việc, sau đó quay lại học tiếp. Nhưng bố mẹ phản đối kịch liệt.',
      options: [
        { text: 'Bỏ nhà đi — tuổi trẻ chỉ có một lần, không dám sống cho mình bây giờ sẽ hối hận cả đời.', effect: { tuDuyToanDien: -25, khaNangPhatTrien: -15 }, tone: 'error', msg: 'Tuyệt đối hóa Cái riêng (đam mê) mà phá nát Cái chung (gia đình).' },
        { text: 'Từ bỏ ước mơ, nghe lời bố mẹ.', effect: { tuDuyToanDien: -10, khaNangPhatTrien: -20 }, tone: 'warn', msg: 'Hy sinh Cái riêng hoàn toàn. Lâu dài sẽ oán hận.' },
        { text: 'Lập kế hoạch tài chính chi tiết kèm lộ trình cụ thể để thuyết phục bố mẹ — dùng Nội dung vững chắc để thay đổi Hình thức (sự phản đối), vì Cái riêng và Cái chung đều cần được tôn trọng.', effect: { tuDuyToanDien: 35, khaNangPhatTrien: 25 }, tone: 'success', msg: 'Biện chứng đỉnh cao! Dùng Nội dung (kế hoạch) để thay đổi Hình thức (phản đối). Cả hai bên đều được tôn trọng.' },
      ]
    },
    // 6 — Bản chất & Hiện tượng — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Bị quấy rối',
      description: 'Một người khóa trên nhắn tin tán tỉnh dù bạn đã từ chối nhiều lần. Gần đây bắt đầu theo dõi lịch học.',
      options: [
        { text: 'Chắc người đó chỉ thích mình, từ từ chán — ai cũng có quyền theo đuổi tình yêu, cứng rắn quá có thể làm tổn thương người khác.', effect: { nhinBanChat: -30, tuDuyToanDien: -25 }, tone: 'error', msg: 'Nguy hiểm! Dùng Hiện tượng ("chỉ thích") bao biện cho Bản chất (stalking). Đây là vi phạm pháp luật.' },
        { text: 'Lưu bằng chứng, báo cố vấn học tập và công an phường. Bản chất stalking phải bị xử lý nghiêm.', effect: { nhinBanChat: 35, tuDuyToanDien: 25 }, tone: 'success', msg: 'Bảo vệ bản thân bằng pháp luật (Tất nhiên). Không có chỗ cho sự "thông cảm" với stalking.' },
        { text: 'Nhờ bạn bè/người thân đe dọa lại.', effect: { nhinBanChat: -10, tuDuyToanDien: -10 }, tone: 'warn', msg: 'Dùng bạo lực trả bạo lực. Nguyên nhân chưa được giải quyết bằng pháp lý.' },
      ]
    },
    // 7 — Nội dung & Hình thức — ĐÁP ÁN ĐÚNG: NGẮN (nhưng đầy nội dung)
    {
      title: 'Copy-paste Turnitin 65%',
      description: 'Bạn nộp khóa luận, bị phát hiện đạo văn 65% bằng tool. Deadline cuối là ngày mai.',
      options: [
        { text: 'Dùng AI rewrite hạ % — công nghệ mạnh, paraphrase giữ nguyên ý nghĩa, nhanh nhất để giải quyết.', effect: { phanTichNguyenNhan: -30, nhinBanChat: -20 }, tone: 'error', msg: 'Dùng cái sai sửa cái sai! Bản chất (đạo văn) không biến mất khi Hình thức (từ ngữ) thay đổi.' },
        { text: 'Thức trắng đêm viết lại bằng ngôn ngữ của mình.', effect: { phanTichNguyenNhan: 35, nhinBanChat: 25 }, tone: 'success', msg: 'Đau nhưng đúng! Biến Nội dung (đã đọc) thành Hình thức (ngôn ngữ riêng). Nguyên nhân được sửa tận gốc.' },
        { text: 'Xin thầy gia hạn thêm 1 tuần.', effect: { phanTichNguyenNhan: -10, nhinBanChat: -5 }, tone: 'warn', msg: 'Mua thời gian nhưng chưa chắc sửa được Bản chất (thói quen copy).' },
      ]
    },
    // 8 — Khả năng & Hiện thực — ĐÁP ÁN ĐÚNG: DÀI
    {
      title: 'Ngã rẽ cuộc đời',
      description: 'Bạn sắp tốt nghiệp nhưng nhận ra đam mê Nhiếp ảnh. Bằng tốt nghiệp loại giỏi đang chờ bạn.',
      options: [
        { text: 'Bỏ ngành hiện tại sang Nhiếp ảnh — đời chỉ sống một lần, 40 năm ngồi office làm việc không yêu thích sẽ hối hận.', effect: { khaNangPhatTrien: -25, tuDuyToanDien: -15 }, tone: 'error', msg: 'Phung phí 4 năm Hiện thực để theo Khả năng chưa kiểm chứng. Đam mê cần nền tảng.' },
        { text: 'Chôn đam mê, đi làm ngành hiện tại cho ổn trước đã.', effect: { khaNangPhatTrien: -15, tuDuyToanDien: -10 }, tone: 'warn', msg: 'An toàn nhưng giết chết Khả năng phát triển. Lâu dài sẽ mòn mỏi.' },
        { text: 'Tốt nghiệp ngành hiện tại lấy bằng làm nền tảng an toàn, song song xây portfolio Nhiếp ảnh ban đêm — dùng Hiện thực (bằng ngành hiện tại) làm đòn bẩy cho Khả năng (đam mê).', effect: { khaNangPhatTrien: 35, tuDuyToanDien: 30 }, tone: 'success', msg: 'Dùng Hiện thực (bằng ngành hiện tại) làm đòn bẩy cho Khả năng (Nhiếp ảnh). Biện chứng đỉnh cao!' },
      ]
    },
    // 9 — Tất nhiên & Ngẫu nhiên — ĐÁP ÁN ĐÚNG: NGẮN
    {
      title: 'USB hỏng ngày bảo vệ khóa luận',
      description: '5 phút trước khi chuẩn bị để bảo vệ Khóa luận, USB báo "corrupted". Tất cả tài liệu của nhóm bị lỗi và không thể mở được.',
      options: [
        { text: 'Xin hội đồng hoãn 30 phút — giải thích tình huống cụ thể, đây là sự cố bất khả kháng ngoài tầm kiểm soát.', effect: { nhanThucQuyLuat: -20, khaNangPhatTrien: -15 }, tone: 'error', msg: 'Hội đồng chấm 30 SV/ngày. Đổ lỗi "bất khả kháng" nhưng Bản chất là không backup — lỗi Tất nhiên.' },
        { text: 'Mở Drive/GitHub lấy backup.', effect: { nhanThucQuyLuat: 35, khaNangPhatTrien: 25 }, tone: 'success', msg: 'Lường trước Ngẫu nhiên bằng Tất nhiên (backup). Đỉnh cao chuẩn bị!' },
        { text: 'Thuyết trình bằng miệng, không cần slide.', effect: { nhanThucQuyLuat: -10, khaNangPhatTrien: -5 }, tone: 'warn', msg: 'Can đảm nhưng thiếu Hình thức (demo, slide) làm Nội dung mất sức thuyết phục.' },
      ]
    },
    // 10 — Khả năng & Hiện thực — ĐÁP ÁN ĐÚNG: TRUNG BÌNH
    {
      title: 'Tìm việc sau tốt nghiệp',
      description: 'Minh vừa ra trường đúng lúc kinh tế suy thoái. Minh có bằng loại giỏi nhưng rải 50 CV chưa được gọi một lần. Minh bắt đầu nghi ngờ giá trị của 4 năm đại học. Minh nên lựa chọn như thế nào',
      options: [
        { text: 'Đại học vô dụng vì thế Minh về quê — 4 năm tốn tiền tốn thời gian mà thất nghiệp, hệ thống giáo dục có vấn đề.', effect: { nhanThucQuyLuat: -30, khaNangPhatTrien: -25 }, tone: 'error', msg: 'Đánh đồng Ngẫu nhiên (thị trường xấu) với Tất nhiên (giá trị giáo dục). 4 năm kiến thức không mất vì thị trường tạm.' },
        { text: 'Nhận việc trái ngành hoặc lương thấp trước, tiếp tục rải CV — chấp nhận Hiện thực để duy trì Khả năng.', effect: { nhanThucQuyLuat: 35, khaNangPhatTrien: 30 }, tone: 'success', msg: 'Chấp nhận Hiện thực khắc nghiệt để duy trì Khả năng. Ngẫu nhiên (thị trường) sẽ thay đổi, Tất nhiên (năng lực) không mất.' },
        { text: 'Học thạc sĩ chờ thị trường hồi phục.', effect: { nhanThucQuyLuat: -5, khaNangPhatTrien: -5 }, tone: 'warn', msg: 'Trốn vào trường vì sợ Hiện thực. Thạc sĩ cần mục tiêu rõ ràng, không phải nơi ẩn náu.' },
      ]
    },
  ]
};
