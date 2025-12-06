import Footer from "@/components/Footer";
const EventStructure = () => {
  return <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        
        @page {
          size: A4;
          margin: 1.5cm;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .event-structure-body {
          font-family: 'Montserrat', sans-serif;
          background: hsl(40 30% 97%);
          color: hsl(25 45% 15%);
          padding: 20px;
          padding-top: 80px;
          line-height: 1.6;
        }
        
        .event-structure-container {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(147, 70, 11, 0.15);
          overflow: hidden;
        }
        
        .event-structure-header {
          background: linear-gradient(135deg, hsl(40 30% 90%) 0%, hsl(35 45% 80%) 50%, hsl(40 30% 90%) 100%);
          color: #93460b;
          padding: 60px 50px 40px 50px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .event-structure-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(147, 70, 11, 0.15) 0%, transparent 70%);
          animation: event-structure-pulse 15s ease-in-out infinite;
        }
        
        @keyframes event-structure-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        
        .event-structure-header-content {
          position: relative;
          z-index: 1;
        }
        
        .event-structure-logo-container {
          margin-bottom: 20px;
        }
        
        .event-structure-logo-image {
          max-width: 400px;
          width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
          filter: drop-shadow(0 4px 8px rgba(147, 70, 11, 0.4));
        }
        
        .event-structure-event-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2em;
          font-weight: 700;
          color: #93460b;
          margin-top: 15px;
          margin-bottom: 5px;
          letter-spacing: 1px;
        }
        
        .event-structure-content {
          padding: 50px;
        }
        
        .event-structure-section {
          margin-bottom: 30px;
          page-break-inside: avoid;
        }
        
        .event-structure-section-title {
          background: linear-gradient(135deg, #e7c796 0%, #ddb879 100%);
          color: #93460b;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 15px;
          page-break-after: avoid;
        }
        
        .event-structure-subsection-title {
          color: #93460b;
          font-size: 1.2em;
          font-weight: bold;
          margin: 20px 0 10px 0;
          border-bottom: 2px solid #e7c796;
          padding-bottom: 5px;
          page-break-after: avoid;
        }
        
        .event-structure-info-box {
          background: linear-gradient(135deg, #faf6ef 0%, #f5ead8 100%);
          border-left: 4px solid #93460b;
          padding: 15px;
          margin: 15px 0;
          border-radius: 5px;
          page-break-inside: avoid;
        }
        
        .event-structure-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin: 20px 0;
          page-break-inside: avoid;
        }
        
        .event-structure-stat-box {
          background: linear-gradient(135deg, #faf6ef 0%, #f5ead8 100%);
          border: 2px solid #e7c796;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
        }
        
        .event-structure-stat-box .event-structure-number {
          font-size: 2em;
          color: #93460b;
          font-weight: bold;
        }
        
        .event-structure-stat-box .event-structure-label {
          color: #5a3a1f;
          margin-top: 5px;
          font-size: 0.9em;
        }
        
        .event-structure-ascii-diagram {
          background: linear-gradient(135deg, #faf6ef 0%, #f5ead8 100%);
          border: 2px solid #e7c796;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.85em;
          line-height: 1.4;
          white-space: pre;
          overflow-x: auto;
          color: hsl(25 45% 15%);
          page-break-inside: avoid;
        }
        
        .event-structure-schedule-table-wrapper {
          width: 100%;
          margin: 20px 0;
        }
        
        .event-structure-schedule-table {
          width: 100%;
          border-collapse: collapse;
          page-break-inside: auto;
        }
        
        .event-structure-schedule-table th {
          background: linear-gradient(135deg, #e7c796 0%, #ddb879 100%);
          color: #93460b;
          padding: 12px;
          text-align: left;
          font-weight: bold;
          border: 1px solid #e7c796;
        }
        
        .event-structure-schedule-table td {
          padding: 10px 12px;
          border: 1px solid #e7c796;
          background: white;
        }
        
        .event-structure-schedule-table tr {
          page-break-inside: avoid;
        }
        
        .event-structure-schedule-table tr:nth-child(even) td {
          background: #faf6ef;
        }
        
        .event-structure-time-col {
          color: #93460b;
          font-weight: bold;
          white-space: nowrap;
        }
        
        .event-structure-content ul, .event-structure-content ol {
          margin-left: 25px;
          margin-top: 10px;
        }
        
        .event-structure-content li {
          margin: 8px 0;
          color: hsl(25 45% 15%);
        }
        
        .event-structure-highlight {
          color: #93460b;
          font-weight: bold;
        }
        
        .event-structure-university-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin: 15px 0;
          page-break-inside: avoid;
        }
        
        .event-structure-university-item {
          background: linear-gradient(135deg, #faf6ef 0%, #f5ead8 100%);
          padding: 10px;
          border-radius: 5px;
          border-left: 3px solid #93460b;
          font-size: 0.95em;
        }
        
        .event-structure-university-item.full-width {
          grid-column: 1 / -1;
        }
        
        .event-structure-awards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 20px 0;
          page-break-inside: avoid;
        }
        
        .event-structure-award-box {
          background: linear-gradient(135deg, #faf6ef 0%, #f5ead8 100%);
          border: 3px solid #e7c796;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }
        
        .event-structure-award-box.champion {
          grid-column: 1 / -1;
          background: linear-gradient(135deg, #93460b 0%, #b85a15 100%);
          color: white;
          border-color: #93460b;
          border-width: 4px;
        }
        
        .event-structure-award-title {
          font-size: 1.5em;
          color: #93460b;
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        .event-structure-award-box.champion .event-structure-award-title {
          color: #e7c796;
          font-size: 1.8em;
        }
        
        .event-structure-award-prize {
          font-size: 2em;
          color: #93460b;
          font-weight: bold;
          margin: 10px 0;
        }
        
        .event-structure-award-box.champion .event-structure-award-prize {
          color: white;
        }
        
        .event-structure-award-items {
          color: #5a3a1f;
          margin-top: 10px;
        }
        
        .event-structure-award-box.champion .event-structure-award-items {
          color: #e7c796;
          opacity: 0.95;
        }
        
        .event-structure-page-break {
          page-break-before: always;
        }
        
        .event-structure-personnel-list {
          margin: 15px 0;
        }
        
        .event-structure-personnel-item {
          background: linear-gradient(135deg, #faf6ef 0%, #f5ead8 100%);
          padding: 12px 15px;
          margin: 8px 0;
          border-radius: 5px;
          border-left: 3px solid #93460b;
        }
        
        .event-structure-personnel-name {
          color: #93460b;
          font-weight: bold;
        }
        
        .event-structure-personnel-role {
          color: #5a3a1f;
          font-size: 0.95em;
        }
        
        @media (max-width: 768px) {
          .event-structure-body {
            padding: 10px;
            padding-top: 80px;
          }
          
          .event-structure-container {
            border-radius: 10px;
          }
          
          .event-structure-header {
            padding: 30px 20px 25px 20px;
          }
          
          .event-structure-header h1 {
            font-size: 1.8em !important;
            letter-spacing: 1px !important;
            margin-bottom: 10px !important;
          }
          
          .event-structure-event-subtitle {
            font-size: 1em;
            margin-top: 10px;
            margin-bottom: 3px;
          }
          
          .event-structure-content {
            padding: 20px 15px;
          }
          
          .event-structure-section-title {
            font-size: 1.2em;
            padding: 10px 15px;
          }
          
          .event-structure-subsection-title {
            font-size: 1.1em;
          }
          
          .event-structure-stats-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          
          .event-structure-university-list {
            grid-template-columns: 1fr;
          }
          
          .event-structure-awards-grid {
            grid-template-columns: 1fr;
          }
          
          .event-structure-award-box.champion {
            grid-column: 1;
          }
          
          .event-structure-schedule-table-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin: 20px -15px;
            padding: 0 15px;
          }
          
          .event-structure-schedule-table {
            min-width: 600px;
          }
          
          .event-structure-schedule-table th,
          .event-structure-schedule-table td {
            padding: 8px 10px;
            font-size: 0.9em;
          }
          
          .event-structure-time-col {
            font-size: 0.85em;
            white-space: nowrap;
          }
          
          .event-structure-ascii-diagram {
            font-size: 0.75em;
            padding: 15px;
            overflow-x: auto;
          }
          
          .event-structure-info-box {
            padding: 12px;
            font-size: 0.95em;
          }
        }
        
        @media (max-width: 480px) {
          .event-structure-body {
            padding: 5px;
            padding-top: 80px;
          }
          
          .event-structure-header {
            padding: 20px 15px 20px 15px;
          }
          
          .event-structure-header h1 {
            font-size: 1.5em !important;
          }
          
          .event-structure-content {
            padding: 15px 10px;
          }
          
          .event-structure-section-title {
            font-size: 1.1em;
            padding: 8px 12px;
          }
        }
        
        @media print {
          .event-structure-body {
            padding: 0;
            background: white;
          }
          .event-structure-section {
            page-break-inside: avoid;
          }
        }
      `}</style>
      <div className="event-structure-body">
        <div className="event-structure-container">
          <div className="event-structure-header">
            <div className="event-structure-header-content">
              <h1 style={{ fontSize: '2.5em', fontWeight: 800, marginBottom: '15px', color: '#93460b', letterSpacing: '2px' }}>
                EVENT DETAILS
              </h1>
              <p className="event-structure-event-subtitle">NYU Abu Dhabi • December 7, 2025</p>
              <p className="event-structure-event-subtitle">9:00 AM – 5:00 PM (GST)</p>
            </div>
          </div>
          
          <div className="event-structure-content">
            <div className="event-structure-section">
              <div className="event-structure-subsection-title">Competition Structure</div>
              <ul>
                <li><span className="event-structure-highlight">Stage 1 (Qualifiers):</span> All 35 participants → Select TOP 16</li>
                <li><span className="event-structure-highlight">Stage 2 (Round of 16):</span> TOP 16 → 8 head-to-head matches → TOP 8</li>
                <li><span className="event-structure-highlight">Stage 3 (Quarterfinals):</span> TOP 8 → 4 matches → TOP 4</li>
                <li><span className="event-structure-highlight">Stage 4 (Semifinals):</span> TOP 4 → 2 matches on whiteboards → TOP 2</li>
                <li><span className="event-structure-highlight">Stage 5 (Championship):</span> TOP 2 → Grand Final on whiteboard → CHAMPION</li>
              </ul>
            </div>
            
            <div className="event-structure-page-break"></div>
            
            <div className="event-structure-section">
              <div className="event-structure-section-title">COMPETITION FLOW DIAGRAM</div>
              
              <div className="event-structure-subsection-title">STAGE 1: QUALIFIERS (10:00 - 11:10 AM)</div>
              <div className="event-structure-info-box">
                <strong>Format:</strong> Written qualifying round to determine TOP 16<br />
                <strong>Participants:</strong> All 35 official competitors<br />
                <strong>Location:</strong> Main competition venue
              </div>
              <div className="event-structure-ascii-diagram">
              {`ALL 35 PARTICIPANTS
     ↓
ROUND A (8 problems × 3:00 each = 24 min)
     ↓
[Short Break - 15 minutes]
     ↓
ROUND B (6 problems × 4:00 each = 24 min)
     ↓
[Scoring - 7 minutes]
     ↓
TOP 16 SELECTED & SEEDED (#1 through #16)`}
              </div>
              
              <div className="event-structure-subsection-title">BRACKET ROUNDS: STAGES 2-5</div>
              
              <div className="event-structure-info-box" style={{
              marginTop: '20px'
            }}>
                <strong>STAGE 2: ROUND OF 16 (11:20 AM - 12:05 PM)</strong><br />
                <strong>Format:</strong> 8 simultaneous head-to-head matches (paper-based)<br />
                <strong>Cards:</strong> 3 cards per match (5, 5, 4 minutes)<br />
                <strong>Advancement:</strong> Winner of each match proceeds
              </div>
              <div className="event-structure-ascii-diagram">
              {`ROUND OF 16 → 8 MATCHES SIMULTANEOUSLY



Match 1: Seed #1  vs Seed #16  →  Winner A

Match 2: Seed #8  vs Seed #9   →  Winner B

Match 3: Seed #5  vs Seed #12  →  Winner C

Match 4: Seed #4  vs Seed #13  →  Winner D

Match 5: Seed #3  vs Seed #14  →  Winner E

Match 6: Seed #6  vs Seed #11  →  Winner F

Match 7: Seed #7  vs Seed #10  →  Winner G

Match 8: Seed #2  vs Seed #15  →  Winner H



                    ↓
              TOP 8 ADVANCE
                    ↓
        [Grading & Short Break - 30 minutes]`}
              </div>
              
              <div className="event-structure-info-box" style={{
              marginTop: '20px'
            }}>
                <strong>STAGE 3: QUARTERFINALS (12:35 - 1:20 PM)</strong><br />
                <strong>Format:</strong> 4 simultaneous matches (paper-based)<br />
                <strong>Cards:</strong> 3 cards per match (6, 5, 5 minutes)<br />
                <strong>Note:</strong> Lunch break AFTER this stage
              </div>
              <div className="event-structure-ascii-diagram">
              {`QUARTERFINALS → 4 MATCHES SIMULTANEOUSLY



QF Match 1: Winner A  vs  Winner B  →  QF Winner 1

QF Match 2: Winner C  vs  Winner D  →  QF Winner 2

QF Match 3: Winner E  vs  Winner F  →  QF Winner 3

QF Match 4: Winner G  vs  Winner H  →  QF Winner 4



                    ↓
              TOP 4 ADVANCE
                    ↓
          [LUNCH BREAK & GRADING: 1:20 - 2:20 PM]`}
              </div>
              
              <div className="event-structure-info-box" style={{
              marginTop: '20px'
            }}>
                <strong>STAGE 4: SEMIFINALS (2:20 - 3:20 PM)</strong><br />
                <strong>Format:</strong> 2 matches on WHITEBOARDS (visible to audience!)<br />
                <strong>Cards:</strong> 4 cards per match (6 minutes each)<br />
                <strong>Special:</strong> Live problem-solving, audience can watch
              </div>
              <div className="event-structure-ascii-diagram">
              {`SEMIFINALS → 2 MATCHES ON WHITEBOARDS



SF Match 1: QF Winner 1  vs  QF Winner 2  →  SF Winner 1
                                                (FINALIST 1)



SF Match 2: QF Winner 3  vs  QF Winner 4  →  SF Winner 2
                                                (FINALIST 2)



                    ↓
              TOP 2 ADVANCE
                    ↓
          [Brief Break: 3:20 - 3:35 PM]`}
              </div>
              
              <div className="event-structure-info-box" style={{
              marginTop: '20px'
            }}>
                <strong>STAGE 5: CHAMPIONSHIP MATCH (3:35 - 4:20 PM)</strong><br />
                <strong>Format:</strong> THE GRAND FINALE on WHITEBOARD<br />
                <strong>Cards:</strong> 4 indefinite integrals (6 minutes each)<br />
                <strong>Stakes:</strong> Winner becomes THE GRAND INTEGRATOR 🥇
              </div>
              <div className="event-structure-ascii-diagram">
              {`👑 CHAMPIONSHIP MATCH 👑



FINALIST 1  vs  FINALIST 2



4 Indefinite Integrals

(6 minutes each)



Live on Whiteboard

Full Audience Viewing



              ↓
    THE GRAND INTEGRATOR
         (CHAMPION)
              &
    SENIOR INTEGRATOR
       (RUNNER-UP)`}
              </div>
            </div>
            
            <div className="event-structure-page-break"></div>
            
            <div className="event-structure-section">
              <div className="event-structure-section-title">MASTER EVENT SCHEDULE</div>
              
              <div className="event-structure-schedule-table-wrapper">
                <table className="event-structure-schedule-table">
                <thead>
                  <tr>
                    <th style={{
                    width: '20%'
                  }}>Time</th>
                    <th style={{
                    width: '30%'
                  }}>Activity</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="event-structure-time-col">8:30 - 9:00 AM</td>
                    <td><strong>Arrivals & Pre-Registration</strong></td>
                    <td>Competitors and supporters arrive on campus</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">9:00 - 9:30 AM</td>
                    <td><strong>Registration & Breakfast</strong></td>
                    <td>Official registration, light breakfast, welcome refreshments</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">9:30 - 9:45 AM</td>
                    <td><strong>Opening Remarks</strong></td>
                    <td>Dr. Francesco Arneodo, Dean of Science, NYUAD</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">9:45 - 10:00 AM</td>
                    <td><strong>Welcome Remarks, Briefing & Logistical Structure</strong></td>
                    <td>Dr. Dania Zantout (Executive Director & Founder, Takãmul Cup) and Narek Galstian (Math SIG President, NYUAD)</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">10:00 - 10:24 AM</td>
                    <td><strong>STAGE 1: Qualifiers - Round A</strong></td>
                    <td>8 problems (3 minutes each)</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">10:24 - 10:39 AM</td>
                    <td><strong>Short Break</strong></td>
                    <td>15-minute break between rounds</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">10:39 - 11:03 AM</td>
                    <td><strong>STAGE 1: Qualifiers - Round B</strong></td>
                    <td>6 problems (4 minutes each)</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">11:03 - 11:10 AM</td>
                    <td><strong>Scoring</strong></td>
                    <td>Scoring in progress</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">11:10 - 11:20 AM</td>
                    <td><strong>Bracket Announcement & Short Break</strong></td>
                    <td>TOP 16 qualifiers and tournament seeding announced</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">11:20 AM - 12:05 PM</td>
                    <td><strong>STAGE 2: Round of 16</strong></td>
                    <td>8 head-to-head matches (paper-based) → TOP 8 advance</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">12:05 - 12:35 PM</td>
                    <td><strong>Grading & Short Break</strong></td>
                    <td>30-minute break for grading and transition</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">12:35 - 1:20 PM</td>
                    <td><strong>STAGE 3: Quarterfinals</strong></td>
                    <td>4 matches (paper-based) → TOP 4 advance</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">1:20 - 2:20 PM</td>
                    <td><strong>🍕 LUNCH BREAK & GRADING</strong></td>
                    <td>Pizza lunch for all participants, coordinators, and key personnel</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">2:20 - 3:20 PM</td>
                    <td><strong>STAGE 4: Semifinals</strong></td>
                    <td>2 matches on WHITEBOARDS (live, audience viewing) → TOP 2 finalists</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">3:20 - 3:35 PM</td>
                    <td><strong>Pre-Championship Break</strong></td>
                    <td>Final preparations, build excitement!</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">3:35 - 4:20 PM</td>
                    <td><strong>👑 STAGE 5: Championship Match</strong></td>
                    <td>THE GRAND FINALE on whiteboard</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">4:20 - 5:00 PM</td>
                    <td><strong>Awards Ceremony</strong></td>
                    <td>Dr. Hisham Sati (Associate Dean for Student Success and Curricular Affairs, NYUAD)<br />Grand Championship: Grand Integrator, Senior Integrator, and Semi Integrators</td>
                  </tr>
                  <tr>
                    <td className="event-structure-time-col">5:00 PM</td>
                    <td><strong>Event Conclusion</strong></td>
                    <td>Thank you and safe travels!</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            
            <div className="event-structure-page-break"></div>
            
            <div className="event-structure-section">
              <div className="event-structure-section-title">KEY PERSONNEL</div>
              
              <div className="event-structure-personnel-list">
                <div className="event-structure-personnel-item">
                  <div className="event-structure-personnel-name">Dr. Dania Zantout</div>
                  <div className="event-structure-personnel-role">Founding & Executive Director, Takãmul Cup | Science Division, Mathematics Program, NYU Abu Dhabi</div>
                </div>
                
                <div className="event-structure-personnel-item">
                  <div className="event-structure-personnel-name">Narek Galstian</div>
                  <div className="event-structure-personnel-role">Math SIG President, NYUAD | Master of Ceremonies</div>
                </div>
                
                <div className="event-structure-personnel-item">
                  <div className="event-structure-personnel-name">Dr. Karam Fayad</div>
                  <div className="event-structure-personnel-role">Head Judge</div>
                </div>
                
                <div className="event-structure-personnel-item">
                  <div className="event-structure-personnel-name">Proctors</div>
                  <div className="event-structure-personnel-role">Ensure timing, fair play, and monitor competition rounds</div>
                </div>
                
                <div className="event-structure-personnel-item">
                  <div className="event-structure-personnel-name">Scoring Team</div>
                  <div className="event-structure-personnel-role">Coordinators from participating universities with NYUAD team</div>
                </div>
              </div>
            </div>
            
            <div className="event-structure-section">
              <div className="event-structure-section-title">AWARDS & RECOGNITION</div>
              
              <div className="event-structure-subsection-title">Award Ceremony Order</div>
              
              <div className="event-structure-awards-grid">
                <div className="event-structure-award-box champion">
                  <div className="event-structure-award-title">🥇 THE GRAND INTEGRATOR</div>
                  <div className="event-structure-award-prize">Championship Winner</div>
                  <div className="event-structure-award-items">
                    Certificate + Amazon Voucher Prize + T-shirt
                  </div>
                </div>
                
                <div className="event-structure-award-box">
                  <div className="event-structure-award-title">🥈 SENIOR INTEGRATOR</div>
                  <div className="event-structure-award-prize">Championship Runner-Up</div>
                  <div className="event-structure-award-items">
                    Certificate + Amazon Voucher Prize + T-shirt
                  </div>
                </div>
                
                <div className="event-structure-award-box">
                  <div className="event-structure-award-title">🥉 SEMI INTEGRATORS</div>
                  <div className="event-structure-award-prize">Semifinalists (2 places)</div>
                  <div className="event-structure-award-items">
                    Certificate + Amazon Voucher Prize + T-shirt
                  </div>
                </div>
              </div>
              
              <div className="event-structure-info-box" style={{
              marginTop: '30px'
            }}>
                <strong>Additional Recognition:</strong>
                <ul style={{
                marginTop: '10px'
              }}>
                  <li>All 35 official competitors receive <strong>Certificate of Participation + T-shirt</strong></li>
                  <li>TOP 16 qualifiers recognized during bracket announcement</li>
                  <li>TOP 8 quarterfinalists acknowledged during ceremony</li>
                  <li>Group photo with all participants</li>
                  <li>Event photos shared with all participating universities</li>
                </ul>
              </div>
            </div>
            
            <div className="event-structure-page-break"></div>
            
            <div className="event-structure-section" style={{
            marginTop: '40px',
            textAlign: 'center',
            color: '#93460b'
          }}>
              <p style={{
              fontSize: '1.2em',
              fontWeight: 'bold'
            }}>🦅 Takãmul Cup - Falcon's Talon Edition 🦅</p>
              <p style={{
              marginTop: '10px'
            }}>Inaugural National UAE Integration Bee Championship</p>
              <p>December 7, 2025 | NYU Abu Dhabi</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>;
};
export default EventStructure;