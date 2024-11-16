import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Series() {
  return (
    <div className="prose mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Chapter 18: Convergence and Divergence of Series</h1>
        <hr className="my-4" />

        <p>
          In this chapter, we explore the concept of infinite series, focusing on understanding when certain types of series
          converge (i.e., approach a finite limit) and when they diverge (i.e., grow without bound). The concepts of convergence
          and divergence are fundamental in calculus and analysis, as they help us understand the behavior of functions and
          sequences involving infinitely many terms.
        </p>
        <hr className="my-4" />

        <h2 className="text-xl font-semibold mt-4 mb-2">The Harmonic Series</h2>
        <p>We begin with the harmonic series, which is the sum of the reciprocals of the natural numbers:</p>
        <BlockMath math="\sum_{n=1}^{\infty} \frac{1}{n} = \frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \dots" />
        <p>
          This series features terms that decrease as <InlineMath math="n" /> increases, but they do not shrink fast enough for the sum to converge to a finite value. In fact, this series diverges, meaning that as we keep adding more terms, the total sum grows without bound and does not approach any finite limit.
        </p>
        <hr className="my-4" />

        <h2 className="text-xl font-semibold mt-4 mb-2">A Generalized Question</h2>
        <p>
          With an understanding of the harmonic series, we can ask a broader question: What happens if we sum the reciprocals of
          the natural numbers raised to some power <InlineMath math="P" />? In other words, consider the series:
        </p>
        <BlockMath math="\sum_{n=1}^{\infty} \frac{1}{n^P}" />
        <p>For different values of <InlineMath math="P" />, does this series converge or diverge? Let’s analyze this for various values of <InlineMath math="P" />.</p>
        
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>If <InlineMath math="P = 1" /></strong>: We return to the harmonic series, which, as mentioned earlier, diverges.
          </li>
          <li>
            <strong>If <InlineMath math="P > 1" /></strong>: The series becomes:
            <BlockMath math="\sum_{n=1}^{\infty} \frac{1}{n^P}" />
            <p>
              For instance, when <InlineMath math="P = 2" />, the series is:
            </p>
            <BlockMath math="\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}" />
            <p>
              This series converges to a finite value, known as the solution to the Basel problem. Convergence occurs because the terms <InlineMath math="\frac{1}{n^P}" /> decrease rapidly enough when <InlineMath math="P > 1" />.
            </p>
          </li>
          <li>
            <strong>If <InlineMath math="P < 1" /></strong>: The behavior changes. For <InlineMath math="P = \frac{1}{2}" />, for example, the terms decay more slowly, and the series diverges because they do not shrink quickly enough. The same result holds for any <InlineMath math="P \leq 1" />. As <InlineMath math="P" /> becomes smaller or negative, the terms decay even more slowly or grow, causing the series to diverge.
          </li>
        </ul>
        <hr className="my-4" />

        <h2 className="text-xl font-semibold mt-4 mb-2">A Conjecture: When Does the Series Converge?</h2>
        <p>
          From these examples, we can make a conjecture: The series <InlineMath math="\sum_{n=1}^{\infty} \frac{1}{n^P}" /> converges if and only if <InlineMath math="P > 1" />. But how can we formally prove this?
        </p>
        <hr className="my-4" />

        <h2 className="text-xl font-semibold mt-4 mb-2">The Cauchy Criterion</h2>
        <p>
          To formally prove the convergence or divergence of a series, we use <strong>Cauchy's convergence test</strong> (or <strong>Cauchy's criterion</strong>). This tool helps determine convergence by analyzing the behavior of the partial sums of a series.
        </p>
        <p>
          According to Cauchy's criterion, a series <InlineMath math="\sum a_n" /> converges if, for any <InlineMath math="\epsilon > 0" />, there exists an integer <InlineMath math="N" /> such that for all <InlineMath math="m, n > N" />, the difference between the partial sums <InlineMath math="S_n" /> and <InlineMath math="S_m" /> satisfies:
        </p>
        <BlockMath math="|S_n - S_m| < \epsilon" />
        <p>This test is particularly useful for series with non-negative, monotonic terms.</p>
        <hr className="my-4" />

        <h2 className="text-xl font-semibold mt-4 mb-2">The Cauchy Comparison Theorem</h2>
        <p>
          The <strong>Cauchy Comparison Theorem</strong> allows us to compare a given series with another known series to determine convergence. If we have two series <InlineMath math="\sum a_n" /> and <InlineMath math="\sum b_n" /> such that <InlineMath math="a_n \leq b_n" /> for sufficiently large <InlineMath math="n" />, and <InlineMath math="\sum b_n" /> converges, then <InlineMath math="\sum a_n" /> must also converge.
        </p>
        <p>
          This method is helpful for analyzing series like <InlineMath math="\sum_{n=1}^{\infty} \frac{1}{n^P}" /> by comparing them to a known geometric series, which converges when its common ratio is less than 1.
        </p>
        <hr className="my-4" />

        <h2 className="text-xl font-semibold mt-4 mb-2">Applying the Cauchy Criterion to <InlineMath math="\sum_{n=1}^{\infty} \frac{1}{n^P}" /></h2>
        <h3 className="font-semibold mt-4">Case 1: <InlineMath math="P \leq 1" /></h3>
        <p>
          If <InlineMath math="P \leq 1" />, the terms <InlineMath math="\frac{1}{n^P}" /> do not approach zero quickly enough, and the series diverges. For example, when <InlineMath math="P = 1" />, we have the harmonic series, which diverges. For <InlineMath math="P < 1" />, the terms decay even more slowly, leading to divergence.
        </p>
        <hr className="my-4" />

        <h3 className="font-semibold mt-4">Case 2: <InlineMath math="P > 1" /></h3>
        <p>
          If <InlineMath math="P > 1" />, the terms <InlineMath math="\frac{1}{n^P}" /> decrease rapidly enough to make the series converge. By comparing this series to a converging geometric series using the Cauchy Comparison Theorem, we can prove that it sums to a finite value.
        </p>
        <hr className="my-4" />

        <h2 className="text-xl font-semibold mt-4 mb-2">Special Case: The Series of Factorials</h2>
        <p>Consider the series of the reciprocals of factorials:</p>
        <BlockMath math="\sum_{n=0}^{\infty} \frac{1}{n!}" />
        <p>
          This series appears in contexts such as the Taylor series for <InlineMath math="e^x" />. The terms are:
        </p>
        <BlockMath math="\frac{1}{0!} + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \dots" />
        <p>
          This series converges to <InlineMath math="e" /> (Euler's number), approximately 2.718. The rapid decrease of the terms <InlineMath math="\frac{1}{n!}" /> ensures convergence, as they become very small very quickly, making the partial sums approach a finite limit.
        </p>
        <hr className="my-4" />

        <h2 className="text-xl font-semibold mt-4 mb-2">Conclusion</h2>
        <p>
          In this chapter, we explored the convergence and divergence of various infinite series, including the harmonic series, the
          generalized series <InlineMath math="\sum_{n=1}^{\infty} \frac{1}{n^P}" />, and the series of factorial reciprocals. We used tools like Cauchy's criterion and the Cauchy Comparison Theorem to understand their behavior. Ultimately, we concluded that the series <InlineMath math="\sum_{n=1}^{\infty} \frac{1}{n^P}" /> converges if and only if <InlineMath math="P > 1" />. This is a key insight for understanding series behavior in calculus and analysis.
        </p>
    </div>
  );
}
