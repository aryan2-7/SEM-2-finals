import { useState } from 'react';
import type { QuizQuestion } from '../data/types';

export default function Quiz({ questions, accent = 'var(--field)' }: { questions: QuizQuestion[]; accent?: string }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {questions.map((q, qi) => {
        const picked = answers[qi];
        const answered = picked !== undefined;
        return (
          <div
            key={qi}
            style={{
              background: 'var(--panel)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '18px 20px',
            }}
          >
            <p style={{ color: 'var(--text-h)', fontSize: 14.5, fontWeight: 500, marginBottom: 12 }}>
              {qi + 1}. {q.q}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {q.options.map((opt, oi) => {
                const isCorrect = oi === q.correct;
                const isPicked = oi === picked;
                let bg = 'var(--panel-raised)';
                let border = 'var(--border)';
                let color = 'var(--text)';
                if (answered && isCorrect) { bg = '#59c98e1a'; border = 'var(--green)'; color = 'var(--green)'; }
                else if (answered && isPicked && !isCorrect) { bg = '#ef5b6f1a'; border = 'var(--signal)'; color = 'var(--signal)'; }
                return (
                  <button
                    key={oi}
                    onClick={() => !answered && setAnswers(a => ({ ...a, [qi]: oi }))}
                    disabled={answered}
                    style={{
                      textAlign: 'left',
                      background: bg,
                      border: `1px solid ${border}`,
                      borderRadius: 6,
                      padding: '9px 14px',
                      fontSize: 13.5,
                      color,
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {answered && (
              <p style={{
                marginTop: 10,
                fontSize: 12.5,
                color: 'var(--text-dim)',
                borderLeft: `2px solid ${picked === q.correct ? 'var(--green)' : accent}`,
                paddingLeft: 10,
              }}>
                {picked === q.correct ? 'Correct — ' : 'Not quite — '}{q.explain}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
