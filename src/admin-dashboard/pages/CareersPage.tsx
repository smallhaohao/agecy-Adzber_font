/**
 * 职位申请管理页面
 * 显示用户提交的职位申请，支持按地区、状态筛选和查看详情
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface CareerApplication {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  notes: string;
  region: string;
  resumeUrl?: string;
  status: string;
  createdAt: string;
}

interface CareerListResponse {
  applications: CareerApplication[];
  total: number;
  page: number;
  pageSize: number;
}

const CareersPage: React.FC = () => {
  const { token } = useAuth();
  const [data, setData] = useState<CareerListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<CareerApplication | null>(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, [page, statusFilter, regionFilter]);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: '10',
      });
      
      if (statusFilter) {
        params.append('status', statusFilter);
      }
      
      if (regionFilter) {
        params.append('region', regionFilter);
      }

      const response = await fetch(`/api/admin/career-applications?${params}`, {
        headers: {
          'Authorization': token || '',
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        }
      }
    } catch (error) {
      console.error('Failed to fetch career applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: { [key: string]: { bg: string; text: string; label: string } } = {
      'pending': { bg: 'bg-yellow-100', text: 'text-yellow-800', label: '待审核' },
      'reviewing': { bg: 'bg-blue-100', text: 'text-blue-800', label: '审核中' },
      'interviewed': { bg: 'bg-purple-100', text: 'text-purple-800', label: '已面试' },
      'accepted': { bg: 'bg-green-100', text: 'text-green-800', label: '已录用' },
      'rejected': { bg: 'bg-red-100', text: 'text-red-800', label: '已拒绝' },
    };
    
    const config = statusConfig[status] || statusConfig['pending'];
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN');
  };

  const updateApplicationStatus = async (id: string, newStatus: string) => {
    setUpdateLoading(true);
    try {
      const response = await fetch(`/api/admin/career-applications/${id}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': token || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();
      if (result.success) {
        // 刷新列表
        await fetchApplications();
        // 更新选中的申请状态
        if (selectedApplication && selectedApplication.id === id) {
          setSelectedApplication({
            ...selectedApplication,
            status: newStatus
          });
        }
        alert('状态更新成功');
      } else {
        alert(result.message || '状态更新失败');
      }
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('网络错误，请重试');
    } finally {
      setUpdateLoading(false);
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm('确定要删除这个申请记录吗？')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/career-applications/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token || '',
        },
      });

      const result = await response.json();
      if (result.success) {
        // 刷新列表
        await fetchApplications();
        // 关闭详情弹窗
        if (selectedApplication && selectedApplication.id === id) {
          setSelectedApplication(null);
        }
        alert('删除成功');
      } else {
        alert(result.message || '删除失败');
      }
    } catch (error) {
      console.error('Failed to delete application:', error);
      alert('网络错误，请重试');
    }
  };

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 筛选器 */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              状态筛选
            </label>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="block w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">全部</option>
              <option value="pending">待审核</option>
              <option value="reviewing">审核中</option>
              <option value="interviewed">已面试</option>
              <option value="accepted">已录用</option>
              <option value="rejected">已拒绝</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              地区筛选
            </label>
            <select
              value={regionFilter}
              onChange={(e) => {
                setRegionFilter(e.target.value);
                setPage(1);
              }}
              className="block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">全部地区</option>
              <option value="北京">北京</option>
              <option value="上海">上海</option>
              <option value="深圳">深圳</option>
              <option value="杭州">杭州</option>
              <option value="广州">广州</option>
              <option value="远程工作">远程工作</option>
            </select>
          </div>
          <div className="flex-1"></div>
          <div className="text-sm text-gray-500">
            共 {data?.total || 0} 条记录
          </div>
        </div>
      </div>

      {/* 申请列表 */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {data?.applications.map((application) => (
            <li key={application.id}>
              <div 
                className="px-4 py-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedApplication(application)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-purple-600 truncate">
                        {application.firstName} {application.lastName}
                      </p>
                      {getStatusBadge(application.status)}
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          📧 {application.email}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          📍 {application.region}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        📅 {formatDate(application.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 分页 */}
      {data && data.total > 10 && (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 rounded-lg shadow">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              上一页
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= Math.ceil(data.total / 10)}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              下一页
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                显示第 <span className="font-medium">{(page - 1) * 10 + 1}</span> 到{' '}
                <span className="font-medium">{Math.min(page * 10, data.total)}</span> 条，
                共 <span className="font-medium">{data.total}</span> 条记录
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  上一页
                </button>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  {page}
                </span>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page >= Math.ceil(data.total / 10)}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  下一页
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* 详情弹窗 */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">申请详情</h3>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">姓名</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedApplication.firstName} {selectedApplication.lastName}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">邮箱</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedApplication.email}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                    <a 
                      href={selectedApplication.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-blue-600 hover:text-blue-800"
                    >
                      {selectedApplication.linkedin}
                    </a>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">申请地区</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedApplication.region}</p>
                  </div>
                </div>
                
                {selectedApplication.resumeUrl && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">简历</label>
                    <a 
                      href={selectedApplication.resumeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-blue-600 hover:text-blue-800"
                    >
                      查看简历文件
                    </a>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">申请说明</label>
                  <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{selectedApplication.notes}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">状态</label>
                    <div className="mt-1">{getStatusBadge(selectedApplication.status)}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">申请时间</label>
                    <p className="mt-1 text-sm text-gray-900">{formatDate(selectedApplication.createdAt)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;