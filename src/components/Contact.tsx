/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../AppContext';
import { CONTACT_INFO } from '../data';
import { Mail, MapPin, Building, Landmark, Send, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Client-side validation
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      tempErrors.name = t({ en: 'Name is required.', jp: 'お名前を入力してください。' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = t({ en: 'Email address is required.', jp: 'メールアドレスを入力してください。' });
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = t({ en: 'Please enter a valid email address.', jp: '有効なメールアドレス形式で入力してください。' });
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = t({ en: 'Subject is required.', jp: '件名を入力してください。' });
    }

    if (!formData.message.trim()) {
      tempErrors.message = t({ en: 'Message is required.', jp: 'お問い合わせ内容を入力してください。' });
    } else if (formData.message.length < 10) {
      tempErrors.message = t({ en: 'Message must be at least 10 characters.', jp: 'お問い合わせ内容は10文字以上で入力してください。' });
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success banner after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white transition-colors duration-500 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[80%] w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 font-display">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xs border border-blue-105">
            <Mail className="w-3.5 h-3.5" />
            <span>{t({ en: 'CONNECT WITH US', jp: 'お問い合わせ' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900">
            {t({ en: 'Contact Laboratory Office', jp: '研究協力・進学相談のご連絡' })}
          </h2>
          <div className="w-12 h-0.5 bg-[#1E3A8A] mx-auto" />
          <p className="text-slate-655 text-sm max-w-2xl mx-auto leading-relaxed">
            {t({
              en: 'We welcome partnership queries from international bio-medical institutes, medical practitioners, and motivated prospective graduate students.',
              jp: '生体信号計測、医療画像機器の共同研究委託、他大学アフィリエイト、ならびに当学科・大学院を目指す学生の訪問を歓迎します。'
            })}
          </p>
        </div>

        {/* Section Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Glass Details & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-slate-50 border border-slate-200/70 rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Landmark className="w-5.5 h-5.5 text-blue-600" />
                <span>{t({ en: 'Office Location', jp: '研究室所在地' })}</span>
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-white rounded-xl border border-slate-205 text-slate-500">
                    <Building className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      {t({ en: 'Institution', jp: '所属機関' })}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 leading-relaxed block">
                      {t({ en: 'The University of Kitakyushu', jp: '北九州市立大学' })}
                    </span>
                    <span className="text-xs text-slate-500 leading-normal block">
                      {t({ en: 'Department of Information Systems Engineering', jp: '国際環境工学部 情報システム工学科' })}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-white rounded-xl border border-slate-205 text-slate-500">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      {t({ en: 'Mailing Address', jp: '郵便宛先・所在地' })}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-705 leading-relaxed font-sans block whitespace-pre-line">
                      {t(CONTACT_INFO.address)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-white rounded-xl border border-slate-205 text-slate-500">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      {t({ en: 'Direct Email', jp: 'メールアドレス' })}
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm md:text-base font-semibold text-blue-600 hover:underline inline-block mt-0.5"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Informative footnote */}
              <div className="flex gap-2 items-start bg-blue-500/5 border border-blue-500/10 p-3.5 rounded-2xl text-xs text-slate-500 mt-6 leading-relaxed">
                <Info className="w-4.5 h-4.5 text-blue-600 flex-shrink-0" />
                <span>
                  {t({
                    en: 'Due to ongoing clinical testing inside healthcare hubs, office visits require at least 48 hours email notice.',
                    jp: '現在、病院内検証実験等により不在の場合があるため、ご訪問の際は事前に上記アドレスよりメールアポイントをお取りください。'
                  })}
                </span>
              </div>
            </div>

            {/* Google map iframe rendering */}
            <div className="rounded-3xl border border-slate-200 bg-slate-100 overflow-hidden aspect-video relative shadow-xs flex-1 min-h-[220px]">
              <iframe
                title="University of Kitakyushu Hibikino Campus map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.825638101683!2d130.71077751147573!3d33.894154972322305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543c4a045ca00dd%3A0xe54e60ac0cb1d310!2sThe%20University%20of%20Kitakyushu%20-%20Hibikino%20Campus!5e0!3m2!1sen!2sjp!4v1716335193922!5m2!1sen!2sjp"
                className="absolute inset-0 w-full h-full border-0 select-none"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Custom interactive validation contact form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6 border-b border-slate-100 pb-3 font-display">
              <Send className="w-5.5 h-5.5 text-blue-600" />
              <span>{t({ en: 'Secure Inquiry Dispatch', jp: 'お問い合わせフォーム' })}</span>
            </h3>

            {/* Form layout */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Success state banner */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex gap-3 bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-800 text-sm leading-relaxed"
                >
                  <CheckCircle className="w-5.5 h-5.5 text-emerald-500 flex-shrink-0" />
                  <div>
                    <span className="font-bold underline block mb-0.5">
                      {t({ en: 'Dispatch Successful', jp: '送信に成功しました' })}
                    </span>
                    <span>
                      {t({
                        en: 'Thank you for contacting Professor Takehito Hayami office. We will review your academic summary and contact you shortly.',
                        jp: 'お問い合わせをお送りいただきありがとうございました。内容を確認後、担当者より折り返しメールにてご連絡を差し上げます。'
                      })}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {t({ en: 'Your Name', jp: 'お名前（漢字／ローマ字）' })} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t({ en: 'e.g. Jean Smith', jp: '例：速水 太郎' })}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.name && (
                    <div className="flex gap-1 items-center text-xs text-red-500 mt-1.5 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {t({ en: 'Email Address', jp: 'メールアドレス' })} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 transition-all ${
                      errors.email ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex gap-1 items-center text-xs text-red-500 mt-1.5 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {t({ en: 'Subject Heading', jp: '件名・ご用件カテゴリー' })} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t({ en: 'e.g. Master Program Auditing', jp: '例：共同研究、見学、出願について' })}
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 transition-all ${
                    errors.subject ? 'border-red-500' : 'border-slate-200'
                  }`}
                />
                {errors.subject && (
                  <div className="flex gap-1 items-center text-xs text-red-500 mt-1.5 font-sans">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.subject}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {t({ en: 'Detailed Message', jp: 'お問い合わせ内容・相談欄' })} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder={t({
                    en: 'Please include your academic specialization background or prospective project parameters...',
                    jp: '現在の大学所属・専攻、学年、希望される研究内容等について、詳しくご記入ください（10文字以上）...'
                  })}
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-slate-200'
                  }`}
                />
                {errors.message && (
                  <div className="flex gap-1 items-center text-xs text-red-500 mt-1.5 font-sans">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#1E3A8A] hover:bg-blue-800 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-950/20 disabled:bg-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer select-none border border-transparent"
              >
                <span>
                  {isSubmitting
                    ? t({ en: 'DISPATCHING...', jp: '送信中...' })
                    : t({ en: 'SEND INQUIRY', jp: '内容を送信する' })}
                </span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
