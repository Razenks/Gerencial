import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const EmailModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ email: '', message: '', name: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setFormData({ email: '', message: '', name: '' });
                }, 3000);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('error');
            });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal - AJUSTES DE ALTURA AQUI */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        // Mudei max-w-lg para max-w-md (mais estreito)
                        // Mudei max-h-[90vh] para max-h-[80vh] (menos alto)
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden max-h-[80vh] flex flex-col"
                    >
                        {/* Header Compacto */}
                        <div className="bg-indigo-900 px-6 py-4 flex justify-between items-center shrink-0">
                            <h3 className="text-lg font-bold text-white">Enviar Mensagem</h3>
                            <button onClick={onClose} className="text-white/70 hover:text-white transition">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body com Scroll se necessário */}
                        <div className="p-6 overflow-y-auto">
                            {status === 'success' ? (
                                <div className="text-center py-6 space-y-3">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block text-green-500">
                                        <CheckCircle size={50} />
                                    </motion.div>
                                    <h4 className="text-xl font-bold text-slate-800">Mensagem Enviada!</h4>
                                    <p className="text-sm text-slate-500">Entraremos em contato em breve.</p>
                                </div>
                            ) : (
                                <form onSubmit={sendEmail} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Seu Nome</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            // Reduzi o padding vertical (py-2.5) e o tamanho da fonte
                                            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                            placeholder="Digite seu nome"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Seu E-mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                            placeholder="exemplo@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Mensagem</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="3" // Reduzi de 4 para 3 linhas
                                            className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition resize-none"
                                            placeholder="Como podemos ajudar?"
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-500 text-xs bg-red-50 p-2 rounded-lg">
                                            <AlertCircle size={14} /> Erro ao enviar. Tente novamente.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm mt-2"
                                    >
                                        {status === 'sending' ? (
                                            <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                                        ) : (
                                            <>Enviar E-mail <Send size={18} /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};