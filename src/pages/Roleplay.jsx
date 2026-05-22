import { useState, useEffect } from 'react';
import { RefreshCcw, Target, Clock, ShieldAlert } from 'lucide-react';
import './Roleplay.css';

const initialMetrics = {
  tuDuyToanDien: 50,
  nhinBanChat: 50,
  phanTichNguyenNhan: 50,
  nhanThucQuyLuat: 50,
  khaNangPhatTrien: 50,
};

// Radar Chart Configuration
const metricsOrder = [
  { key: 'tuDuyToanDien', label: 'Toàn diện', color: '#3b82f6' },
  { key: 'nhinBanChat', label: 'Bản chất', color: '#a855f7' },
  { key: 'phanTichNguyenNhan', label: 'Nguyên nhân', color: '#f97316' },
  { key: 'nhanThucQuyLuat', label: 'Quy luật', color: '#10b981' },
  { key: 'khaNangPhatTrien', label: 'Phát triển', color: '#ef4444' }
];

import { questionBank } from '../data/questionBank';

const generateRun = () => {
  const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());
  const easy = shuffle(questionBank.easy).slice(0, 3);
  const medium = shuffle(questionBank.medium).slice(0, 4);
  const hard = shuffle(questionBank.hard).slice(0, 3);
  return [...easy, ...medium, ...hard];
};

const getDynamicTimeLimit = (levelIndex) => {
  if (levelIndex < 3) return 30; // Dễ
  if (levelIndex < 6) return 25; // Vừa
  if (levelIndex < 9) return 20; // Khó
  return 15; // Cực khó (Câu 10)
};

