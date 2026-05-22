import { useState, useEffect} from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, GitMerge, BookOpen} from 'lucide-react';
import './Theory.css';
import img1 from '../assets/theory-slides/img1.jpg';
import img2 from '../assets/theory-slides/img2.png';
import img3 from '../assets/theory-slides/img3.jpg';
import img4 from '../assets/theory-slides/img4.jpg';
import img5 from '../assets/theory-slides/img5.jpg';
import img6 from '../assets/theory-slides/img6.jpg';
import img7 from '../assets/theory-slides/img7.png';

const slides = [
  {
    id: 0,
    eyebrow: 'Mở đầu',
    title: 'Phạm trù triết học là gì?',
    short: 'Nền tảng',
    type: 'intro',
    accent: '#38bdf8',
    image: img1,
    definition: 'Phạm trù triết học là những khái niệm chung nhất, phản ánh những mặt, thuộc tính và mối liên hệ cơ bản, phổ biến nhất của thế giới hiện thực.',
    points: [
      { text: '-> Được hình thành từ quá trình nhận thức và tổng kết thực tiễn lâu dài của nhân loại.' },
      { text: '-> Phản ánh những mối liên hệ phổ biến giữa sự vật, hiện tượng và quá trình trong tự nhiên và xã hội.' },
      { text: '-> Nếu quy luật biện chứng là nguyên tắc vận động, thì phạm trù là công cụ để quan sát và phân tích thế giới đó.' },
    ],
    pairs: [
      'Cái riêng – Cái chung',
      'Nguyên nhân – Kết quả',
      'Tất nhiên – Ngẫu nhiên',
      'Nội dung – Hình thức',
      'Bản chất – Hiện tượng',
      'Khả năng – Hiện thực',
    ],
  },
  {
    id: 1,
    eyebrow: 'Cặp phạm trù 1',
    title: 'Cái riêng và Cái chung',
    short: 'Cá thể',
    type: 'pair',
    accent: '#818cf8',
    image: img2,
    termA: {
      name: 'Cái riêng',
      color: '#818cf8',
      def: 'Là phạm trù dùng để chỉ một sự vật, hiện tượng hoặc quá trình riêng lẻ, xác định trong thế giới khách quan.',
      example: 'Một sinh viên cụ thể trong lớp học chính là "cái riêng."',
    },
    termB: {
      name: 'Cái chung',
      color: '#34d399',
      def: 'Là những thuộc tính, đặc điểm, mối liên hệ được lặp lại ở nhiều sự vật, hiện tượng khác nhau.',
      example: '"Sinh viên đều học tập, thi cử, học tín chỉ" — đó là cái chung.',
    },
    imageConcept: img2,
    relations: [
      'Cái chung chỉ tồn tại trong cái riêng, thông qua cái riêng — không có cái chung tồn tại độc lập.',
      'Cái riêng luôn chứa đựng cái chung, đồng thời có những nét đơn nhất không lặp lại.',
      'Cái đơn nhất có thể chuyển thành cái chung khi được lặp lại ở nhiều sự vật (ví dụ: AI ban đầu là cái riêng, sau trở thành xu hướng phổ biến).',
    ],
    significance: 'Khi nghiên cứu phải xuất phát từ những trường hợp cụ thể để rút ra quy luật chung; không được áp đặt ý chí chủ quan lên thực tiễn.',
  },
  {
    id: 2,
    eyebrow: 'Cặp phạm trù 2',
    title: 'Nguyên nhân và Kết quả',
    short: 'Tác động',
    type: 'pair',
    accent: '#f59e0b',
    image: img3,
    termA: {
      name: 'Nguyên nhân',
      color: '#f59e0b',
      def: 'Là sự tác động lẫn nhau giữa các mặt, yếu tố trong một sự vật, hoặc giữa các sự vật với nhau, từ đó làm xuất hiện biến đổi nhất định.',
      example: 'Ôn tập đầy đủ, có phương pháp học đúng đắn là nguyên nhân dẫn đến điểm thi cao.',
    },
    termB: {
      name: 'Kết quả',
      color: '#34d399',
      def: 'Là biến đổi xuất hiện do sự tác động của nguyên nhân tạo ra.',
      example: 'Điểm thi cao là kết quả; điểm cao lại tạo ra học bổng — trở thành nguyên nhân mới.',
    },
    imageConcept: img3,
    relations: [
      'Nguyên nhân sinh ra kết quả: nguyên nhân bao giờ cũng xuất hiện trước kết quả.',
      'Một nguyên nhân có thể tạo ra nhiều kết quả khác nhau (mưa lớn → ngập nước, kẹt xe, thiệt hại kinh tế).',
      'Một kết quả có thể do nhiều nguyên nhân tạo thành (điểm thấp do học chưa đủ, mất tập trung, sức khỏe kém...).',
      'Kết quả có thể quay lại tác động vào nguyên nhân — mối quan hệ nhân — quả là vòng liên tục.',
    ],
    significance: 'Muốn giải quyết triệt để một vấn đề phải tìm đúng nguyên nhân gốc rễ, không chỉ xử lý phần "ngọn" — biểu hiện bên ngoài.',
  },
  {
    id: 3,
    eyebrow: 'Cặp phạm trù 3',
    title: 'Tất nhiên và Ngẫu nhiên',
    short: 'Quy luật',
    type: 'pair',
    accent: '#f472b6',
    image: img4,
    termA: {
      name: 'Tất nhiên',
      color: '#f472b6',
      def: 'Là phạm trù chỉ cái do nguyên nhân bên trong của bản thân sự vật quyết định — trong những điều kiện nhất định, nó nhất định phải xảy ra như thế.',
      example: 'Con người sinh ra, lớn lên rồi già đi là quy luật tất nhiên của sinh học.',
    },
    termB: {
      name: 'Ngẫu nhiên',
      color: '#34d399',
      def: 'Là cái không do mối liên hệ bản chất bên trong quyết định — nó có thể xảy ra hoặc không xảy ra, có thể xảy ra thế này hoặc thế khác.',
      example: 'Già nhanh hay chậm bị ảnh hưởng bởi môi trường, thói quen — đó là ngẫu nhiên.',
    },
    imageConcept: img4,
    relations: [
      'Tất nhiên và ngẫu nhiên không tách rời nhau: cái tất nhiên bao giờ cũng biểu hiện ra ngoài thông qua vô số cái ngẫu nhiên.',
      'Trong những điều kiện nhất định, cái ngẫu nhiên có thể chuyển hóa thành cái tất nhiên và ngược lại.',
      'Ví dụ: Gieo hạt vào đất đủ điều kiện thì nảy mầm (tất nhiên); bị chim ăn mất trước khi nảy mầm (ngẫu nhiên).',
    ],
    significance: 'Khi hành động phải dựa vào các quy luật tất yếu (xu hướng chủ đạo), đồng thời không được xem nhẹ những yếu tố ngẫu nhiên có thể ảnh hưởng đến kết quả.',
  },
  {
    id: 4,
    eyebrow: 'Cặp phạm trù 4',
    title: 'Nội dung và Hình thức',
    short: 'Thể hiện',
    type: 'pair',
    accent: '#fb923c',
    image: img5,
    termA: {
      name: 'Nội dung',
      color: '#fb923c',
      def: 'Là tổng hợp tất cả những mặt, yếu tố, quá trình tạo nên sự vật, hiện tượng.',
      example: 'Trong một cuốn sách, nội dung là toàn bộ kiến thức, tư tưởng, thông tin được truyền tải.',
    },
    termB: {
      name: 'Hình thức',
      color: '#34d399',
      def: 'Là phương thức tồn tại và biểu hiện của nội dung, là hệ thống các mối liên hệ tương đối bền vững giữa các yếu tố của nội dung.',
      example: 'Trong cuốn sách đó, bố cục, cách trình bày, ngôn ngữ... là hình thức.',
    },
    imageConcept: img5,
    relations: [
      'Nội dung quyết định hình thức: nội dung thay đổi thì hình thức cũng phải thay đổi theo.',
      'Hình thức tác động trở lại nội dung: hình thức phù hợp thúc đẩy, không phù hợp kìm hãm nội dung.',
      'Khi nội dung thay đổi đến mức nhất định sẽ đòi hỏi một hình thức mới phù hợp hơn.',
      'Ví dụ: Một bài giảng hay nhưng trình bày khó hiểu thì hiệu quả truyền đạt vẫn bị giảm sút.',
    ],
    significance: 'Phải quan tâm đúng mức đến cả nội dung lẫn hình thức — không chạy theo hình thức hào nhoáng mà bỏ bê nội dung; đồng thời cũng không coi nhẹ vai trò của hình thức.',
  },
  {
    id: 5,
    eyebrow: 'Cặp phạm trù 5',
    title: 'Bản chất và Hiện tượng',
    short: 'Cốt lõi',
    type: 'pair',
    accent: '#2dd4bf',
    image: img6,
    termA: {
      name: 'Bản chất',
      color: '#2dd4bf',
      def: 'Là tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định ở bên trong sự vật, quy định sự vận động và phát triển của sự vật đó.',
      example: 'Công ty tuyển dụng nhiều do đang mở rộng quy mô — đó là bản chất.',
    },
    termB: {
      name: 'Hiện tượng',
      color: '#fb923c',
      def: 'Là sự biểu hiện ra bên ngoài của bản chất trong những điều kiện xác định.',
      example: 'Nhìn thấy công ty liên tục đăng tin tuyển dụng — đó là hiện tượng quan sát được.',
    },
    imageConcept: img6,
    relations: [
      'Bản chất và hiện tượng thống nhất với nhau: bản chất bao giờ cũng biểu hiện ra thành hiện tượng, hiện tượng bao giờ cũng là biểu hiện của bản chất.',
      'Tuy nhiên hiện tượng không phản ánh đầy đủ bản chất — một bản chất biểu hiện qua nhiều hiện tượng, và hiện tượng đôi khi che đậy hoặc làm sai lệch bản chất.',
      'Ví dụ: Điểm thi thấp (hiện tượng) có thể che đậy bản chất thực là thiếu phương pháp học khoa học.',
    ],
    significance: 'Không được đánh giá sự vật chỉ qua vẻ bề ngoài (hiện tượng). Cần đi sâu tìm hiểu nguyên nhân nội tại, tìm ra bản chất đằng sau những biểu hiện bề mặt.',
  },
  {
    id: 6,
    eyebrow: 'Cặp phạm trù 6',
    title: 'Khả năng và Hiện thực',
    short: 'Phát triển',
    type: 'pair',
    accent: '#a78bfa',
    image: img7,
    termA: {
      name: 'Hiện thực',
      color: '#a78bfa',
      def: 'Là cái đang tồn tại trong thực tế, là kết quả của quá trình vận động phát triển từ những khả năng trước đó.',
      example: 'Một sinh viên hiện đang theo học đại học — đó là hiện thực.',
    },
    termB: {
      name: 'Khả năng',
      color: '#34d399',
      def: 'Là cái chưa tồn tại trong thực tế nhưng có những tiền đề, điều kiện để xuất hiện — nó sẽ trở thành hiện thực khi có đủ điều kiện cần thiết.',
      example: 'Sinh viên đó có khả năng tốt nghiệp loại giỏi nếu có kế hoạch và nỗ lực đúng hướng.',
    },
    imageConcept: img7,
    relations: [
      'Khả năng và hiện thực có quan hệ chặt chẽ, chuyển hóa lẫn nhau: khả năng + điều kiện → hiện thực mới → sinh ra khả năng mới.',
      'Cùng một sự vật ở những điều kiện khác nhau có thể chứa đựng nhiều khả năng khác nhau.',
      'Phân biệt khả năng thực (có đầy đủ tiền đề) và khả năng hình thức (chưa có điều kiện thực hiện).',
      'Ví dụ: Có việc làm (hiện thực) → có cơ hội thăng tiến và phát triển sự nghiệp (khả năng mới).',
    ],
    significance: 'Muốn biến khả năng thành hiện thực cần tích cực tạo ra những điều kiện phù hợp, đồng thời phát huy nhân tố chủ quan và nỗ lực hành động thực tiễn.',
  },
  {
    id: 7,
    eyebrow: 'Kết luận',
    title: 'Ý nghĩa phương pháp luận',
    short: 'Vận dụng',
    type: 'conclusion',
    accent: '#fbbf24',
    image: img7,
    summary: 'Sáu cặp phạm trù cơ bản của phép biện chứng duy vật phản ánh những mối liên hệ phổ biến nhất của thế giới khách quan. Các cặp phạm trù không tồn tại riêng rẽ mà luôn tác động và chuyển hóa lẫn nhau.',
    implications: [
      {
        icon: '🔭',
        title: 'Nhìn nhận toàn diện',
        desc: 'Xem xét sự vật từ nhiều chiều — bản chất lẫn hiện tượng, nội dung lẫn hình thức, hiện tại lẫn khả năng tương lai.',
      },
      {
        icon: '🧩',
        title: 'Tránh tư duy phiến diện',
        desc: 'Không đồng nhất hiện tượng với bản chất, không nhầm lẫn cái riêng với cái chung, không tuyệt đối hóa tất nhiên hay ngẫu nhiên.',
      },
      {
        icon: '🔎',
        title: 'Tìm nguyên nhân gốc rễ',
        desc: 'Khi giải quyết vấn đề phải truy tìm nguyên nhân thực sự, không chỉ xử lý biểu hiện bề ngoài.',
      },
      {
        icon: '🚀',
        title: 'Hành động thực tiễn hiệu quả',
        desc: 'Vận dụng hiểu biết về các phạm trù để dự báo xu hướng, đưa ra quyết định đúng đắn trong học tập, nghiên cứu và quản lý.',
      },
    ],
  },
];

