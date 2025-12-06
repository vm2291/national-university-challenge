import Footer from "@/components/Footer";
const CompetitionStructure = () => {
  return <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .competition-structure-body {
            font-family: 'Montserrat', sans-serif;
            background: hsl(40 30% 97%);
            color: hsl(25 45% 15%);
            line-height: 1.6;
            padding: 30px 20px;
            padding-top: 80px;
        }
        
        .competition-structure-container {
            max-width: 1100px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(147, 70, 11, 0.15);
            overflow: hidden;
        }
        
        .competition-structure-header {
            background: linear-gradient(135deg, hsl(40 30% 90%) 0%, hsl(35 45% 80%) 50%, hsl(40 30% 90%) 100%);
            color: #93460b;
            padding: 60px 50px 40px 50px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .competition-structure-header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(147, 70, 11, 0.15) 0%, transparent 70%);
            animation: pulse 15s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.1); opacity: 0.5; }
        }
        
        .competition-structure-header-content {
            position: relative;
            z-index: 1;
        }
        
        .competition-structure-logo-container {
            margin-bottom: 20px;
        }
        
        .competition-structure-logo-image {
            max-width: 400px;
            width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
            filter: drop-shadow(0 4px 8px rgba(147, 70, 11, 0.4));
        }
        
        .competition-structure-event-subtitle {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.2em;
            font-weight: 700;
            color: #93460b;
            margin-top: 15px;
            margin-bottom: 5px;
            letter-spacing: 1px;
        }
        
        .competition-structure-for-coordinators {
            display: inline-block;
            background: rgba(147, 70, 11, 0.9);
            color: #e7c796;
            padding: 8px 20px;
            border-radius: 25px;
            font-weight: 700;
            font-size: 0.9em;
            margin-top: 10px;
            letter-spacing: 1px;
            box-shadow: 0 2px 8px rgba(147, 70, 11, 0.3);
        }
        
        .competition-structure-content {
            padding: 50px;
        }
        
        .competition-structure-stage-section {
            margin-bottom: 50px;
            border-left: 5px solid #d4af37;
            padding-left: 30px;
            position: relative;
        }
        
        .competition-structure-stage-section::before {
            content: '';
            position: absolute;
            left: -10px;
            top: 0;
            width: 15px;
            height: 15px;
            background: #d4af37;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 3px #d4af37;
        }
        
        .competition-structure-stage-header {
            font-family: 'Montserrat', sans-serif;
            font-size: 2em;
            font-weight: 800;
            color: #3d2817;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .competition-structure-stage-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #3d2817 0%, #5a3a1f 100%);
            color: white;
            border-radius: 50%;
            font-size: 0.7em;
            font-weight: 900;
            box-shadow: 0 4px 15px rgba(61, 40, 23, 0.4);
        }
        
        .competition-structure-subsection {
            margin-bottom: 30px;
        }
        
        .competition-structure-subsection-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.4em;
            font-weight: 700;
            color: #2c3e50;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e8c875;
        }
        
        .competition-structure-info-box {
            background: linear-gradient(135deg, #f9f3d9 0%, #f4e5a8 100%);
            border-left: 4px solid #d4af37;
            padding: 20px 25px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
        }
        
        .competition-structure-info-box.brown {
            background: linear-gradient(135deg, #e8d5c9 0%, #d5c0b0 100%);
            border-left-color: #5a3a1f;
            box-shadow: 0 4px 12px rgba(90, 58, 31, 0.2);
        }
        
        .competition-structure-info-box.orange {
            background: linear-gradient(135deg, #ffecd9 0%, #f4d5b8 100%);
            border-left-color: #d4915a;
            box-shadow: 0 4px 12px rgba(212, 145, 90, 0.2);
        }
        
        .competition-structure-info-box ul {
            list-style: none;
            padding-left: 0;
        }
        
        .competition-structure-info-box ul li {
            padding: 8px 0;
            padding-left: 30px;
            position: relative;
        }
        
        .competition-structure-info-box ul li::before {
            content: '▸';
            position: absolute;
            left: 10px;
            color: #3d2817;
            font-weight: 900;
        }
        
        .competition-structure-info-box ul ul {
            margin-top: 10px;
            margin-left: 20px;
        }
        
        .competition-structure-info-box ul ul li::before {
            content: '◦';
            color: #d4af37;
        }
        
        .competition-structure-timing-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 20px 0;
        }
        
        .competition-structure-timing-card {
            background: white;
            border: 2px solid #e8c875;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .competition-structure-timing-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(61, 40, 23, 0.2);
        }
        
        .competition-structure-timing-label {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            color: #3d2817;
            font-size: 0.9em;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        
        .competition-structure-timing-value {
            font-size: 1.8em;
            font-weight: 900;
            color: #d4af37;
            font-family: 'Montserrat', sans-serif;
        }
        
        .competition-structure-timing-detail {
            font-size: 0.9em;
            color: #666;
            margin-top: 5px;
        }
        
        .competition-structure-timing-grid-3col {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .competition-structure-bracket-visual {
            background: linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%);
            padding: 25px;
            border-radius: 12px;
            margin: 20px 0;
            border: 2px solid #d4af37;
            font-family: 'Montserrat', sans-serif;
            overflow-x: auto;
        }
        
        .competition-structure-bracket-visual pre {
            margin: 0;
            font-size: 0.9em;
            line-height: 1.8;
            color: #2c3e50;
        }
        
        .competition-structure-highlight-box {
            background: linear-gradient(135deg, #d4915a 0%, #e8a870 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            margin: 25px 0;
            box-shadow: 0 8px 25px rgba(212, 145, 90, 0.4);
        }
        
        .competition-structure-highlight-box h3 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.8em;
            font-weight: 800;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .competition-structure-highlight-box ul {
            list-style: none;
            padding-left: 0;
        }
        
        .competition-structure-highlight-box ul li {
            padding: 10px 0;
            padding-left: 30px;
            position: relative;
            line-height: 1.7;
        }
        
        .competition-structure-highlight-box ul li::before {
            content: '⚡';
            position: absolute;
            left: 5px;
            color: #3d2817;
            font-weight: 900;
            font-size: 1.2em;
        }
        
        .competition-structure-highlight-box ul ul {
            margin-top: 10px;
            margin-left: 20px;
        }
        
        .competition-structure-highlight-box ul ul li::before {
            content: '•';
            color: #3d2817;
            font-size: 1em;
        }
        
        .competition-structure-sudden-death-box {
            background: rgba(61, 40, 23, 0.2);
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #3d2817;
            margin-top: 20px;
        }
        
        .competition-structure-sudden-death-box p {
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        .competition-structure-awards-section {
            background: #e7c595;
            color: #381200;
            padding: 40px;
            border-radius: 15px;
            margin: 30px 0;
            box-shadow: 0 8px 25px rgba(147, 70, 11, 0.2);
        }
        
        .competition-structure-awards-section h3 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.8em;
            font-weight: 800;
            margin-bottom: 20px;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #93460b;
        }
        
        .competition-structure-awards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 20px;
        }
        
        .competition-structure-award-card {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(10px);
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            border: 2px solid #93460b;
        }
        
        .competition-structure-award-card.full-width {
            grid-column: 1 / -1;
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
        }
        
        .competition-structure-award-icon {
            font-size: 2.5em;
            margin-bottom: 10px;
            display: block;
        }
        
        .competition-structure-award-title {
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            font-size: 1.2em;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #93460b;
        }
        
        .competition-structure-award-subtitle {
            font-size: 0.85em;
            color: #381200;
        }
        
        .competition-structure-summary-section {
            background: #e7c595;
            color: #381200;
            padding: 40px;
            margin-top: 50px;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(147, 70, 11, 0.3);
        }
        
        .competition-structure-summary-section h2 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2em;
            font-weight: 800;
            margin-bottom: 25px;
            text-align: center;
            color: #381200;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .competition-structure-summary-section ul {
            list-style: none;
            padding-left: 0;
        }
        
        .competition-structure-summary-section ul li {
            padding: 12px 0;
            padding-left: 35px;
            position: relative;
            line-height: 1.7;
            color: #381200;
        }
        
        .competition-structure-summary-section ul li::before {
            content: '⚡';
            position: absolute;
            left: 5px;
            color: #93460b;
            font-size: 1.2em;
        }
        
        .competition-structure-summary-section ul ul {
            margin-top: 10px;
            margin-left: 20px;
        }
        
        .competition-structure-summary-section ul ul li::before {
            content: '•';
            color: #93460b;
            font-size: 1em;
        }
        
        .competition-structure-footer {
            text-align: center;
            padding: 30px;
            background: #f5f7fa;
            color: #666;
            font-size: 0.9em;
        }
        
        .competition-structure-footer strong {
            color: #3d2817;
        }
        
        @media print {
            .competition-structure-body {
                background: white;
                padding: 0;
            }
            
            .competition-structure-container {
                box-shadow: none;
                border-radius: 0;
            }
            
            .competition-structure-stage-section {
                page-break-inside: avoid;
            }
        }
        
        @media (max-width: 768px) {
            .competition-structure-content {
                padding: 30px 25px;
            }
            
            .competition-structure-logo-image {
                max-width: 300px;
            }
            
            .competition-structure-stage-header {
                font-size: 1.5em;
            }
            
            .competition-structure-timing-grid {
                grid-template-columns: 1fr;
            }
            
            .competition-structure-timing-grid-3col {
                grid-template-columns: 1fr;
            }
            
            .competition-structure-awards-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
      <div className="competition-structure-body">
        <div className="competition-structure-container">
          <div className="competition-structure-header">
            <div className="competition-structure-header-content">
              <h1 style={{ fontSize: '2.5em', fontWeight: 800, marginBottom: '15px', color: '#93460b', letterSpacing: '2px' }}>
                COORDINATORS INFO
              </h1>
              <span className="competition-structure-for-coordinators">📋 Competition Structure for Coordinators</span>
            </div>
          </div>
          
          <div className="competition-structure-content">
            {/* STAGE 1 */}
            <div className="competition-structure-stage-section">
              <h2 className="competition-structure-stage-header">
                <span className="competition-structure-stage-number">1</span>
                Stage 1 — Qualifiers
              </h2>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">📝 Format</h3>
                <div className="competition-structure-info-box">
                  <ul>
                    <li><strong>Population:</strong> 35 students</li>
                    <li><strong>Answer Type:</strong> Written answers only; exact values required for all questions</li>
                    <li><strong>Presentation:</strong> One integral revealed at a time on projector; everyone works simultaneously under a central clock</li>
                    <li><strong>Integral Type:</strong> All Stage 1 questions are <strong>definite integrals</strong></li>
                  </ul>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">⏱️ Rounds and Timing</h3>
                <div className="competition-structure-timing-grid">
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Round A</div>
                    <div className="competition-structure-timing-value">24</div>
                    <div className="competition-structure-timing-detail">Minutes Total</div>
                    <div className="competition-structure-timing-detail">8 Definite Integrals</div>
                    <div className="competition-structure-timing-detail">3 min per integral</div>
                  </div>
                  
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Short Break</div>
                    <div className="competition-structure-timing-value">15</div>
                    <div className="competition-structure-timing-detail">Minutes</div>
                  </div>
                  
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Round B</div>
                    <div className="competition-structure-timing-value">24</div>
                    <div className="competition-structure-timing-detail">Minutes Total</div>
                    <div className="competition-structure-timing-detail">6 Definite Integrals</div>
                    <div className="competition-structure-timing-detail">4 min per integral</div>
                  </div>
                  
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Scoring</div>
                    <div className="competition-structure-timing-value">~30</div>
                    <div className="competition-structure-timing-detail">Minutes</div>
                    <div className="competition-structure-timing-detail">Top 16 advance</div>
                  </div>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">📊 Scoring System</h3>
                <div className="competition-structure-info-box brown">
                  <ul>
                    <li>Stage 1 scoring and ranking handled via <strong>Mentimeter</strong> (or equivalent electronic system)</li>
                    <li>System aggregates each student's performance across all Stage 1 questions and produces final ranking</li>
                    <li>We accept the Mentimeter ranking as-is for determining the <strong>Top 16</strong> and for seeding</li>
                    <li>Laptops and required hardware for scoring and display provided by <strong>NYUAD</strong> (for Stage 1 only)</li>
                    <li><strong>No need</strong> for students or coordinators to bring their own laptops</li>
                  </ul>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🎯 Seeding and Bracket Placement</h3>
                
                <div className="competition-structure-info-box orange">
                  <p><strong>Seeding:</strong></p>
                  <ul>
                    <li>Top 16 students labeled as seeds 1 to 16 (seed 1 = highest overall performance)</li>
                    <li>If two or more students tie exactly at critical boundary (e.g., for seed 16), a short tie-breaker may be used at organizers' discretion</li>
                  </ul>
                </div>
                
                <div className="competition-structure-bracket-visual">
                  <p><strong>Bracket Structure:</strong></p>
                  <pre>
                  {`Round of 16:
M₁: Seed 1 vs Seed 16        M₂: Seed 8 vs Seed 9
M₃: Seed 5 vs Seed 12        M₄: Seed 4 vs Seed 13
M₅: Seed 3 vs Seed 14        M₆: Seed 6 vs Seed 11
M₇: Seed 7 vs Seed 10        M₈: Seed 2 vs Seed 15

Quarterfinals:
QF1: Winner M₁ vs Winner M₂
QF2: Winner M₃ vs Winner M₄
QF3: Winner M₅ vs Winner M₆
QF4: Winner M₇ vs Winner M₈

Semifinals:
SF1: Winner QF1 vs Winner QF2
SF2: Winner QF3 vs Winner QF4

Championship:
Final: Winner SF1 vs Winner SF2`}
                  </pre>
                </div>
                
                <div className="competition-structure-info-box">
                  <p><strong>Important:</strong> The bracket is <strong>fixed</strong> — there is no reseeding between rounds.</p>
                </div>
              </div>
            </div>
            
            {/* STAGE 2 */}
            <div className="competition-structure-stage-section">
              <h2 className="competition-structure-stage-header">
                <span className="competition-structure-stage-number">2</span>
                Stage 2 — Round of 16
              </h2>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🎲 Format Overview</h3>
                <div className="competition-structure-info-box">
                  <ul>
                    <li><strong>16 students</strong>, playing as <strong>8 pairs</strong> (matches M₁ to M₈)</li>
                    <li>All 8 matches played in <strong>one wave, in parallel</strong></li>
                    <li><strong>Central clock and central reveal:</strong> same Card A shown to all, then Card B, then Card C</li>
                    <li><strong>Paper-based format:</strong> All answers submitted on paper</li>
                  </ul>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🃏 Cards and Timing</h3>
                <div className="competition-structure-timing-grid-3col">
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Card A</div>
                    <div className="competition-structure-timing-value">5</div>
                    <div className="competition-structure-timing-detail">Minutes</div>
                    <div className="competition-structure-timing-detail">1 Definite Integral</div>
                  </div>
                  
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Card B</div>
                    <div className="competition-structure-timing-value">5</div>
                    <div className="competition-structure-timing-detail">Minutes</div>
                    <div className="competition-structure-timing-detail">1 Definite Integral</div>
                  </div>
                  
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Card C</div>
                    <div className="competition-structure-timing-value">4</div>
                    <div className="competition-structure-timing-detail">Minutes</div>
                    <div className="competition-structure-timing-detail">1 Indefinite Integral</div>
                  </div>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">✅ Scoring and Advancement</h3>
                <div className="competition-structure-info-box brown">
                  <ul>
                    <li>Each card (A, B, C) marked by <strong>two judges</strong> assigned to that match</li>
                    <li>Marking according to shared marking scheme agreed upon in advance</li>
                    <li>Card A and Card B judged correct/incorrect as definite integrals</li>
                    <li>Card C judged as indefinite integral (structure and correctness of antiderivative)</li>
                    <li>Two judges mark each card independently, agree on total score, declare winner</li>
                  </ul>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">⚖️ Judging and Logistics</h3>
                <div className="competition-structure-info-box orange">
                  <ul>
                    <li>Each Round-of-16 match has <strong>two judges</strong> (e.g., one coordinator, one NYUAD representative)</li>
                    <li>Judges collect answer sheets after each card, mark them, and agree on scores and results</li>
                    <li>After Stage 2, <strong>8 winners</strong> progress to Quarterfinals (Stage 3)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* SUDDEN DEATH TIE-BREAKER */}
            <div className="competition-structure-highlight-box">
              <h3>⚡ Sudden Death Tie-Breaker Protocol</h3>
              <p style={{
              marginBottom: '15px',
              fontSize: '1.05em'
            }}>The same <strong>sudden death tie-breaker</strong> mechanism is used in <strong>Stages 2, 3, 4, and 5</strong> whenever a match score is tied.</p>
              <ul>
                <li><strong>All tie-breakers are DEFINITE INTEGRALS</strong></li>
                <li>A tie-breaker integral is revealed to the two tied competitors under the central clock</li>
                <li><strong>Time limit: 3 minutes (sudden death)</strong></li>
                <li>During the 3-minute window:
                  <ul style={{
                  marginTop: '10px',
                  marginLeft: '20px'
                }}>
                    <li>The <strong>first competitor to submit a correct answer wins immediately</strong></li>
                    <li>If neither competitor submits a correct answer within 3 minutes → tie remains</li>
                  </ul>
                </li>
                <li>If tie remains after one tie-breaker: <strong>new tie-breaker integral given</strong> (again with 3 minutes)</li>
                <li>Process repeats until one competitor submits the first correct answer</li>
              </ul>
              
              <div className="competition-structure-sudden-death-box">
                <p><strong>⚠️ Sudden Death Rules:</strong></p>
                <ul style={{
                marginTop: '10px'
              }}>
                  <li><strong>3-minute clock</strong> for each tie-breaker</li>
                  <li><strong>First correct answer wins</strong></li>
                  <li>If <strong>no correct answer</strong> within 3 minutes → start new tie-breaker</li>
                  <li>All tie-breakers use <strong>definite integrals</strong></li>
                  <li>Timing precision matters: judges must track submission order</li>
                </ul>
              </div>
            </div>
            
            {/* STAGE 3 */}
            <div className="competition-structure-stage-section">
              <h2 className="competition-structure-stage-header">
                <span className="competition-structure-stage-number">3</span>
                Stage 3 — Quarterfinals
              </h2>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🎲 Format Overview</h3>
                <div className="competition-structure-info-box">
                  <ul>
                    <li><strong>8 competitors</strong>, <strong>4 matches</strong> in parallel (QF1–QF4)</li>
                    <li>Central clock and central reveal: same sequence of cards shown to all remaining competitors</li>
                    <li><strong>Paper-based format:</strong> All answers submitted on paper</li>
                  </ul>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🃏 Cards and Timing</h3>
                <div className="competition-structure-timing-grid-3col">
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Card A</div>
                    <div className="competition-structure-timing-value">6</div>
                    <div className="competition-structure-timing-detail">Minutes</div>
                    <div className="competition-structure-timing-detail">1 Definite Integral</div>
                  </div>
                  
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Card B</div>
                    <div className="competition-structure-timing-value">5</div>
                    <div className="competition-structure-timing-detail">Minutes</div>
                    <div className="competition-structure-timing-detail">1 Indefinite Integral</div>
                  </div>
                  
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Card C</div>
                    <div className="competition-structure-timing-value">5</div>
                    <div className="competition-structure-timing-detail">Minutes</div>
                    <div className="competition-structure-timing-detail">1 Indefinite Integral</div>
                  </div>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">⚖️ Ties and Judging</h3>
                <div className="competition-structure-info-box brown">
                  <ul>
                    <li>If match tied after Cards A, B, and C, the <strong>sudden death tie-breaker</strong> procedure is used</li>
                    <li>Each match has <strong>two judges</strong>; they agree on scores and on whether an answer is correct</li>
                  </ul>
                </div>
                
                <div className="competition-structure-info-box orange">
                  <p><strong>🕐 Break and Lunch:</strong></p>
                  <ul>
                    <li>A <strong>30-minute break</strong> follows Stage 3</li>
                    <li><strong>Pizza lunch</strong> served from <strong>1:30 PM to 2:00 PM</strong></li>
                    <li>Semifinals (Stage 4) begin after lunch</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* STAGE 4 */}
            <div className="competition-structure-stage-section">
              <h2 className="competition-structure-stage-header">
                <span className="competition-structure-stage-number">4</span>
                Stage 4 — Semifinals
              </h2>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🎲 Format Overview</h3>
                <div className="competition-structure-info-box">
                  <ul>
                    <li><strong>4 competitors</strong>, <strong>2 matches</strong> in parallel (SF1 and SF2)</li>
                    <li>Central clock and central reveal; both tables receive same sequence of integrals</li>
                    <li><strong>Whiteboard-based format:</strong> Competitors work on whiteboards; answers visible to audience</li>
                  </ul>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🃏 Cards and Timing</h3>
                <div className="competition-structure-timing-grid">
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">3 Cards</div>
                    <div className="competition-structure-timing-value">6</div>
                    <div className="competition-structure-timing-detail">Minutes Each</div>
                    <div className="competition-structure-timing-detail">3 Indefinite Integrals</div>
                  </div>
                  
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">1 Card</div>
                    <div className="competition-structure-timing-value">6</div>
                    <div className="competition-structure-timing-detail">Minutes</div>
                    <div className="competition-structure-timing-detail">1 Improper Integral</div>
                    <div className="competition-structure-timing-detail" style={{
                    fontSize: '0.8em'
                  }}>(definite with infinite limit/singularity)</div>
                  </div>
                </div>
                
                <div className="competition-structure-info-box orange">
                  <p><strong>📌 From Semifinals Onward:</strong></p>
                  <ul>
                    <li>The constant of integration <strong>+C</strong> is expected in indefinite answers</li>
                    <li>For improper integral, proper limit notation and justification of convergence required for full credit</li>
                  </ul>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">✅ Scoring and Ties</h3>
                <div className="competition-structure-info-box brown">
                  <ul>
                    <li>Judges use internal marking scheme (with several score levels) for each card</li>
                    <li>Sum the four card scores to obtain match total</li>
                    <li>Competitor with higher total advances to Championship</li>
                    <li>If match tied after four cards, the <strong>sudden death tie-breaker</strong> procedure applied (3 minutes, definite integral)</li>
                  </ul>
                </div>
                
                <div className="competition-structure-info-box orange">
                  <p><strong>🕐 Break:</strong> A break (approximately <strong>30–40 minutes</strong>) follows Stage 4 before the Championship.</p>
                </div>
              </div>
            </div>
            
            {/* STAGE 5 */}
            <div className="competition-structure-stage-section">
              <h2 className="competition-structure-stage-header">
                <span className="competition-structure-stage-number">5</span>
                Stage 5 — Championship Match
              </h2>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🏆 Format Overview</h3>
                <div className="competition-structure-info-box">
                  <ul>
                    <li><strong>2 finalists</strong>, one match on the main board</li>
                    <li>Both competitors have whiteboards; central clock visible to audience and competitors</li>
                    <li>One card at a time revealed; both finalists work under same time limit</li>
                    <li><strong>Whiteboard-based format:</strong> Work shown live on whiteboards for audience engagement</li>
                  </ul>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🃏 Cards and Timing</h3>
                <div className="competition-structure-timing-grid">
                  <div className="competition-structure-timing-card">
                    <div className="competition-structure-timing-label">Championship</div>
                    <div className="competition-structure-timing-value">6</div>
                    <div className="competition-structure-timing-detail">Minutes Each</div>
                    <div className="competition-structure-timing-detail">4 Indefinite Integrals</div>
                  </div>
                </div>
                
                <div className="competition-structure-info-box brown">
                  <p><strong>Note:</strong> The Championship may consist of <strong>4 indefinite integrals</strong> OR <strong>3 indefinite + 1 definite integral</strong> (structure may vary slightly).</p>
                </div>
              </div>
              
              <div className="competition-structure-subsection">
                <h3 className="competition-structure-subsection-title">🎯 Ties and Closing</h3>
                <div className="competition-structure-info-box orange">
                  <ul>
                    <li>If Championship tied after four cards, one or more <strong>sudden death tie-breakers</strong> are played</li>
                    <li>Tie-breaker: <strong>3 minutes, definite integral, first correct answer wins</strong></li>
                    <li>After Championship (and any necessary tie-breakers), closing ceremony and winner declaration scheduled (e.g., around 4:00 PM)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* AWARDS SECTION */}
            <div className="competition-structure-awards-section">
              <h3>🏅 Competition Titles and Awards</h3>
              <div className="competition-structure-awards-grid">
                <div className="competition-structure-award-card">
                  <span className="competition-structure-award-icon">🥇</span>
                  <div className="competition-structure-award-title">The Grand Integrator</div>
                  <div className="competition-structure-award-subtitle">Championship Winner</div>
                </div>
                
                <div className="competition-structure-award-card">
                  <span className="competition-structure-award-icon">🥈</span>
                  <div className="competition-structure-award-title">Senior Integrator</div>
                  <div className="competition-structure-award-subtitle">Championship Runner-Up</div>
                </div>
                
                <div className="competition-structure-award-card full-width">
                  <span className="competition-structure-award-icon">🥉</span>
                  <div className="competition-structure-award-title">Semi Integrators</div>
                  <div className="competition-structure-award-subtitle">Semifinalists (2 competitors)</div>
                </div>
              </div>
            </div>
            
            {/* SUMMARY SECTION */}
            <div className="competition-structure-summary-section">
              <h2>📋 Summary for Coordinators</h2>
              <ul>
                <li><strong>Stage 1</strong> is fully written, fully definite, and entirely scored by Mentimeter. No rubrics or manual scoring rules needed from coordinators beyond ensuring answers entered correctly into system.</li>
                
                <li><strong>Stages 2–3</strong> are bracket-based elimination rounds with:
                  <ul style={{
                  marginTop: '10px',
                  marginLeft: '20px'
                }}>
                    <li>Clear match structure per stage</li>
                    <li>Central timing and simultaneous reveal of each card</li>
                    <li>Two judges per match</li>
                    <li><strong>Paper-based format</strong> — answers submitted on paper and marked by judges</li>
                    <li><strong>Sudden death tie-breaker protocol:</strong> 3 minutes, definite integral, first correct answer wins; if no correct answer, start new tie-breaker</li>
                  </ul>
                </li>
                
                <li><strong>Stages 4–5</strong> (Semifinals and Championship) use:
                  <ul style={{
                  marginTop: '10px',
                  marginLeft: '20px'
                }}>
                    <li><strong>Whiteboard-based format</strong> — competitors work on whiteboards visible to audience</li>
                    <li>Same timing and judging protocols as earlier stages</li>
                    <li>Enhanced audience engagement through visible work</li>
                  </ul>
                </li>
                
                <li><strong>Pizza lunch break</strong> from 1:30–2:00 PM after Stage 3 (Quarterfinals)</li>
                
                <li><strong>Laptops and hardware</strong> for scoring and display provided by NYUAD <strong>(Stage 1 only)</strong></li>
                
                <li><strong>Coordinators primarily needed to:</strong>
                  <ul style={{
                  marginTop: '10px',
                  marginLeft: '20px'
                }}>
                    <li>Accompany and support their students</li>
                    <li>Serve as judges/proctors in elimination stages (marking correctness and applying sudden death rules)</li>
                    <li>Track submission timing during sudden death tie-breakers</li>
                    <li>Help maintain calm, fair, and enjoyable environment throughout the day</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="competition-structure-footer">
            <p><strong>Takāmul Cup</strong> • Falcon's Talon Edition • December 7, 2025</p>
            <p>NYU Abu Dhabi • C2 West Forum • 9:00 AM – 5:00 PM (GST)</p>
          </div>
        </div>
      </div>
      <Footer />
    </>;
};
export default CompetitionStructure;