const RadarChart = ({ data }) => {
  const size = 260;
  const center = size / 2;
  const radius = (size / 2) - 30;

  const getPoints = (scale = 1, values = null) => {
    return metricsOrder.map((m, i) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const valueScale = values ? values[m.key] / 100 : scale;
      const x = center + radius * valueScale * Math.cos(angle);
      const y = center + radius * valueScale * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <div className="radar-wrapper">
      <svg viewBox={`0 0 ${size} ${size}`} className="radar-svg">
        <defs>
          <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.45)" />
            <stop offset="100%" stopColor="rgba(167, 139, 250, 0.35)" />
          </linearGradient>
          <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        {[1, 0.66, 0.33].map((s, idx) => (
          <polygon key={idx} points={getPoints(s)} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        ))}
        {metricsOrder.map((m, i) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          return (
            <line key={i} x1={center} y1={center} x2={center + radius * Math.cos(angle)} y2={center + radius * Math.sin(angle)} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          );
        })}
        <polygon 
          points={getPoints(1, data)} 
          fill="url(#radarFill)" 
          stroke="url(#radarStroke)" 
          strokeWidth="2.5" 
          className="radar-polygon"
        />
        {metricsOrder.map((m, i) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          const val = data[m.key] / 100;
          return (
            <circle key={i} cx={center + radius * val * Math.cos(angle)} cy={center + radius * val * Math.sin(angle)} r="4" fill={m.color} className="radar-dot" />
          );
        })}
        {metricsOrder.map((m, i) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          const x = center + (radius + 20) * Math.cos(angle);
          const y = center + (radius + 15) * Math.sin(angle);
          return (
            <text key={i} x={x} y={y} fill={m.color} fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" filter="drop-shadow(0 0 4px rgba(0,0,0,0.8))">
              {m.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const Roleplay = () => {
  const [scenarios, setScenarios] = useState(generateRun());
  const [currentScenario, setCurrentScenario] = useState(0);
  const [metrics, setMetrics] = useState(initialMetrics);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [timeLeft, setTimeLeft] = useState(getDynamicTimeLimit(0));

  const playSound = (type) => {};

  useEffect(() => {
    if (timeLeft > 0 && !feedback && !gameOver) {
      const timerId = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !feedback && !gameOver) {
      handleTimeout();
    }
  }, [timeLeft, feedback, gameOver]);

  const handleTimeout = () => {
    playSound('error');
    const newMetrics = { ...metrics };
    Object.keys(newMetrics).forEach((key) => {
      newMetrics[key] = Math.max(0, newMetrics[key] - 15);
    });
    setMetrics(newMetrics);
    
    setFeedback({
      tone: 'error',
      msg: 'HẾT GIỜ! Sự chậm trễ của bạn phải trả giá bằng điểm số. Đời sinh viên không chờ đợi ai!',
    });

    setTimeout(() => {
      moveToNext();
    }, 2800);
  };

  const handleOptionSelect = (option) => {
    playSound(option.tone === 'success' ? 'success' : 'click');
    const newMetrics = { ...metrics };
    Object.entries(option.effect || {}).forEach(([key, value]) => {
      newMetrics[key] = Math.min(100, Math.max(0, newMetrics[key] + value));
    });

    setMetrics(newMetrics);
    setFeedback(option);

    setTimeout(() => {
      moveToNext();
    }, 2800);
  };

  const moveToNext = () => {
    setFeedback(null);
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario((prev) => {
        const next = prev + 1;
        setTimeLeft(getDynamicTimeLimit(next));
        return next;
      });
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setScenarios(generateRun());
    setCurrentScenario(0);
    setMetrics(initialMetrics);
    setGameOver(false);
    setFeedback(null);
    setTimeLeft(getDynamicTimeLimit(0));
  };

  const getEvaluation = () => {
    const avg = Object.values(metrics).reduce((a, b) => a + b, 0) / 5;
    if (avg >= 75) {
      return {
        badge: 'diamond',
        title: 'Thủ Khoa Triết Học',
        desc: 'Đỉnh cao! Bạn tư duy sắc bén, nhìn thấu bản chất và sinh tồn xuất sắc qua 4 năm đại học.',
      };
    }
    if (avg >= 55) {
      return {
        badge: 'gold',
        title: 'Sinh Viên Tiềm Năng',
        desc: 'Khá tốt! Bạn có hiểu biết triết học nhưng đôi khi còn để tình cảm hoặc sự ngẫu nhiên chi phối.',
      };
    }
    return {
      badge: 'rust',
      title: 'Hiệp Sĩ Nợ Môn',
      desc: 'Nguy hiểm! Góc nhìn hạn hẹp và thiếu chuẩn bị. Đề nghị bạn quay lại nghe bài thuyết trình lập tức!',
    };
  };

  const scenario = scenarios[currentScenario];
  const isDanger = timeLeft <= 3 && !feedback && !gameOver;
  const progressPct = ((currentScenario + 1) / scenarios.length) * 100;
  const difficultyMeta =
    currentScenario < 3
      ? { label: 'Dễ', className: 'difficulty-easy' }
      : currentScenario < 6
        ? { label: 'Vừa', className: 'difficulty-medium' }
        : currentScenario < 9
          ? { label: 'Khó', className: 'difficulty-hard' }
          : { label: 'Cực khó', className: 'difficulty-extreme' };

  return (
    <div className="roleplay-page animate-fade-in dark-glass-theme">
      <div className="background-effects" aria-hidden="true">
        <span className="bg-shape shape-one" />
        <span className="bg-shape shape-two" />
        <span className="bg-shape shape-three" />
      </div>

      <div className="container roleplay-container">
        <div className="roleplay-header delay-100">
          <span className="glass-badge hologram-effect">
            <Target size={16} className="glow-icon" /> Trò Chơi Sinh Tồn
          </span>
          <h1 className="text-gradient">Sinh Viên và Các Phạm Trù</h1>
          <p>Mỗi quyết định đều có hậu quả. Khó khăn tăng dần theo từng cấp học!</p>
        </div>

        <div className="roleplay-layout">
          <aside className="metrics-panel glass-panel delay-200">
            <h3>Hồ Sơ Năng Lực</h3>
            <p className="metrics-panel-sub">5 phạm trù triết học — theo dõi real-time</p>
            <RadarChart data={metrics} />
            
            <div className="metrics-note hologram-box">
              <ShieldAlert size={18} style={{ flexShrink: 0 }} />
              <small>Năng lực thay đổi Real-time dựa theo quyết định của bạn.</small>
            </div>
          </aside>

          <section className="scenario-panel glass-panel delay-300">
            {gameOver ? (
              <div className="game-over animate-fade-in">
                <div className={`badge-3d badge-${getEvaluation().badge}`}>
                  <div className="badge-inner"></div>
                </div>
                <h2 className="text-gradient">{getEvaluation().title}</h2>
                <p className="final-desc">{getEvaluation().desc}</p>
                
                <div className="final-scores">
                  {metricsOrder.map(m => (
                     <div key={m.key} className="score-item">
                       <span style={{color: m.color, fontWeight: 600}}>{m.label}:</span> 
                       <strong>{metrics[m.key]}/100</strong>
                     </div>
                  ))}
                </div>

                <button className="glass-btn btn-primary-glow" onClick={resetGame}>
                  <RefreshCcw size={18} /> Chơi lại từ năm Nhất
                </button>
              </div>
            ) : (
              <div className="scenario-content">
                <div className="scenario-header">
                  <div className="scenario-header-badges">
                    <span className="neon-badge">
                      Thử thách {currentScenario + 1}/{scenarios.length}
                    </span>
                    <span className={`difficulty-badge ${difficultyMeta.className}`}>
                      {difficultyMeta.label}
                    </span>
                  </div>
                  <div className={`timer-box ${isDanger ? 'timer-danger' : ''}`}>
                    <Clock size={20} /> 00:{timeLeft.toString().padStart(2, '0')}
                  </div>
                </div>

                <div className="rp-progress-wrap">
                  <div className="rp-progress-label">
                    <span>Tiến độ hành trình</span>
                    <span>{Math.round(progressPct)}%</span>
                  </div>
                  <div className="rp-progress-track">
                    <div className="rp-progress-fill" style={{ width: `${progressPct}%` }} />
                  </div>
                  
                </div>

                <h2 className="scenario-title">{scenario.title}</h2>
                <p className="scenario-desc">{scenario.description}</p>

                {feedback ? (
                  <div className={`feedback-box animate-fade-in neon-${feedback.tone}`}>
                    <p>{feedback.msg}</p>
                  </div>
                ) : (
                  <div className="options-list">
                    {scenario.options.map((option, idx) => (
                      <button 
                        key={idx} 
                        className="option-btn glass-option hologram-btn" 
                        onClick={() => handleOptionSelect(option)}
                        style={{ animationDelay: `${idx * 0.12}s` }}
                      >
                        <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                        <span className="btn-scanline" aria-hidden="true" />
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Roleplay;
