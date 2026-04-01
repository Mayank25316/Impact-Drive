import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Target, Heart, Trophy, Users,
  Dice5, BarChart2, LogOut, X, Menu, Globe
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';

const userLinks = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Overview', end: true },
  { to: '/dashboard/scores', icon: Target, label: 'My Scores' },
  { to: '/dashboard/charity', icon: Heart, label: 'Charity' },
  { to: '/dashboard/winnings', icon: Trophy, label: 'Winnings' },
];

const adminLinks = [
  { to: '/admin', icon: LayoutDashboard, label: 'Overview', end: true },
  { to: '/admin/users', icon: Users, label: 'Users' },
  { to: '/admin/draw', icon: Dice5, label: 'Draw Control' },
  { to: '/admin/charities', icon: Heart, label: 'Charities' },
  { to: '/admin/winners', icon: Trophy, label: 'Winners' },
  { to: '/admin/analytics', icon: BarChart2, label: 'Analytics' },
];

export default function Sidebar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const links = user?.role === 'admin' ? adminLinks : userLinks;

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  useEffect(() => { setDrawerOpen(false); }, [location.pathname]);

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  const SidebarContent = ({ inDrawer = false }) => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Premium Logo Section */}
      <div style={{ padding: inDrawer ? '24px 20px 16px' : '28px 24px 20px', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: 'linear-gradient(135deg, #2563eb, #f59e0b)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)',
          }}>
            <Globe size={22} color="white" />
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: 'white', fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
              Impact<span style={{ color: '#f59e0b' }}>Drive</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {user?.role === 'admin' ? 'Admin Portal' : 'Member Hub'}
            </div>
          </div>
        </div>
        {inDrawer && (
          <button onClick={() => setDrawerOpen(false)} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, color: 'var(--text-secondary)', cursor: 'pointer', padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 36, minHeight: 36 }}>
            <X size={18} />
          </button>
        )}
      </div>

      {/* User Info */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', color: 'white', flexShrink: 0 }}>
            {user?.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {user?.name || 'User'}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>
              {user?.subscriptionStatus === 'active'
                ? <span className="badge badge-active" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>● Active</span>
                : <span className="badge badge-inactive" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>● Inactive</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Nav links */}
      <nav style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, paddingLeft: 8 }}>
          Navigation
        </div>
        {links.map(({ to, icon: Icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div style={{ padding: '16px', borderTop: '1px solid var(--glass-border)' }}>
        <button
          onClick={handleLogout}
          className="sidebar-link"
          style={{ width: '100%', background: 'none', border: 'none', color: '#f87171' }}
        >
          <LogOut size={18} />
          <span>Secure Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="sidebar desktop-sidebar">
        <SidebarContent />
      </div>

      {/* Mobile Topbar */}
      <div className="mobile-topbar">
        <button className="mobile-topbar-btn" onClick={() => setDrawerOpen(true)}>
          <Menu size={22} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg, #2563eb, #f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Globe size={16} color="white" />
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'white' }}>
            Impact<span style={{ color: '#f59e0b' }}>Drive</span>
          </span>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', color: 'white' }}>
          {user?.name?.[0]?.toUpperCase() || 'U'}
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)', zIndex: 59 }}
            />
            <motion.div
              key="drawer" initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'fixed', top: 0, left: 0, bottom: 0, width: 280, zIndex: 60, background: 'var(--bg-primary)', borderRight: '1px solid var(--glass-border)' }}
            >
              <SidebarContent inDrawer />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Tab */}
      {user?.role !== 'admin' && (
        <nav className="mobile-tabbar">
          {userLinks.map(({ to, icon: Icon, label, end }) => {
            const isActive = end ? location.pathname === to : location.pathname.startsWith(to);
            return (
              <NavLink key={to} to={to} end={end} className="mobile-tab" style={{ color: isActive ? '#2563eb' : 'var(--text-muted)' }}>
                <div className="mobile-tab-icon" style={{ background: isActive ? 'rgba(37, 99, 235, 0.1)' : 'transparent', borderRadius: 10 }}>
                  <Icon size={20} />
                </div>
                <span className="mobile-tab-label" style={{ color: isActive ? '#2563eb' : 'var(--text-muted)' }}>{label}</span>
              </NavLink>
            );
          })}
        </nav>
      )}
    </>
  );
}