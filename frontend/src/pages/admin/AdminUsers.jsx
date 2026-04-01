import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Edit2, Check, X } from 'lucide-react';
import { getAdminUsers, updateAdminUser } from '../../api/api';
import { TableRowSkeleton } from '../../components/Skeletons';
import GlowButton from '../../components/GlowButton';
import toast from 'react-hot-toast';

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [saving, setSaving] = useState(false);

  const fetchUsers = (q = '') =>
    getAdminUsers(q)
      .then(r => {
        const fetchedUsers = r.data.users || r.data || [];
        
        // Filter remains just in case any old manual entries exist,
        // but now our primary data is clean from the DB seed.
        const blockedNames = ['gaurav', 'chinmay', 'dog', 'hailey', 'justin', 'full stack', 'mayur', 'prathamesh'];
        const cleanUsers = fetchedUsers.filter(u => {
            if (!u.name) return true;
            const lowerName = u.name.toLowerCase();
            return !blockedNames.some(blocked => lowerName.includes(blocked));
        });
        
        setUsers(cleanUsers);
      })
      .catch(() => {})
      .finally(() => setLoading(false));

  useEffect(() => { fetchUsers(); }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetchUsers(e.target.value);
  };

  const startEdit = (user) => {
    setEditing(user._id);
    setEditForm({ name: user.name, subscriptionStatus: user.subscriptionStatus, role: user.role });
  };

  const saveEdit = async (id) => {
    setSaving(true);
    try {
      await updateAdminUser(id, editForm);
      toast.success('User updated successfully');
      setEditing(null);
      fetchUsers(search);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Update failed');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.8rem', fontWeight: 700, marginBottom: 6, color: 'white', letterSpacing: '-0.02em' }}>Network Accounts</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage all authenticated integrations</p>
        </div>
        <span className="badge badge-blue" style={{ background: 'rgba(37,99,235,0.15)', color: '#60a5fa', border: '1px solid rgba(37,99,235,0.3)' }}>{users.length} Active Nodes</span>
      </motion.div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: 24, maxWidth: 400 }}>
        <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input type="text" value={search} onChange={handleSearch} placeholder="Search by identity or email..." className="glass-input" style={{ paddingLeft: 40 }} />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="glass-table">
            <thead>
              <tr>
                <th style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Identity</th>
                <th style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Network Address</th>
                <th style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Protocol</th>
                <th style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Status</th>
                <th style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Integration Date</th>
                <th style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Controls</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? Array.from({ length: 6 }).map((_, i) => <TableRowSkeleton key={i} cols={6} />)
                : users.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-muted)' }}>
                      <Users size={32} style={{ opacity: 0.2, display: 'block', margin: '0 auto 12px' }} />
                      No accounts located
                    </td>
                  </tr>
                ) : users.map((u) => (
                  <tr key={u._id}>
                    <td>
                      {editing === u._id ? (
                        <input value={editForm.name} onChange={e => setEditForm({ ...editForm, name: e.target.value })} className="glass-input" style={{ padding: '6px 10px', fontSize: '0.85rem' }} />
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', color: 'white', flexShrink: 0 }}>
                            {u.name?.[0]?.toUpperCase()}
                          </div>
                          <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{u.name}</span>
                        </div>
                      )}
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{u.email}</td>
                    <td>
                      {editing === u._id ? (
                        <select value={editForm.role} onChange={e => setEditForm({ ...editForm, role: e.target.value })} className="glass-input" style={{ padding: '6px 10px', fontSize: '0.85rem' }}>
                          <option value="user">User Node</option>
                          <option value="admin">System Admin</option>
                        </select>
                      ) : (
                        <span className={`badge ${u.role === 'admin' ? 'badge-blue' : 'badge-pending'}`} style={{ fontSize: '0.7rem' }}>
                          {u.role === 'admin' ? 'Sys Admin' : 'User Node'}
                        </span>
                      )}
                    </td>
                    <td>
                      {editing === u._id ? (
                        <select value={editForm.subscriptionStatus} onChange={e => setEditForm({ ...editForm, subscriptionStatus: e.target.value })} className="glass-input" style={{ padding: '6px 10px', fontSize: '0.85rem' }}>
                          <option value="active">Active</option>
                          <option value="inactive">Dormant</option>
                          <option value="expired">Terminated</option>
                        </select>
                      ) : (
                        <span className={`badge ${u.subscriptionStatus === 'active' ? 'badge-active' : 'badge-inactive'}`} style={{ fontSize: '0.7rem', padding: '4px 10px' }}>
                          {u.subscriptionStatus === 'active' ? '● Live' : '○ Dormant'}
                        </span>
                      )}
                    </td>
                    {/* Fixed: Now rendering actual database date */}
                    <td style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{new Date(u.createdAt).toLocaleDateString('en-GB')}</td>
                    <td>
                      {editing === u._id ? (
                        <div style={{ display: 'flex', gap: 6 }}>
                          <button onClick={() => saveEdit(u._id)} disabled={saving} style={{ background: 'rgba(5,150,105,0.2)', border: '1px solid rgba(5,150,105,0.3)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', color: '#10b981', display: 'flex', alignItems: 'center' }}>
                            <Check size={14} />
                          </button>
                          <button onClick={() => setEditing(null)} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', color: '#f87171', display: 'flex', alignItems: 'center' }}>
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => startEdit(u)} style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', color: '#60a5fa', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', fontWeight: 600 }}>
                          <Edit2 size={12} /> Configure
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}