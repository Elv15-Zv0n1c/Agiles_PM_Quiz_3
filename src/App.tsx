/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  LogOut, 
  AlertCircle,
  Trophy,
  Target,
  Clock
} from 'lucide-react';
import { QUIZ_QUESTIONS } from './constants';
import { QuizState } from './types';

export default function App() {
  const [state, setState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100;
  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;

  const handleStart = () => {
    setState('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const handleRestart = () => {
    handleStart();
  };

  const handleCancelClick = () => {
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    setState('start');
    setShowCancelModal(false);
  };

  const handleOptionClick = (index: number) => {
    if (showFeedback) return;
    
    setSelectedOption(index);
    setShowFeedback(true);
    
    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setState('result');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 h-14 flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2">
          <Target className="w-6 h-6 text-indigo-600" />
          <h1 className="text-lg font-bold tracking-tight text-slate-800 hidden sm:block">
            Agile Zertifizierung: Kanban & XP
          </h1>
          <h1 className="text-lg font-bold tracking-tight text-slate-800 sm:hidden">
            Agile Quiz
          </h1>
        </div>
        
        {state !== 'start' && (
          <button
            onClick={handleCancelClick}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold bg-red-50 text-red-600 border border-red-100 rounded-lg transition-all hover:bg-red-100 active:scale-95 shadow-sm shadow-red-50"
            id="cancel-btn"
          >
            <LogOut className="w-4 h-4" />
            Abbrechen
          </button>
        )}
      </header>

      {/* Progress Bar */}
      {state === 'quiz' && (
        <div className="w-full h-1 bg-slate-200 sticky top-16 z-30">
          <motion.div 
            className="h-full bg-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {state === 'start' && (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
              >
                <div className="w-full overflow-hidden border-b border-slate-100">
                  <img 
                    src="https://lh3.googleusercontent.com/d/12CaHkujC5A5sy_Lbkc1_CNCh1q0uRXnk" 
                    alt="Agile Quiz Header"
                    className="w-full h-auto object-contain block"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-8 text-center">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Agiles Projektmanagement
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                    Testen Sie Ihr Wissen über <span className="font-semibold text-red-600">Kanban</span> und <span className="font-semibold text-red-600">Extreme Programming (XP)</span>. 
                    40 Fragen basierend auf theoretischen Grundlagen.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                      <Clock className="w-4 h-4" />
                      ca. 20 Minuten
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                      <AlertCircle className="w-4 h-4" />
                      40 Fragen
                    </div>
                  </div>

                  <button
                    onClick={handleStart}
                    className="mt-10 w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto group"
                    id="start-quiz-btn"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Quiz Starten
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {state === 'quiz' && (
              <motion.div
                key={`question-${currentQuestionIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
              >
                <div className="w-full overflow-hidden border-b border-slate-100">
                  <img 
                    src="https://lh3.googleusercontent.com/d/12CaHkujC5A5sy_Lbkc1_CNCh1q0uRXnk" 
                    alt="Agile Quiz Header"
                    className="w-full h-auto object-contain block"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-6 flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                        Frage {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-slate-400 mr-2 uppercase">Score</span>
                      <span className="text-lg font-bold text-slate-700">{score}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-8 leading-snug">
                    {currentQuestion.text}
                  </h3>

                  <div className="grid gap-3">
                    {currentQuestion.options.map((option, idx) => {
                      let optionClasses = "p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden ";
                      
                      if (showFeedback) {
                        if (idx === currentQuestion.correctAnswer) {
                          optionClasses += "border-emerald-500 bg-emerald-50 text-emerald-900 ";
                        } else if (idx === selectedOption) {
                          optionClasses += "border-red-500 bg-red-50 text-red-900 ";
                        } else {
                          optionClasses += "border-slate-100 bg-slate-50 opacity-50 ";
                        }
                      } else {
                        optionClasses += "border-slate-100 bg-white hover:border-indigo-200 hover:bg-indigo-50/30 text-slate-700 ";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(idx)}
                          disabled={showFeedback}
                          className={optionClasses}
                          id={`option-${idx}`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option}</span>
                            {showFeedback && idx === currentQuestion.correctAnswer && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                            )}
                            {showFeedback && idx === selectedOption && idx !== currentQuestion.correctAnswer && (
                              <XCircle className="w-5 h-5 text-red-600 shrink-0 ml-2" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-8 pt-6 border-t border-slate-100"
                    >
                      <div className={`p-4 rounded-xl flex gap-3 ${
                        selectedOption === currentQuestion.correctAnswer 
                        ? 'bg-emerald-50 text-emerald-800' 
                        : 'bg-red-50 text-red-800'
                      }`}>
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-sm mb-1">
                            {selectedOption === currentQuestion.correctAnswer ? 'Richtig!' : 'Falsch!'}
                          </p>
                          <p className="text-sm leading-relaxed">
                            {currentQuestion.explanation}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-end mt-8">
                    {showFeedback && (
                      <button
                        onClick={handleNext}
                        className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all flex items-center gap-2 group"
                        id="next-btn"
                      >
                        {isLastQuestion ? 'Ergebnis anzeigen' : 'Nächste Frage'}
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {state === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
              >
                <div className="w-full overflow-hidden border-b border-slate-100">
                  <img 
                    src="https://lh3.googleusercontent.com/d/12CaHkujC5A5sy_Lbkc1_CNCh1q0uRXnk" 
                    alt="Agile Quiz Header"
                    className="w-full h-auto object-contain block"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-10 text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center relative">
                      <Trophy className="w-12 h-12 text-indigo-600" />
                      <motion.div 
                        className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </div>

                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Quiz Beendet!</h2>
                  <p className="text-slate-500 mb-8">Hervorragende Arbeit bei der Überprüfung Ihres Wissens.</p>

                  <div className="bg-slate-50 rounded-2xl p-8 mb-10 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Ihr Score</p>
                      <p className="text-4xl font-black text-indigo-600">
                        {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
                      </p>
                    </div>
                    <div className="text-center border-l border-slate-200">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Richtig</p>
                      <p className="text-4xl font-black text-slate-800">
                        {score} <span className="text-lg font-medium text-slate-400">/ {QUIZ_QUESTIONS.length}</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <button
                      onClick={handleRestart}
                      className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                      id="restart-btn"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Quiz Neustarten
                    </button>
                    <button
                      onClick={() => setState('start')}
                      className="w-full py-4 bg-slate-100 text-slate-600 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all"
                      id="back-home-btn"
                    >
                      Zum Startbildschirm
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer (Start Screen Only) */}
      {state === 'start' && (
        <footer className="h-16 flex items-center justify-center text-slate-400 text-xs gap-4 border-t border-slate-100">
          <span>&copy; 2026 Agile Akademie</span>
          <span className="w-1 h-1 bg-slate-200 rounded-full" />
          <span>Theorie: Kanban & XP</span>
        </footer>
      )}

      {/* Cancel Modal */}
      <AnimatePresence>
        {showCancelModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setShowCancelModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl relative z-10 w-full max-w-sm overflow-hidden"
              id="cancel-modal"
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Quiz abbrechen?</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Ihr aktueller Fortschritt und Ihr Score gehen verloren. Möchten Sie wirklich zum Startbildschirm zurückkehren?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setShowCancelModal(false)}
                    className="py-3 px-4 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Weiter am Quiz
                  </button>
                  <button
                    onClick={confirmCancel}
                    className="py-3 px-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 shadow-lg shadow-red-100 transition-colors"
                  >
                    Ja, Abbrechen
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
