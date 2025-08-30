/**
 * 联系表单状态管理
 * 使用 jotai 管理表单数据和提交状态
 */

import { atom } from 'jotai';
import type { ContactForm } from '../../shared/types';

export const contactFormDataAtom = atom<ContactForm>({
  name: '',
  email: '',
  company: '',
  serviceType: 'become-advertiser',
  details: ''
});

export const isSubmittingAtom = atom(false);
export const submitResultAtom = atom<{ success: boolean; message: string } | null>(null);