const Theory = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState('next');

  const current = slides[active];

  const go = (index) => {
    if (index === active || animating) return;
    setDir(index > active ? 'next' : 'prev');
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setTimeout(() => setAnimating(false), 50);
    }, 280);
  };

  const goNext = () => active < slides.length - 1 && go(active + 1);
  const goPrev = () => active > 0 && go(active - 1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, animating]);

  const progress = ((active + 1) / slides.length) * 100;

  return (
    <div className="theory-wrap">
      <div className="theory-bg" style={{ backgroundImage: `url(${current.image})` }} />
      <div className="theory-overlay" />

      <div className="theory-sidebar">
        <div className="sidebar-logo">
          <BookOpen size={18} />
          <span>Triết học Mác–Lênin</span>
        </div>
        <nav className="sidebar-nav">
          {slides.map((s, i) => (
            <button
              key={i}
              className={`sidebar-item ${i === active ? 'active' : ''} ${i < active ? 'done' : ''}`}
              onClick={() => go(i)}
              style={i === active ? { '--accent': s.accent } : {}}
            >
              <span className="sitem-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="sitem-label">{s.short}</span>
              {i < active && <span className="sitem-check">✓</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-progress">
          <div className="prog-track">
            <div className="prog-fill" style={{ height: `${progress}%` }} />
          </div>
          <span className="prog-label">{active + 1} / {slides.length}</span>
        </div>
      </div>

      <main className="theory-main">
        <div className={`theory-card ${animating ? `exit-${dir}` : 'enter'}`}>
          {current.type === 'intro' && <IntroSlide slide={current} />}
          {current.type === 'pair' && <PairSlide slide={current} />}
          {current.type === 'conclusion' && <ConclusionSlide slide={current} />}
        </div>

        <div className="theory-controls">
          <button className="ctrl-btn" onClick={goPrev} disabled={active === 0}>
            <ChevronLeft size={22} />
          </button>
          <div className="ctrl-dots">
            {slides.map((_, i) => (
              <span key={i} className={`cdot ${i === active ? 'active' : ''}`} onClick={() => go(i)} />
            ))}
          </div>
          <button className="ctrl-btn" onClick={goNext} disabled={active === slides.length - 1}>
            <ChevronRight size={22} />
          </button>
        </div>
      </main>
    </div>
  );
};

const IntroSlide = ({ slide }) => (
  <div className="slide-intro">
    <div className="intro-left">
      <span className="slide-eyebrow" style={{ color: slide.accent }}>{slide.eyebrow}</span>
      <h1 className="slide-title">{slide.title}</h1>
      <p className="intro-definition">{slide.definition}</p>
      <ul className="intro-points">
        {slide.points.map((p, i) => (
          <li key={i} style={{ animationDelay: `${i * 0.12}s` }}>
            <span className="pt-icon">{p.icon}</span>
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="intro-right">
      <div className="intro-pairs-box">
        <p className="pairs-heading">6 Cặp phạm trù cơ bản</p>
        {slide.pairs.map((pair, i) => (
          <div key={i} className="pair-pill" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
            <span className="pill-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="pill-text">{pair}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PairSlide = ({ slide }) => (
  <div className="slide-pair">
    <div className="pair-header">
      <span className="slide-eyebrow" style={{ color: slide.accent }}>{slide.eyebrow}</span>
      <h1 className="slide-title">{slide.title}</h1>
    </div>
    <div className="pair-body">
      <div className="pair-defs">
        <TermCard term={slide.termA} />
        <div className="vs-divider">
          <GitMerge size={20} />
          <span>liên hệ</span>
        </div>
        <TermCard term={slide.termB} />
      </div>
      <div className="pair-right">
        {/* <div className="relations-block">
          <div className="block-head">
            <ArrowRight size={16} />
            <span>Mối quan hệ biện chứng</span>
          </div>
          <ul className="rel-list">
            {slide.relations.map((r, i) => (
              <li key={i} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <span className="rel-dot" style={{ background: slide.accent }} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="concept-image">
          <img src={slide.imageConcept} alt={slide.title} />
        </div>
        <div className="significance-block" style={{ borderColor: slide.accent + '55' }}>
          <Lightbulb size={18} style={{ color: slide.accent, flexShrink: 0, marginTop: 2 }} />
          <div>
            <p className="sig-label" style={{ color: slide.accent }}>Ý nghĩa phương pháp luận</p>
            <p className="sig-text">{slide.significance}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TermCard = ({ term }) => (
  <div className="term-card" style={{ '--term-color': term.color }}>
    <div className="term-badge" style={{ background: term.color + '22', color: term.color, border: `1px solid ${term.color}44` }}>
      {term.name}
    </div>
    <p className="term-def">{term.def}</p>
    <div className="term-example">
      <span className="ex-label">Ví dụ:</span>
      <span>{term.example}</span>
    </div>
  </div>
);

const ConclusionSlide = ({ slide }) => (
  <div className="slide-conclusion">
    <div className="conc-header">
      <span className="slide-eyebrow" style={{ color: slide.accent }}>{slide.eyebrow}</span>
      <h1 className="slide-title">{slide.title}</h1>
      <p className="conc-summary">{slide.summary}</p>
    </div>
    <div className="conc-grid">
      {slide.implications.map((imp, i) => (
        <div key={i} className="impl-card" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
          <span className="impl-icon">{imp.icon}</span>
          <p className="impl-title">{imp.title}</p>
          <p className="impl-desc">{imp.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Theory;