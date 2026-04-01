import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import GlowButton from '../components/GlowButton';
import { Trophy, Target, Heart, Shield, FileText, ArrowUpRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="page-bg" style={{ position: 'relative', overflowX: 'hidden' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero-section" style={{ position: 'relative', padding: '140px 24px 80px', textAlign: 'center', zIndex: 10 }}>
        <div className="orb orb-cyan" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', background: 'rgba(37, 99, 235, 0.15)' }} />
        <div className="orb orb-blue" style={{ width: 800, height: 600, top: 100, left: -300, background: 'rgba(245, 158, 11, 0.1)' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px',
              background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: 99, color: '#f59e0b', fontSize: '0.8rem', fontWeight: 600,
              letterSpacing: '0.05em', marginBottom: 32,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 8px #f59e0b' }} />
              Platform is Live
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24, color: '#ffffff' }}
          >
            Transform Your Game <br />
            Into <span style={{ color: '#f59e0b' }}>Global Impact</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto 48px', lineHeight: 1.6 }}
          >
            ImpactDrive is a premium subscription platform that transforms your latest performance scores into entries for massive monthly draws, while actively funding vital global charities.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <GlowButton size="lg" onClick={() => navigate('/register')} style={{ padding: '0 40px', height: 56, fontSize: '1.05rem', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}>
              Join the Mission
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* ── BENTO BOX SHOWCASE ── */}
      <section className="landing-section" style={{ padding: '0 24px 120px', position: 'relative', zIndex: 20 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} className="bento-grid">

            {/* Top Left */}
            <motion.div variants={fadeUp} className="bento-card bento-col-4" style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: 'auto' }}>
                <Target size={24} style={{ color: '#059669', marginBottom: 16 }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: 8 }}>Performance Tracking</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>Securely log your 5 latest scoring rounds via our intelligent dashboard.</p>
              </div>
              <div style={{ marginTop: 32, background: 'rgba(255,255,255,0.02)', borderRadius: 16, padding: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                {[36, 42, 38].map((score, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: i !== 2 ? 12 : 0 }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', width: 20 }}>{i + 1}</div>
                    <div style={{ height: 6, flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(score / 45) * 100}%`, background: 'linear-gradient(90deg, #059669, #2563eb)', borderRadius: 3 }} />
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#f8fafc', fontWeight: 600 }}>{score}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Center: The Draw Engine */}
            <motion.div variants={fadeUp} className="bento-card bento-col-8" style={{ padding: 0, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ padding: '32px 32px 0', zIndex: 10, position: 'relative' }}>
                <Trophy size={24} style={{ color: '#2563eb', marginBottom: 16 }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: 8 }}>Automated Reward Engine</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 400 }}>Matches are computed using our provably fair algorithmic engine. Match 3, 4, or 5 metrics to claim the reward pool.</p>
              </div>
              <div style={{ position: 'relative', flex: 1, minHeight: 200, overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', bottom: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />
                <div style={{ display: 'flex', gap: 12, position: 'relative', zIndex: 10, paddingBottom: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {[12, 24, 31, 38, 45].map((n, i) => (
                    <div key={i} style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(145deg, rgba(37,99,235,0.2), rgba(10,15,28,0.8))', border: '1px solid rgba(37,99,235,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bottom Row */}
            <motion.div variants={fadeUp} className="bento-card bento-col-4" style={{ padding: 32 }}>
              <Heart size={24} style={{ color: '#059669', marginBottom: 16 }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: 8 }}>Charity Impact</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 24 }}>A guaranteed percentage of every subscription automatically funds verified causes.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Global Water', 'Youth Education', '+ Verified NGOs'].map(c => (
                  <span key={c} style={{ background: 'rgba(5,150,105,0.1)', color: '#10b981', padding: '4px 10px', borderRadius: 99, fontSize: '0.75rem', border: '1px solid rgba(5,150,105,0.2)' }}>{c}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bento-card bento-col-4" style={{ padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Shield size={32} style={{ color: '#f59e0b', marginBottom: 16, opacity: 0.9 }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: 8 }}>Secure & Verified</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>All prize distributions undergo strict administrative review before capital deployment.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bento-card bento-col-4" style={{ padding: 32 }}>
              <FileText size={24} style={{ color: '#2563eb', marginBottom: 16 }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: 8 }}>Transparent Ledgers</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 24 }}>Real-time analytics on network volume, subscriber counts, and charitable yield.</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255,255,255,0.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Current Yield</span>
                <span style={{ fontSize: '0.9rem', color: '#f59e0b', fontWeight: 700 }}>£12,450.00</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="landing-section" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 20 }}>
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600, color: 'white' }}>The Protocol</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 12, maxWidth: 500, margin: '12px auto 0', lineHeight: 1.6 }}>Three simple steps to enter the draw engine and start making a real impact.</p>
        </motion.div>

        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="bento-grid">
          {[
            { step: '01', icon: Shield, title: 'Network Entry', desc: 'Join the platform and select your verified charity. A set percentage of your capital is deployed directly to them.' },
            { step: '02', icon: Target, title: 'Data Input', desc: 'Log your 5 latest performance metrics via the dashboard. We automatically index your most recent data for the engine.' },
            { step: '03', icon: Trophy, title: 'Reward Distribution', desc: 'Match your metrics against our monthly algorithmic draw. Match 3, 4, or 5 data points to claim capital.' }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bento-card bento-col-4" style={{ padding: 40, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ color: 'rgba(255,255,255,0.05)', fontSize: '4.5rem', fontWeight: 800, lineHeight: 1, position: 'absolute', top: 16, right: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.step}</div>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color: '#60a5fa' }}>
                <item.icon size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: 12 }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PRIZES ── */}
      <section id="prizes" className="landing-section" style={{ padding: '100px 24px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 20 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600, color: 'white' }}>Reward Tiers</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12, maxWidth: 500, margin: '12px auto 0', lineHeight: 1.6 }}>The aggregate capital pool is distributed mathematically based on metric matches.</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="bento-grid">
            {[
              { match: '5-Metric Match', share: '40%', color: '#f59e0b', label: 'Maximum Yield (Rollover supported)', glow: 'rgba(245,158,11,0.1)' },
              { match: '4-Metric Match', share: '35%', color: '#2563eb', label: 'Tier II Distribution', glow: 'rgba(37,99,235,0.1)' },
              { match: '3-Metric Match', share: '25%', color: '#059669', label: 'Tier III Distribution', glow: 'rgba(5,150,105,0.1)' },
            ].map(tier => (
              <motion.div key={tier.match} variants={fadeUp} className="bento-card bento-col-4" style={{ padding: 40, textAlign: 'center', background: `radial-gradient(circle at center 0%, ${tier.glow} 0%, transparent 60%)` }}>
                <div style={{ color: tier.color, fontSize: '3rem', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16 }}>{tier.share}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'white', marginBottom: 8 }}>{tier.match}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{tier.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CHARITIES ── */}
      <section id="charities" className="landing-section" style={{ padding: '120px 24px', maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 20 }}>
        <div className="bento-grid charities-grid" style={{ alignItems: 'center' }}>
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="bento-col-5 charities-text" style={{ paddingRight: 40 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, color: 'white', marginBottom: 24, lineHeight: 1.1 }}>
              Transparent <br /><span style={{ color: '#f59e0b' }}>Global Impact</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 24 }}>
              When you enter the network, you're not just participating for yield. You mandate exactly which verified organization receives your deployed capital.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 40 }}>
              Monitor our transparent ledgers in real-time as the community drives significant volume to front-line infrastructure.
            </p>
            <GlowButton onClick={() => navigate('/register')} variant="ghost" style={{ borderColor: '#f59e0b', color: '#f59e0b' }}>View Beneficiaries</GlowButton>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="bento-col-7" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { name: 'Global Water Initiative', raised: '£34,200', pct: 72, color: '#2563eb' },
              { name: 'Youth Education Fund', raised: '£28,500', pct: 60, color: '#f59e0b' },
              { name: 'Medical Research Group', raised: '£21,800', pct: 46, color: '#059669' },
            ].map(c => (
              <motion.div key={c.name} variants={fadeUp} className="bento-card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, gap: 8, flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: 600, fontSize: '1rem', color: 'white' }}>{c.name}</div>
                  <div style={{ color: c.color, fontWeight: 700, fontSize: '1rem' }}>{c.raised}</div>
                </div>
                <div style={{ height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${c.pct}%` }} transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }}
                    style={{ height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${c.color}, ${c.color}99)`, boxShadow: `0 0 12px ${c.color}66` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="landing-section" style={{ padding: '100px 24px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 20 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 600, color: 'white' }}>Access Tiers</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12, maxWidth: 500, margin: '12px auto 0', lineHeight: 1.6 }}>Select the capital allocation model that fits your operational goals.</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="bento-grid">
            {/* Monthly */}
            <motion.div variants={fadeUp} className="bento-card bento-col-4" style={{ padding: 48, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 16 }}>Standard Access</h3>
              <div style={{ fontSize: '3rem', color: 'white', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8 }}>
                £9.99<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/mo</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 32 }}>Optimal for initial network integration.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', gap: 16, display: 'flex', flexDirection: 'column', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: '#059669' }}>✓</span> 1 Draw Execution/mo</li>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: '#059669' }}>✓</span> 10% Charity Deployment</li>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: '#059669' }}>✓</span> Analytics Dashboard</li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <GlowButton variant="ghost" style={{ width: '100%', minHeight: 48 }} onClick={() => navigate('/register')}>Initialize Protocol</GlowButton>
              </div>
            </motion.div>

            {/* Yearly (Highlighted) */}
            <motion.div variants={fadeUp} className="bento-card bento-col-4" style={{ padding: 48, display: 'flex', flexDirection: 'column', background: 'linear-gradient(145deg, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0.01) 100%)', borderColor: 'rgba(37,99,235,0.3)' }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: 'white', padding: '4px 16px', borderBottomLeftRadius: 8, borderBottomRightRadius: 8, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Optimal Yield</div>
              <h3 style={{ fontSize: '1.25rem', color: '#60a5fa', fontWeight: 600, marginBottom: 16 }}>Annual Enterprise</h3>
              <div style={{ fontSize: '3rem', color: 'white', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8 }}>
                £99.99<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/yr</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 32 }}>Secure 12 months of consecutive network access.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', gap: 16, display: 'flex', flexDirection: 'column', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: '#3b82f6' }}>✓</span> 12 Consecutive Executions</li>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: '#3b82f6' }}>✓</span> Guaranteed 10% Allocation</li>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: '#3b82f6' }}>✓</span> Priority Node Access</li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <GlowButton style={{ width: '100%', minHeight: 48 }} onClick={() => navigate('/register')}>Secure Annual Contract</GlowButton>
              </div>
            </motion.div>

            {/* Pro Plus */}
            <motion.div variants={fadeUp} className="bento-card bento-col-4" style={{ padding: 48, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 16 }}>Premium Node</h3>
              <div style={{ fontSize: '3rem', color: 'white', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8 }}>
                £19.99<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/mo</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 32 }}>For users requiring maximum charitable impact.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', gap: 16, display: 'flex', flexDirection: 'column', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: '#f59e0b' }}>✓</span> Full Standard Access</li>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: '#f59e0b' }}>✓</span> 20% Charity Deployment</li>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: '#f59e0b' }}>✓</span> Verified Genesis Badge</li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <GlowButton variant="ghost" style={{ width: '100%', minHeight: 48, borderColor: '#f59e0b', color: '#f59e0b' }} onClick={() => navigate('/register')}>Upgrade to Premium</GlowButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section style={{ padding: '80px 16px 120px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="bento-card cta-box"
          style={{ maxWidth: 800, margin: '0 auto', padding: '80px 48px', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, transparent 70%)' }}
        >
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: 16, color: 'white' }}>
            Ready to initialize?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Integrate with the platform that maximizes the value of your performance and funds the causes you prioritize.
          </p>
          <GlowButton size="lg" onClick={() => navigate('/register')} style={{ padding: '0 40px', height: 56, fontSize: '1.05rem' }}>
            Establish Connection <ArrowUpRight size={18} style={{ marginLeft: 8 }} />
          </GlowButton>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 16px', textAlign: 'center', background: '#0a0f1c' }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          © 2026 ImpactDrive Core Protocol
        </div>
      </footer>
    </div>
  );
}