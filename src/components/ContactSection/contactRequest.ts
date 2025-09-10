/**
 * 联系表单API请求处理
 * 处理表单提交的网络请求
 */

import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { isSubmittingAtom, submitResultAtom } from './contactForm';
import type { ContactForm, ApiResponse } from '../../shared/types';

export const useContactSubmit = () => {
  const [, setIsSubmitting] = useAtom(isSubmittingAtom);
  const [, setSubmitResult] = useAtom(submitResultAtom);

  const submitContact = useCallback(async (formData: ContactForm) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const url = `/api/contacts`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setSubmitResult({
          success: true,
          message: result.message || '提交成功！'
        });
        return true;
      } else {
        setSubmitResult({
          success: false,
          message: result.message || '提交失败，请稍后重试'
        });
        return false;
      }
    } catch (error) {
      console.error('Submit contact error:', error);
      setSubmitResult({
        success: false,
        message: '网络错误，请检查网络连接后重试'
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [setIsSubmitting, setSubmitResult]);

  return { submitContact };
};
