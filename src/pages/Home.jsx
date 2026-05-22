import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Presentation, Sparkles, Zap } from 'lucide-react';
import './Home.css';
import '../pages/AIUsage.css';
import heroImage from '../assets/theory-slides/home1.jpg';

const aiTools = [
  {
    id: 1,
    name: 'NotebookLM',
    icon: '📓',
    inputValue: 'VAI TRÒ CỦA AI (INPUT THÔ)',
    inputDesc: 'Tổng hợp slide giáo trình của trường thành các từ khóa, ý chính.',
    studentValue: 'SINH VIÊN XỬ LÝ (HOÀN THIỆN)',
    studentDesc: 'Đối chiếu với giáo trình gốc. Biến tập lại thành câu hỏi quiz để đánh bao độ khó.',
  },
  {
    id: 2,
    name: 'Antigravity',
    icon: '🎯',
    inputValue: 'VAI TRÒ CỦA AI (INPUT THÔ)',
    inputDesc: 'Hỗ trợ lập trình và xử lý giao diện cho bài thuyết trình .',
    studentValue: 'SINH VIÊN XỬ LÝ (HOÀN THIỆN)',
    studentDesc: 'Chỉnh sửa lại layout cũng như luồng của trang sao cho phù hợp với nội dung thuyết trình .',
  },
  {
    id: 3,
    name: 'Chat GPT',
    icon: '✨',
    inputValue: 'VAI TRÒ CỦA AI (INPUT THÔ)',
    inputDesc: 'Hỗ trợ phân tích dữ liệu, soạn thảo câu hỏi và câu trả lời .',
    studentValue: 'SINH VIÊN XỬ LÝ (HOÀN THIỆN)',
    studentDesc: 'Kiểm tra độ chính xác, đánh giá hiệu quả giải pháp và cải thiện chất lượng câu hỏi.',
  }
];


const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <div className="background-effects" aria-hidden="true">
        <span className="bg-shape shape-one" />
        <span className="bg-shape shape-two" />
        <span className="bg-shape shape-three" />
      </div>

      <section className="home-hero">
        <div className="container home-container">
          <div className="home-content">
            <div className="glass-badge delay-100">
              <Sparkles size={16} className="glow-icon" />
              Bài thuyết trình MLN111
            </div>
            <h1 className="home-title delay-200">
              Các cặp phạm trù cơ bản của
              <span className="text-gradient"> phép biện chứng duy vật</span>
            </h1>
            

            <div className="home-actions delay-300">
              <Link to="/theory" className="glass-btn btn-primary-glow">
                <Presentation size={20} />
                Xem bài thuyết trình
              </Link>
              <Link to="/roleplay" className="glass-btn btn-outline-glow">
                Thử khảo nghiệm
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="home-visual delay-200" aria-label="Abstract philosophy representation">
            <div className="glass-frame">
              <img src={heroImage} alt="Trừu tượng hóa triết học" />
              <div className="hero-note note-one">
                <BookOpen size={18} className="glow-icon-blue" />
                6 cặp phạm trù
              </div>
              <div className="hero-note note-two">Tư duy biện chứng</div>
              <div className="hero-note note-three">Ví dụ thực tiễn</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-usage-header">
        <div className="container ai-container">
          <div className="header-content">
            <div className="glass-badge delay-100">
              <Zap size={16} className="glow-icon" />
              AI Usage
            </div>
            <h1 className="page-title delay-200">
              Công cụ <span className="text-gradient">AI hỗ trợ học tập</span>
            </h1>
            <p className="page-description delay-300">
              Đây là các công cụ AI mà nhóm em đã sử dụng để hỗ trợ quá trình học tập và hoàn thiện bài thuyết trình . Mỗi công cụ đều có vai trò riêng trong việc xử lý và cải thiện nội dung, giúp chúng em đạt được kết quả tốt nhất.
            </p>
          </div>
        </div>
      </section>

      <section className="ai-tools-section">
        <div className="container">
          <div className="ai-tools-grid">
            {aiTools.map((tool) => (
              <div key={tool.id} className="ai-tool-card">
                <div className="tool-header">
                  <div className="tool-icon">{tool.icon}</div>
                  <h2 className="tool-name">{tool.name}</h2>
                </div>

                <div className="tool-content">
                  <div className="tool-section">
                    <h3 className="section-title">{tool.inputValue}</h3>
                    <p className="section-description">{tool.inputDesc}</p>
                  </div>

                  <div className="tool-section">
                    <h3 className="section-title student-title">{tool.studentValue}</h3>
                    <p className="section-description">{tool.studentDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
